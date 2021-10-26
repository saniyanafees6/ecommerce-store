import React from 'react'
import { Container } from 'react-bootstrap'

const Footer = () => { 
    return (
        <footer className='footer padding'>
            <Container>
                <h2 className='secondary__heading'>Give us your<br />Feedback</h2>   
                <div className='contact__container'>
                    <p><strong>Contact us</strong></p>
                    <p className='phone'>Phone: (123)456-7890</p>
                    <p className='mail'>mail: saniyanafees6@gmail.com</p>
                    <div className='social__links__container'>
                        <i className='fab fa-linkedin-in'></i>
                        <i className='fas fa-globe'></i>
                        <i className='far fa-envelope'></i>
                    </div>
                </div>
            </Container>
        </footer>
    )
 }

export default Footer
