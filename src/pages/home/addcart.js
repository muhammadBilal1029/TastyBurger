import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Layout from '../../components/layouts/layout';



function AddCart({ }) {

    const [isLoginFormVisible, setIsLoginFormVisible] = useState(true);
    const navigate = useNavigate();
    

    
    const switchToLoginForm = () => {
        setIsLoginFormVisible(true);
    };
    const switchToSignupForm = () => {
        setIsLoginFormVisible(false);
    };
    const handlelogin = () => {
        navigate('/addtocart')
       
    }
    const handlesinup = () => {

        navigate('/addtocart')

    }

    const handleforgottonpassword = () => {
        navigate('/forgottonpassword');
    }

    return (
        <Layout>
            <section className='herosection'>
                <Container>
                    <Row>
                        <Col >


                            <div className="wrapper"  >
                                <div className='wrapper2'>
                                    <div className="title-text">
                                        <div className={`title ${isLoginFormVisible ? 'login' : 'signup'}`}>{isLoginFormVisible ? 'Login Form' : 'Signup Form'}</div>
                                    </div>
                                    <div className={`form-container ${isLoginFormVisible ? 'login-active' : 'signup-active'}`}>
                                        <div className="slide-controls">
                                            <input type="radio" name="slide" id="login" checked={isLoginFormVisible} onChange={switchToLoginForm} />
                                            <input type="radio" name="slide" id="signup" checked={!isLoginFormVisible} onChange={switchToSignupForm} />
                                            <label htmlFor="login" className="slide login">Login</label>
                                            <label htmlFor="signup" className="slide signup">Signup</label>
                                            <div className="slider-tab"></div>
                                        </div>
                                        <div className="form-inner">

                                            {isLoginFormVisible && (
                                                <form className="login" onSubmit={handlelogin}>

                                                    <div className="field">
                                                        <input type="text" placeholder="Email Address" required />
                                                    </div>
                                                    <div className="field">
                                                        <input type="password" placeholder="Password" required />
                                                    </div>
                                                    <div className="pass-link"><a href="#" onClick={handleforgottonpassword}>Forgot password?</a></div>
                                                    <div className="field btn">
                                                        <div className="btn-layer"></div>
                                                        <input type="submit" value="Login" />
                                                    </div>
                                                    <div className="signup-link">Not a member? <a href="#" onClick={switchToSignupForm}>Signup now</a></div>
                                                </form>
                                            )}
                                            {!isLoginFormVisible && (
                                                <form className="signup" onSubmit={handlesinup}>

                                                    <div className="field">
                                                        <input type="text" placeholder="Email Address" required />
                                                    </div>
                                                    <div className="field">
                                                        <input type="password" placeholder="Password" required />
                                                    </div>
                                                    <div className="field">
                                                        <input type="password" placeholder="Confirm password" required />
                                                    </div>
                                                    <div className="field btn">
                                                        <div className="btn-layer"></div>
                                                        <input type="submit" value="Signup" />
                                                    </div>
                                                </form>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                        </Col>
                    </Row>
                </Container>
            </section>
        </Layout>
    );
}

export default AddCart;
