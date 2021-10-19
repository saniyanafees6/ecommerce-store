import React from 'react'
import { Button } from 'react-bootstrap'
import { brands } from '../assets'
const Brands = () => {
    return (
        <div className="brands__container padding">
         <div className="brands__container__one">
            <h2 className="secondary__heading">We work with<br />these brands</h2>   
            <p className="hero__description">It is a long established fact that a reader will be distracted by the readable<br />content of a page when looking at its layout. The point of using Lorem Ipsum<br />is that it has a more-or-less normal distribution of letters,</p>
            <div className="hero__button__container"><Button variant="outline-light" className="hero__button">Shop Now</Button></div>
         </div>
         <div className="brands__container__two">
            <img src={brands} />
         </div>
        </div>
    )
}

export default Brands
