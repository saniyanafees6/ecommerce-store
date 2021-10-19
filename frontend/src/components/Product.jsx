import React, { useState } from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Product = ({ product }) => {
    const [isShown, setIsShown] = useState(false);
    return (
        <Card 
            className={`product__${product._id}`}
            onMouseEnter={() => setIsShown(true)}
            onMouseLeave={() => setIsShown(false)}
        >
            <Link to={`/product/${product._id}`}>
                <Card.Img src={product.image}/>    
            </Link>
                {isShown && (
                    <Card.Body className="display__hover">
                    <Card.Title as='div'><strong>{product.name}</strong></Card.Title>    
                    <Card.Text>${product.price}</Card.Text>
                    <Card.Text as="div" className="product__details">
                        <Link to={`/product/${product._id}`} className="ml-auto"><i className="far fa-eye"></i></Link>
                        <Link to={`/product/${product._id}`} className="ms-auto"><i class="fas fa-shopping-cart"></i></Link>
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