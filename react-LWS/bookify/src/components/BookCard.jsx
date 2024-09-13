import React, { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useFirebase } from '../context/Firebase';
import { useNavigate} from 'react-router-dom'

const BookCard = (props) => {
    const firebase = useFirebase();
    const navigate = useNavigate()
    const [URL, setURL] = useState(null)
    useEffect(()=>{
        firebase.getImageURL(props.imageURL).then((URL)=>{
            setURL(URL)
        })
    },[])
  
    return (
        <div>
            <Card style={{ width: '18rem', margin: '15px' }} >
                <Card.Img variant="top" style={{ width: '18rem', height: '150px' }} src={URL} />
                <Card.Body>
                    <Card.Title>{props.name}</Card.Title>
                    <Card.Text>
                        This books has a title {props.name} and this book is sold by {props.displayName} and this book costs Tk.{props.price}
                    </Card.Text>
                    <Button onClick={e => navigate(`/book/view/${props.id}`)} variant="primary">View</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default BookCard