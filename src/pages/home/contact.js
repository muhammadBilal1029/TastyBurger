import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';

import Layout from '../../components/layouts/layout';
function contact() {
    return (
        <Layout>
            <section className='herosection'>
                <Container>
                    <Row>


                        <Col lg={5}>
                            <div className="contact-content" style={{color:"white"}}>
                                <h1>Contact Us</h1>
                                <p style={{ fontSize: '1.3rem' }}>We'd love to hear from you! Whether you have a question, feedback, or just want to say hello, feel free to reach out to us using the contact information below:</p>

                                <h2>Address</h2>
                                <p style={{ fontSize: '1.3rem' }}>123 Main Street<br />6<sup>th</sup> Road<br />Rawalpindi,Punjab,Pakistan</p>

                                <h2>Phone</h2>
                                <p style={{ fontSize: '1.3rem' }}>(+92) 3160901465</p>

                                <h2>Email</h2>
                                <p style={{ fontSize: '1.3rem' }}>muhammadbilalmirza1029@gmail.com</p>

                                <h2>Opening Hours</h2>
                                <p style={{ fontSize: '1.3rem' }}>Monday - Friday: 11:00 AM - 10:00 PM<br />Saturday - Sunday: 10:00 AM - 11:00 PM</p>

                                <p style={{ fontSize: '1.3rem' }}>Connect with us on social media:</p>
                                <ul>
                                    <li><a href="https://www.facebook.com/profile.php?id=100088430861303" style={{color:"white"}}>Facebook</a></li>
                                    <li><a href="https://twitter.com/home" style={{color:"white"}}>Twitter</a></li>
                                    <li><a href="https://www.instagram.com/mirzabilal1316/" style={{color:"white"}}>Instagram</a></li>
                                </ul>
                            </div>
                        </Col>

                    </Row>
                </Container>
            </section>
        </Layout>
    )
}

export default contact