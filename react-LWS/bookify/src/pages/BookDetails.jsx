import { React, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useFirebase } from '../context/Firebase';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
const BookDetails = () => {
    const [book, setBook] = useState(null)
    const firebase = useFirebase();
    const param = useParams()
    const [URL, setURL] = useState(null)
    const [qty, setQty] = useState(1)

    console.log(book)
    useEffect(() => {
        firebase.getBookById(param.bookId).then((book) => {
            setBook(book.data())
        })
    }, [])

    useEffect(() => {
        if (book) {
            firebase.getImageURL(book.imageURL).then((URL) => {
                setURL(URL)
            })
        }
    }, [book])
    const order = async () =>{
        const result = await firebase.placeOrder(param.bookId, qty )
        console.log(result)
    }
    if (book == null) return <h1>Loading...</h1>
    return <div className="container mt-5">
        <h1>{book.name}</h1>
        <img src={URL} width='50%' style={{ borderRadius: "25px" }}></img>
        <h1>Details</h1>
        <p>Price: {book.price}</p>
        <p>ISBN: {book.ISBN}</p>
        <h1>Owner Details</h1>
        <p>Name: {book.displayName}</p>
        <p>Email: {book.userEmail}</p>
        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Qty</Form.Label>
            <Form.Control onChange={(e) => setQty(e.target.value)}
                value={qty}
                type="number" />
        </Form.Group>
        <Button onClick={order} variant="success">Buy now</Button>
    </div>
}

export default BookDetails