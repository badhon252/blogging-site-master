// import { initializeApp } from "./firebase/app";
// import { getFirestore } from "./firebase/firestore/lite";
// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';
import "/firebase/compat/firestore.js";

let firebaseConfig = {
  apiKey: "AIzaSyDLHITpeUbkPkEOfpvXdKr1kGeCO33-kaI",

  authDomain: "desi-blogging-website.firebaseapp.com",

  projectId: "desi-blogging-website",

  storageBucket: "desi-blogging-website.appspot.com",

  messagingSenderId: "927647131525",

  appId: "1:927647131525:web:e5feafc02dbbce7a9086ec",

  measurementId: "G-YS4ZCDKKN1",
};

firebase.initializeApp(firebaseConfig);
const db = getFirestore("blogs");

// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);

// Get a list of cities from your database
// async function getCities(db) {
//   const citiesCol = collection(db, "cities");
//   const citySnapshot = await getDocs(citiesCol);
//   const cityList = citySnapshot.docs.map((doc) => doc.data());
//   return cityList;
// }

// export default db;
