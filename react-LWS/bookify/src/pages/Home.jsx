import React, { useState, useEffect } from 'react'
import BookCard from '../components/BookCard'
import CardGroup from 'react-bootstrap/CardGroup';
import { useFirebase } from '../context/Firebase';

const Home = () => {
    const firebase = useFirebase()
    const [books, setBooks] = useState([])

    useEffect(() => {
        firebase.listAllBooks().then((books) => setBooks(books.docs))
    }, [])

    return (
        <div className="container mt-5">
            <CardGroup>
                {books.map((book) => (
                    <BookCard {...book.data()} id={book.id} key={book.id}></BookCard>
                ))}
            </CardGroup>
        </div>
    )
}

export default Home