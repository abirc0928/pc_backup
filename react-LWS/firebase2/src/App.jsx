import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {useFirebase} from "./Context/Firebase"

function App() {
  const firebase = useFirebase()
  console.log('Firebase', firebase)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const putDataNew = () =>{
    firebase.putData("grandfather/father/child", {id: 1, name: "abir", age: 24})
    console.log("click")
  }
  return (
    <>
      <p>firebase</p>
      <input onChange={(e)=> setEmail(e.target.value)} value={email} type="email" placeholder="Enter Email"></input>
      <input onChange={(e)=> setPassword(e.target.value)} value={password}type="password" placeholder="Enter Password"></input>
      <button onClick={()=> {
        firebase.singupEmail(email, password)
        firebase.putData("users/" + "mead", {email, password})
        }}>SingUP</button>
        <br></br>
        <button onClick={()=> {
          firebase.singinGoogle()
        }}>SingUp with google</button>
         <button onClick={putDataNew}>Trigger</button>
    </>
  )
}

export default App
