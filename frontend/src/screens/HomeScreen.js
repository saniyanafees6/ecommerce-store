import React from 'react'
import { Row, Col } from 'react-bootstrap';
import { Hero, Products, Brands } from '../components'

const HomeScreen = () => {
    return (
        <>
            <Hero />
            <Products />
            <Brands />
        </>
    )
}

export default HomeScreen
