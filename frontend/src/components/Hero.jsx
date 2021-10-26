import React from 'react'
import { Button, Container, Card } from 'react-bootstrap'
import { clock, hero, returning, truck } from '../assets'
const Hero = () => { 
    return (
        <div className='padding'>
            <Container className='my-5'>
            <h1 className='hero__heading'>Beat Flat Pendant<br />Black LED</h1>
            <div className='hero__text'>
                <p className='hero__description'>Beat Flat is a medium-sized ceiling light in matte black and features a<br />contrasting warm, golden interior.</p>
                <div className='hero__button__container'><Button variant='outline-light' className='hero__button'>Shop Now</Button></div>
                </div>
                <img src={ hero } className='hero__image'/>
                <div className='card__container'>
                    <Card style={ { width: '18rem' } } className='hero__card centered'>
                        <Card.Img variant='top' className='card__image card1' src={ truck } />
                        <Card.Body>
                            <Card.Title className='hero__card__title'>Free Shipping</Card.Title>
                            <Card.Text className='hero__card__text'>
                            We are pround to announce that we now offer a free shipping Worldwide.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card style={ { width: '18rem' } } className='hero__card centered'>
                    <Card.Img variant='top' className='card__image card2' src={ clock } />
                    <Card.Body>
                        <Card.Title className='hero__card__title'>24 Hours Service</Card.Title>
                        <Card.Text className='hero__card__text'>
                        Contact anytime with inquiries and someone will be there to help you shortly.
                        </Card.Text>
                    </Card.Body>
                    </Card>
                    <Card style={ { width: '18rem' } } className='hero__card centered'>
                    <Card.Img variant='top' className='card__image card3' src={ returning } />
                    <Card.Body>
                        <Card.Title className='hero__card__title'>7 Days Return</Card.Title>
                        <Card.Text className='hero__card__text'>
                        If the products are in acceptable condition, we will gladly accept returns within 7 days of purchase.
                        </Card.Text>
                    </Card.Body>
                    </Card>
                </div>
            </Container>
            
        </div>
    )
 }

export default Hero
