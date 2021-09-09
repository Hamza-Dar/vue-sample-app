import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// firebase init

const firebaseConfig = {
  apiKey: "AIzaSyC8BX0jWucsmTPZbNit6qBcONDQsk97SXQ",
  authDomain: "vuegram-b0131.firebaseapp.com",
  projectId: "vuegram-b0131",
  storageBucket: "vuegram-b0131.appspot.com",
  messagingSenderId: "763396380339",
  appId: "1:763396380339:web:29718382963c9c5c3742c6",
};

firebase.initializeApp(firebaseConfig);

// utils
const db = firebase.firestore();
const auth = firebase.auth();

// collection references
const usersCollection = db.collection("users");
const postsCollection = db.collection("posts");
const commentsCollection = db.collection("comments");
const likesCollection = db.collection("likes");

// export utils/refs
export {
  db,
  auth,
  usersCollection,
  postsCollection,
  commentsCollection,
  likesCollection,
};
