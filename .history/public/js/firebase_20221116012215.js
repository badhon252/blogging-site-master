let firebaseConfig = {
  apiKey: "AIzaSyDLHITpeUbkPkEOfpvXdKr1kGeCO33-kaI",

  authDomain: "desi-blogging-website.firebaseapp.com",

  projectId: "desi-blogging-website",

  storageBucket: "desi-blogging-website.appspot.com",

  messagingSenderId: "927647131525",

  appId: "1:927647131525:web:e5feafc02dbbce7a9086ec",

  measurementId: "G-YS4ZCDKKN1",
};


const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage [enter image description here][1]= getStorage();

firebase.initializeApp(firebaseConfig);

let db = firebase.firestore("blogs");
export { app, db, storage };
