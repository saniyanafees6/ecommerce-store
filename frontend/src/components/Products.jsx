import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from 'react-bootstrap'
import { listProducts } from '../actions/productActions'
import { Product, Message, Loader } from './'

const Products = () => { 
  const dispatch = useDispatch()

  const productList = useSelector(state => state.productList)
  const { loading, error, products } = productList

  useEffect(() => { 
    dispatch(listProducts())
  }, [dispatch])
  return (
      <div className='padding'>
      <h2 className='secondary__heading centered'>Popular Products</h2>
      { loading ? (<Loader />) : error ? (<Message variant='danger'>{ error }</Message>) : (<div className='product__container'>
                  { products.map( product => (
                          <Product key={ product._id } product={ product } />
                  )) }
              </div>) }
              
              <div className='hero__button__container centered'><Button variant='outline-light' className='hero__button'>View All Products</Button></div>
      </div>
  )
 }

export default Products

