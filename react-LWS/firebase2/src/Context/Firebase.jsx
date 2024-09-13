import React from 'react'
import { createContext, useContext, useState,useEffect } from 'react'
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { getDatabase, set, ref, get, child, onValue } from "firebase/database";
const FirebaseContext = createContext(null)
export const useFirebase = () => useContext(FirebaseContext)
const firebaseConfig = {
    apiKey: "AIzaSyCb_w-ff04W0OXpaTdb8jK0wKKvdvG0K5E",
    authDomain: "app-5eb4d.firebaseapp.com",
    databaseURL: "https://app-5eb4d-default-rtdb.firebaseio.com",
    projectId: "app-5eb4d",
    storageBucket: "app-5eb4d.appspot.com",
    messagingSenderId: "738108367701",
    appId: "1:738108367701:web:fc4d738fed357bab88c5dc",
    measurementId: "G-MMGPLG9PG3",
    databaseURL: "https://app-5eb4d-default-rtdb.firebaseio.com/"
};

const firebaseApp = initializeApp(firebaseConfig)
const firebaseAuth = getAuth(firebaseApp)
const database = getDatabase(firebaseApp)
const provider = new GoogleAuthProvider();

export const FirebaseProvider = (props) => {
    // singup with email
    const singupEmail = (email, password) => {
        return createUserWithEmailAndPassword(firebaseAuth, email, password)
    }
    // singup with googel
    const singinGoogle = () => signInWithPopup(firebaseAuth, provider)
        .then((result) => {

            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;

            const user = result.user;

        }).catch((error) => {

            const errorCode = error.code;
            const errorMessage = error.message;

            const email = error.customData.email;

            const credential = GoogleAuthProvider.credentialFromError(error);

        });
    // set realtime data
    const putData = (key, data) => set(ref(database, key), data)

    // get realtime data
    // get(child(ref(database), "grandfather/father/child")).then((snapshot) => {
    //     console.log(snapshot.val())
    // })
    const [name, setName] = useState(null)
    // onValue realtime data
    useEffect(() => {
        onValue(ref(database, "grandfather/father/child"), (snapshot) =>
             setName(snapshot.val().name)
            // console.log(snapshot.val())
        )
      
    }, [])


    return (
        <FirebaseContext.Provider value={{ singupEmail, putData, singinGoogle }}>
            {props.children}
            <h3>name is {name}</h3>
        </FirebaseContext.Provider>
    )
}


