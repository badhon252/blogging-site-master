import { db } from "./firebase.js";
import {
  collection,
  getDocs,
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js";

const blogSection = document.querySelector(".blogs-section");

//

const querySnapshot = await getDocs(collection(db, "blogs"));
console.log(querySnapshot);

//! there is a problem in this function
const createBlog = (blog) => {
  let data = blog.data();
  blogSection.innerHTML += `
    <div class="blog-card">
        <img src="${data.bannerImage}" class="blog-image" alt="">
        <h1 class="blog-title">${data.title.substring(0, 100) + "..."}</h1>
        <p class="blog-overview">${data.article.substring(0, 200) + "..."}</p>
        <a href="/${blog.id}" class="btn dark">read</a>
    </div>
    `;
};

querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  //?  Object.keys returns an array of a given object's own enumerable property names, iterated in the same order that a normal loop would.
  //? this helps me to dubuge
  if (doc.id != decodeURI(location.pathname.split("/").pop())) {
    console.log(doc.id, " => ", doc.data());
    createBlog(doc);
  }
});
