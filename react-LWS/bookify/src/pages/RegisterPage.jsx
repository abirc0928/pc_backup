import React  from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom'
import { useFirebase } from '../context/Firebase';
import { useState, useEffect } from 'react';

export default function RegisterPage() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const fireBase = useFirebase()
    const navigate = useNavigate()
    useEffect(()=>{
        // if(fireBase.isLoggedIn){
        //     // navigate
        //     console.log(fireBase.isLoggedIn)
        //     navigate("/")
        // }

    },[fireBase, navigate])

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log("Start")
        const result = await fireBase.signupUserWithEmailAndPassword(email, password)
        console.log(result)
        console.log("end")
    }
    return (
        <div>
            <div className='container mt-5'>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            type="password" placeholder="Password" />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Create Account
                    </Button>
                </Form>
            </div>
        </div>
    )
}

