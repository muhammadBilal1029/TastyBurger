import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';

import Layout from '../../components/layouts/layout';
function shop() {
  return (
    <Layout>
    <section className='herosection'>
        <Container>
            <Row>


                <Col lg={5}>
                <div className="shop-content" style={{color:"white"}}>
      <h1>Welcome to Our Shop</h1>
      <p style={{ fontSize: '1.4rem' }}>Explore our shop and bring the flavors of our restaurant home with you. Whether you're a fan of our signature sauces, branded merchandise, or cooking essentials, you'll find something to love in our store.</p>
      
      <h2>Signature Sauces</h2>
      <p style={{ fontSize: '1.4rem' }}>Take home the taste of our famous sauces and add a burst of flavor to your meals. From tangy barbecue to zesty aioli, our sauces are perfect for dipping, drizzling, and marinating.</p>
      
      <h2>Branded Merchandise</h2>
      <p style={{ fontSize: '1.4rem' }}>Show your love for our restaurant with our collection of branded merchandise. From t-shirts and hats to mugs and aprons, our stylish items make great gifts for yourself or the burger enthusiast in your life.</p>
      
      <h2>Cooking Essentials</h2>
      <p style={{ fontSize: '1.4rem' }}>Elevate your cooking game with our selection of high-quality cooking essentials. From grill tools and kitchen gadgets to gourmet ingredients, we have everything you need to create delicious meals at home.</p>
      
      <p style={{ fontSize: '1.4rem' }}>Shop online or visit us in-store to browse our full selection of products. Bring home a taste of our restaurant today!</p>
    </div>
                </Col>

            </Row>
        </Container>
    </section>
</Layout>
  )
}

export default shop