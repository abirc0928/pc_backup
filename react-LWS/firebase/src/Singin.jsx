import { app } from "./Firebase"
import { useState } from 'react'
import { getAuth, signInWithEmailAndPassword  } from "firebase/auth";
const auth = getAuth(app)

export default function Signup() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const signinUser = () => {
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in 
         console.log("login success")
          // ...
        }).catch(err => console.log(err))
    }
    return (
        <div>
            <h2>SignIN pages</h2>
            <label>Email</label>
            <input onChange={e => setEmail(e.target.value)} value={email} placeholder="enter your email"></input>
            <label>Password</label>
            <input onChange={e => setPassword(e.target.value)} value={password} placeholder="enter your password"></input>
            <button onClick={signinUser}>Singin me</button>
        </div>
    )
}