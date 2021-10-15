import React from 'react'
import { Row, Col } from 'react-bootstrap';
import { Hero, Showcase, Products, Brands } from '../compenents'

const HomeScreen = () => {
    return (
        <>
            <Hero />
            <Showcase />
            <Products />
            <Brands />
        </>
    )
}

export default HomeScreen
