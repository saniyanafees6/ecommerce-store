import React, { useState, useEffect } from 'react'
import Product from './Product'
import { Button } from 'react-bootstrap'
import axios from 'axios'

const Products = () => {

    const [products, setProducts] = useState([])

useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get('/api/products')

      setProducts(data)
    }

    fetchProducts()
  }, [])

    return (
        <div className="padding">
        <h2 className="secondary__heading centered">Popular Products</h2>
                <div className="product__container">
                    {products.map( product => (
                            <Product key={product._id} product={product} />
                    ))}
                </div>
                <div className="hero__button__container centered"><Button variant="outline-light" className="hero__button">View All Products</Button></div>
        </div>
    )
}

export default Products

