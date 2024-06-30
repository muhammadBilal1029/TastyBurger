import React, { useState } from 'react';
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useRoundpoint } from '../../pages/home/createcontext';
import Logo from "../../assets/burgerimage.png";
import '../../styles/headerstyle.css';
function Header({ isAddedCart }) {
  const [nav, setNav] = useState(false);
 
  // Scroll Navbar
  const changeValueOnScroll = () => {
    const scrollValue = document?.documentElement?.scrollTop;
    scrollValue > 70 ? setNav(true) : setNav(false);
  };

  window.addEventListener("scroll", changeValueOnScroll);
  const { roundpointCount } = useRoundpoint();
  const {roundpointplaceorder}=useRoundpoint();
  return (
    <>
      <header>
        <Navbar collapseOnSelect expand="lg" className={`${nav === true ? "sticky" : ""}`} >
          <Container>
            <Navbar.Brand href="#home">
              <Link to="/" className="logo">
                <img src={Logo} alt="Logo" className="img-fluid" />
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link as={Link} to="/">
                  Home
                </Nav.Link>
                <Nav.Link as={Link} to="/about">
                  About
                </Nav.Link>
                <Nav.Link as={Link} to="/menu">
                  Our Menu
                </Nav.Link>
                <Nav.Link as={Link} to="/shop">
                  Shop
                </Nav.Link>

                <Nav.Link as={Link} to="/wishlist">
                  Wishlist
                  <div className='cart'>
                    <em className='roundpoint'>{roundpointCount}</em>
                  </div>
                </Nav.Link>
                <Nav.Link as={Link} to="/contact">
                  Contact

                </Nav.Link>
                {isAddedCart && (
                <Nav.Link as={Link} to="/addcart">
                 AddToCart

                </Nav.Link>
                )}
                  <Nav.Link as={Link} to="/addtocart">
                    <div className='cart'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bag-check" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M10.854 8.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708 0" />
                        <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z" />
                      </svg>
                      
                    </div>
                  </Nav.Link>
               
              </Nav>
              
            </Navbar.Collapse>
          </Container>
        </Navbar>
      
      </header>
    
    </>
  )
}

export default Header