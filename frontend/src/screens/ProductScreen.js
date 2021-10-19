import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap'
import Rating from '../components/Rating'
import axios from 'axios'

const ProductScreen = ({ match }) => {
    const [product, setProduct] = useState({})

    useEffect(() => {
        const fetchProduct = async () => {
            const { data } = await axios.get(`/api/products/${match.params.id}`)
            setProduct(data)
        }
        fetchProduct()
    }, [])
    // const product = products.find(p => p._id === match.params.id)
    
    return <>
           {/* {product.name} */}
           <Link className="btn btn-dark my-3" to="/">Go Back</Link>
           <Row>
               <Col md={6}><Image src={product.image} alt={product.name} fluid /></Col>
               <Col md={3}>
                   <ListGroup >
                       <ListGroup.Item className="text-white bg-dark">
                           <h3>{product.name}</h3>
                       </ListGroup.Item>
                       <ListGroup.Item className="text-white bg-dark">
                           <Rating value={product.rating} text={`${product.numReviews} reviews`}/>
                       </ListGroup.Item>
                       <ListGroup.Item className="text-white bg-dark">
                           Price: ${product.price}
                       </ListGroup.Item>
                       <ListGroup.Item className="text-white bg-dark">
                           <strong>Description:</strong> {product.description}
                       </ListGroup.Item>
                   </ListGroup>
                </Col>
                <Col md={3}>
                    <Card>
                        <ListGroup>
                            <ListGroup.Item className="text-white bg-dark">
                                <Row>
                                    <Col>Price:</Col>
                                    <Col><strong>${product.price}</strong></Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item className="text-white bg-dark">
                                <Row>
                                    <Col>Status:</Col>
                                    <Col>{product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}</Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item className="text-white bg-dark">
                                <Button className="btn btn-outline-light w-100" type="button" disabled={product.countInStock <= 0}>Add to Cart</Button>
                            </ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col>
           </Row>
        </>
}

export default ProductScreen
