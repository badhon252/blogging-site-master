import { db } from "./firebase";
import {
  doc,
  getDoc,
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js";

const blogSection = document.querySelector(".blogs-section");
// Google fire base v8
// db.collection("blogs")
//   .get()
//   .then((blogs) => {
//     blogs.forEach((blog) => {
//       // console.log(blog);
//       if (blog.id != decodeURI(location.pathname.split("/").pop())) {
//         createBlog(blog);
//       }
//     });
//   });

doc(db, "blogs")
  .getDoc()
  .then(() => {
    console.log(doc);
  });

// Google fire base v9
// const querySnapshot = await getDocs(collection(db, blogs));
// querySnapshot.forEach((blog) => {
//   console.log(blog);
//   if (blog.id != decodeURI(location.pathname.split("/").pop())) {
//     createBlog(blog);
//   }
// });
//

//v9
// const querySnapshot = await getDocs(collection(db, "blogs"));
// querySnapshot.forEach((blog) => {
//   if (blog.id != decodeURI(location.pathname.split("/").pop())) {
//     createBlog(blog);
//   }
// });
//

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
