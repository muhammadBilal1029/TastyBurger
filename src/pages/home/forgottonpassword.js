import React,{useState} from 'react'
import { Container, Row, Col  ,Form, Button, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Layout from '../../components/layouts/layout';

function Forgottonpassword() {
    const [email, setEmail] = useState('');
    const [showSuccess, setShowSuccess] = useState(false);
    const [showError, setShowError] = useState(false);
    const navigate = useNavigate();


    const handleSubmit = (event) => {
        event.preventDefault();
        // Here you would typically send a request to your backend to handle the forgot password logic
        // For this example, let's just show a success message
        setShowSuccess(true);
        setShowError(false);
        // Redirect to login page after a delay
        setTimeout(() => {
           navigate("/addcart")
        }, 3000);
    };

  return (
    <Layout>
        <section className='herosection'>
            <Container className="mt-5">
                <Row>
                    <Col md={{ span: 6, offset: 3 }} style={{color:"white"}}>
                    <h2 className="text-center mb-4">Forgot Password</h2>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </Form.Group><br></br>
                        <Button variant="primary" type="submit" className="w-100">
                            Submit
                        </Button>
                    </Form>
                    {showSuccess && (
                        <Alert variant="success" className="mt-3">
                            Password reset instructions sent to your email. Please check your inbox.
                        </Alert>
                    )}
                    {showError && (
                        <Alert variant="danger" className="mt-3">
                            Error: Unable to process your request. Please try again later.
                        </Alert>
                    )}
                    </Col>
                </Row>
            </Container>
        </section>
    </Layout>
  )
}

export default Forgottonpassword