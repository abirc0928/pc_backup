import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import { getDatabase, ref, set } from "firebase/database";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { app } from "./Firebase"
import Singup from "./Signup"
import Singin from "./Singin"
import {getFirestore, collection, addDoc} from "firebase/firestore";
// const db = getDatabase(app)
const auth = getAuth(app)


const fireStore = getFirestore(app)
function App() {
  // const putdata = () =>{
  //   set(ref(db,"users/abir"), {
  //     id: 1,
  //     name: "abir chowdhury",
  //     age: 21,
  //   })
  // }

  // const authAccount = () =>{
  //   createUserWithEmailAndPassword(auth, "abirchowdhury0928@gmail.com", 'abir990928')
  //   .then((userCredential) => {
  //     // Signed up 
  //   console.log(userCredential)
  //     // ...
  //   })
  // }
// ===================== user login or not =============
  // const [user, setUser] = useState(null)

  // useEffect(() => {
  //   onAuthStateChanged(auth, user => {
  //     if (user) {
  //       setUser(user)
  //     } else {

  //       setUser(null)
  //     }
  //   })
  // }, [])
  // if (user === null) {
  //   return (
  //     <>
  //       {/* <p>Firebase react</p>
  //   <button onClick={authAccount}>Create Account</button> */}
  //       <Singup></Singup>
  //       <Singin></Singin>
  //     </>
  //   )
  // }

  // ===========firestore ========
  const writeData = async () =>{
    const result = await addDoc(collection(fireStore, 'cities'),{
     name: 'Dhaka',
     pin: 1234,
    });
    console.log("result", result)
   
  }

  return (
    <>
      <p>firebase</p>
      <button onClick={writeData}>put data</button>
    </>
  )
}

export default App
