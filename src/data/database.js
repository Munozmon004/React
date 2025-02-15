import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, doc, getDoc, query, where, addDoc, setDoc, writeBatch, documentId } from "firebase/firestore";
import products from "./data";

const firebaseConfig = {
  apiKey: "AIzaSyDUWWgqIhZyWAzysK_aoh_ZAjB153QvYZs",
  authDomain: "tienda-react-ecdd5.firebaseapp.com",
  projectId: "tienda-react-ecdd5",
  storageBucket: "tienda-react-ecdd5.firebasestorage.app",
  messagingSenderId: "123663021521",
  appId: "1:123663021521:web:b95e7686fdf87ad4a59cf0"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


export default async function getAsyncData () {
    const collectionRef = collection(db, "products")
    const productsSnapshot = await getDocs(collectionRef)
    console.log(productsSnapshot)

    const documentsData = productsSnapshot.docs.map( doc => {
    const fullData = doc.data()
    fullData.id = doc.id;
    return fullData
 });
 return documentsData;
}

export async function getAsyncItemById(itemID) {
  const docRef = doc(db, "products", itemID) 
  const docSnapshot = await getDoc(docRef);
  const docData = docSnapshot.data();
  return docData;

}

export async function getAsyncItemsByCategory(catID){
    const productsColRef = collection(db, "products");
    const q = query(productsColRef, where("category","==", catID))

    const productsSnapshot = await getDocs(q)
    console.log(productsSnapshot)

    const documentsData = productsSnapshot.docs.map(doc => {
        const fullData = doc.data()
        fullData.id = doc.id;
        return fullData;
    }
)
return documentsData;
}

export async function createDocument(){
    const newProductRef = doc(db, "products", "nuevo-id")
    await setDoc (newProductRef, {
        title: "Nuevo producto",
        price: 10000,
        stock: 8,
        img: 'https://crdms.images.consumerreports.org/c_lfill,w_470,q_auto,f_auto/prod/cars/chrome/white/2023FOC050017_1280_01', 
        category: 'expensive'   
    })
    console.log("Nuevo Documento creado")
}

export async function exportProductsToDB(){
    for(let item of products){
        delete item.id;
        const docID = await addDoc(collection(db,"products"), item)
        console.log("Documento Creado", docID.id)
    }
}

export async function exportProductsWithBatch(){
    const batch = writeBatch(db);
    products.forEach( item => {
        const itemid = `${item.id}`;
        delete item.id;
        const newDoc = doc(db, "products", `item-${itemid}`);
        batch.set(newDoc, item);
    });

    const commitRes = await batch.commit()
    console.log("Commit de products completo", commitRes)

}

export async function createBuyOrder(orderData){
    console.log(orderData);
    const newOrderDoc = await addDoc(collection(db, "orders"), orderData);

    return newOrderDoc.id
}

export async function createBuyOrderWithStockUpdate(order){
    const orderRef = collection(db, "order");
    const productsRef = collection(db, "products");

    const batch = writeBatch(db);
    const arrayIds = order.items.map((item) => item.id);
    const q = query(productsRef, where(documentId(), "in", arrayIds));
    const querySnaphot = await getDocs(q);
    const docsToUpdate = querySnaphot.docs;

    let itemsSinStock = [];
    docsToUpdate.forEach((doc) => {
     let { stock } = doc.data();

     let itemInCart = order.items.find((item) => item.id === doc.id);

     let countInCart = itemInCart.count;
     let newStock = stock - countInCart;
       if (newStock < 0) {
         itemsSinStock.push(doc.id);
        }
        else {
          batch.update(doc.ref, { stock: newStock });
        }
    });

    const itemsSinStockString = itemsSinStock.map( item => item.title ).join(", ");
    if (itemsSinStock.length >= 1){
        throw new Error(`Stock no disponible para los productos ${itemsSinStockString}`);    
      }
      // LLegado este punto, podemos estar seguros que todos los productos cuentan con stock suficiente
      else {
        //* 6.  hacemos el "commit" del batch  actualizando todos los documentos y creamos la orden de compra
        await batch.commit();
        //* 7. Generamos la orden de compra    
        let newOrder = await addDoc(orderRef, order);
        return newOrder.id;
    }
    
}

export async function updateStock(){}