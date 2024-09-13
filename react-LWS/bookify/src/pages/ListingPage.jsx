import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useFirebase } from '../context/Firebase';
const ListingPage = () => {
    const [name, setName] = useState("")
    const [isbnNumber, setIsbnNumber] = useState("")
    const [price, setPrice] = useState("")
    const [coverPic, setCoverPic] = useState("")
    const firebase = useFirebase();

    const handleSubmit = async (e) => {
        e.preventDefault()
        await firebase.bookListing(name, isbnNumber, price, coverPic)
    }
    return (
        <div className='container mt-5'>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control onChange={(e) => setName(e.target.value)}
                        value={name}
                        type="text" placeholder="Enter name of book" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>ISBN number</Form.Label>
                    <Form.Control onChange={(e) => setIsbnNumber(e.target.value)}
                        value={isbnNumber}
                        type="text" placeholder="Enter IsbnNumber" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Price</Form.Label>
                    <Form.Control onChange={(e) => setPrice(e.target.value)}
                        value={price}
                        type="text" placeholder="Enter Price" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Cover pic</Form.Label>
                    <Form.Control onChange={(e) => setCoverPic(e.target.files[0])}
                        
                        type="file" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>

        </div>
    )
}

export default ListingPage