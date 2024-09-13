import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "./Firebase"
import { useState } from 'react'

const auth = getAuth(app)
export default function Signup() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const authAccount = () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log("success")
            })
    }
    return (
        <div>
            <h2>Signup pages</h2>
            <label>Email</label>
            <input onChange={e => setEmail(e.target.value)} value={email} placeholder="enter your email"></input>
            <label>Password</label>
            <input onChange={e => setPassword(e.target.value)} value={password} placeholder="enter your password"></input>
            <button onClick={authAccount}>submit</button>
        </div>
    )
}