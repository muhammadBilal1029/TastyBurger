import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';

import Layout from '../../components/layouts/layout';



function firstpageabout() {
    return (
        <>

            <Layout>
                <section className='herosection'>
                    <Container>
                        <Row>


                            <Col lg={5}>
                                <div className="about-content" style={{ color: 'white' }}>
                                    <h1>About Our Tasty Burgers</h1>

                                    <p style={{ fontSize: '1.4rem' }}>Welcome to our burger joint! We pride ourselves on serving the most delicious and mouth-watering burgers in town. Our secret recipe has been passed down through generations, ensuring that every bite is packed with flavor and satisfaction.</p>
                                    <p style={{ fontSize: '1.4rem' }}>At our restaurant, we use only the finest quality ingredients, sourced locally whenever possible. From juicy beef patties to freshly baked buns and crisp lettuce, each component is carefully selected to create the perfect burger experience.</p>
                                    <p style={{ fontSize: '1.4rem' }}>But our burgers are more than just food - they're a journey of taste and texture. Whether you're a fan of classic cheeseburgers, gourmet toppings, or vegetarian options, we have something for everyone.</p>
                                    <p style={{ fontSize: '1.4rem' }}>Come join us and indulge in the ultimate burger experience. Your taste buds will thank you!</p>
                                </div>
                            </Col>

                        </Row>
                    </Container>
                </section>
            </Layout>
        </>

    )
}

export default firstpageabout