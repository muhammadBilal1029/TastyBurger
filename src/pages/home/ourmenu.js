import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';

import Layout from '../../components/layouts/layout';
function ourmenu() {
    return (
        <Layout>
            <section className='herosection'>
                <Container>
                    <Row>


                        <Col lg={5}>
                            <div className="menu-content" style={{ color: 'white' }}>
                                <h1>Explore Our Delicious Menu</h1>
                                <p style={{ fontSize: '1.4rem' }}>At our restaurant, we offer a diverse and mouth-watering menu that caters to all tastes and preferences. Each item on our menu is crafted with care and attention to ensure a delightful dining experience for our customers.</p>
                                <h2>Burgers</h2>
                                <p style={{ fontSize: '1.4rem' }}>Indulge in our selection of gourmet burgers made with the finest quality beef and topped with fresh ingredients. From classic cheeseburgers to specialty creations, there's something for every burger lover.</p>
                                <h2>Side Dishes</h2>
                                <p style={{ fontSize: '1.4rem' }}>Complement your meal with our delicious side dishes, including crispy fries, onion rings, and loaded nachos. Perfect for sharing or enjoying on their own.</p>
                                <h2>Salads</h2>
                                <p style={{ fontSize: '1.4rem' }}>For those seeking a lighter option, we offer a variety of fresh and flavorful salads made with seasonal produce and house-made dressings.</p>
                                <h2>Drinks</h2>
                                <p style={{ fontSize: '1.4rem' }}>Quench your thirst with our selection of refreshing beverages, including handcrafted shakes, sodas, and specialty cocktails.</p>
                                <p style={{ fontSize: '1.4rem' }}>Explore our menu and discover your new favorite dish!</p>
                            </div>
                        </Col>

                    </Row>
                </Container>
            </section>
        </Layout>
    )
}

export default ourmenu