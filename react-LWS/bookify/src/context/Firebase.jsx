import { useState, createContext, useContext, useEffect } from "react";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
} from "firebase/auth";
const FirebaseContext = createContext(null)

import { getFirestore, collection, addDoc, getDocs, getDoc, doc, query, where } from 'firebase/firestore'
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD1LPxNCqgdEeijJfmefCOJgEZL0KGRt_c",
  authDomain: "bookify-8b753.firebaseapp.com",
  projectId: "bookify-8b753",
  storageBucket: "bookify-8b753.appspot.com",
  messagingSenderId: "1065603496969",
  appId: "1:1065603496969:web:3d87321f38b44ecf91ccd8"
};



export const useFirebase = () => useContext(FirebaseContext)
const firebaseApp = initializeApp(firebaseConfig)
const firebaseAuth = getAuth(firebaseApp)
const firestore = getFirestore(firebaseApp)
const storage = getStorage(firebaseApp)

const googleProvider = new GoogleAuthProvider()
export const FirebaseProvider = (props) => {

  const [user, setUser] = useState(null)
  useEffect(() => {
    onAuthStateChanged(firebaseAuth, user => {
      if (user) setUser(user)
      else setUser(null)
    })
  }, [])
console.log(user.email)
  const signupUserWithEmailAndPassword = (email, password) => {
    createUserWithEmailAndPassword(firebaseAuth, email, password)
  }
  const signinUserWithEmailAndPassword = (email, password) => {
    signInWithEmailAndPassword(firebaseAuth, email, password)
  }

  const signinWithGoogle = () => {
    signInWithPopup(firebaseAuth, googleProvider)
  }

  const bookListing = async (name, ISBN, price, cover) => {
    const imageRef = ref(storage, `uploads/images/${Date.now()}-${cover.name}`)
    const uploadResult = await uploadBytes(imageRef, cover)
    return await addDoc(collection(firestore, "books"), {
      name,
      ISBN,
      price,
      imageURL: uploadResult.ref.fullPath,
      userId: user.uid,
      userEmail: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
    });
  }


  const listAllBooks = () => {
    return getDocs(collection(firestore, "books"))
  }

  const getImageURL = (path) => {
    return getDownloadURL(ref(storage, path))
  }

  const getBookById = async (id) => {
    const docRef = doc(firestore, 'books', id)
    const result = await getDoc(docRef)
    return result;
  }

  const placeOrder = async (bookId, qty) => {
    const collectionRef = collection(firestore, "books", bookId, "orders")
    const result = await addDoc(collectionRef, {
      userId: user.uid,
      userEmail: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      qty: Number(qty),
    })
    return result
  }
  const fetchMyBooks = async (userId) => {
    const collectionRef = collection(firestore, "books");
    const q = query(collectionRef, where("userID", "==", userId));

    const result = await getDocs(q);
    console.log(result)
    return result;
  };

  const isLoggedIn = user ? true : false;
  return <FirebaseContext.Provider
    value={{
      signupUserWithEmailAndPassword, signinUserWithEmailAndPassword,
      signinWithGoogle,
      isLoggedIn,
      bookListing,
      listAllBooks,
      getImageURL,
      getBookById,
      placeOrder,
      fetchMyBooks,
      user
    }}>{props.children}</FirebaseContext.Provider>
}