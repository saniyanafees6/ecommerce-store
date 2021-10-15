import React, { useState } from 'react'
import { Card } from 'react-bootstrap'

const Product = ({ product }) => {
    const [isShown, setIsShown] = useState(false);
    return (
        <Card 
            className="my-3 p-3 rounded product__card"
            onMouseEnter={() => setIsShown(true)}
            onMouseLeave={() => setIsShown(false)}
        >
            <a href={`/product/${product._id}`}>
                <Card.Img src={product.image}/>    
            </a>
                {isShown && (
                    <Card.Body className="display__hover">
                    <Card.Title as='div'><strong>{product.name}</strong></Card.Title>    
                    <Card.Text>${product.price}</Card.Text>
                    <Card.Text as="div" className="product__details">
                        <a href={`/product/${product.id}`} className="ml-auto"><i className="far fa-eye"></i></a>
                        <a href={`/product/${product.id}`} className="ms-auto"><i class="fas fa-shopping-cart"></i></a>
                    </Card.Text>
                </Card.Body>   
                 )}     
        </Card>
    )
}

export default Product


// <div className="App">
// <button
//   onMouseEnter={() => setIsShown(true)}
//   onMouseLeave={() => setIsShown(false)}>
//   Hover over me!
// </button>
// {isShown && (
//   <div>
//     I'll appear when you hover over the button.
//   </div>
// )}
// </div>