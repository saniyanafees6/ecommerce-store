import React from 'react'
import products from '../products';
import Product from './Product'
import { Row, Col } from 'react-bootstrap'
const Products = () => {
    return (
        <>
        <h2>Popular Products</h2>
            <Row>
                {products.map( product => (
                    <Col sm={12} md={6} lg={4} xl={3}>
                        <Product product={product}/>
                    </Col>
                ))}
            </Row>
        </>
    )
}

export default Products
