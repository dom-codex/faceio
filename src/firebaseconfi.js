// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage,ref,getDownloadURL,connectStorageEmulator } from "firebase/storage";
import {getFirestore,collection,where,query,getDocs,connectFirestoreEmulator,doc, updateDoc,addDoc} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "facebio-ec9dc.firebaseapp.com",
  projectId: "facebio-ec9dc",
  storageBucket: "facebio-ec9dc.appspot.com",
  messagingSenderId:process.env.REACT_APP_MESSAGING_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: "G-C8QKZNHHXK"
};

// Initialize Firebase
let app
const initFirebaseApp=()=>{
    app = initializeApp(firebaseConfig)
    const firestore = getFirestore(app)
    const storage = getStorage(app)
   // connectAuthEmulator(auth,"http://localhost:9099")
    connectFirestoreEmulator(firestore,"localhost",8080)
   connectStorageEmulator(storage,"localhost",9199)
  }
  initFirebaseApp()
//FIREBASE FUNCTIONS
export const authUsers=(key,{matric:id,password},collectionKey)=>{
  const db = getFirestore()
  const collectionRef = collection(db,collectionKey)
  const conditionOne  = where(key,"==",id)
  const conditionTwo = where("password","==",password)
  const docQuery= query(collectionRef,...[conditionOne,conditionTwo])
  return getDocs(docQuery)
}
export const updateDocument= (collectionKey,docId,data)=>{
  const db = getFirestore()
  const docRef = doc(db,collectionKey,docId)
  return updateDoc(docRef,data)
}
export const createNewDocument=(data,collectionKey)=>{
  //   const app = initializeApp(firebaseConfig)
     const db = getFirestore()
    // connectFirestoreEmulator(db,"localhost",8080)
     const collectionRef = collection(db,collectionKey)
     return addDoc(collectionRef,data)
 }
 export const findParticularDocument=(key,value,collectionKey)=>{
  const db = getFirestore()
  const collectionRef = collection(db,collectionKey)
  const whereRef = where(key,"==",value)
  const docQuery= query(collectionRef,whereRef)
  return getDocs(docQuery)
}
export const getUrl = (snapRef)=>{
  return getDownloadURL(snapRef)
  }
  export const getStorageRef=(path)=>{
    const storage = getStorage(app)
    const imgRef = ref(storage,path)
    return imgRef
  }