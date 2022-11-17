import { initializeApp } from "./firebase/app";
import { getFirestore } from "./firebase/firestore/lite";
// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';
// import { getFirestore } from "/firebase/firestore";

console.log(firebase);
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
