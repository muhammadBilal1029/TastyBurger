import React, { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { toast, Bounce } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useCart } from '../../pages/home/createcontext';

import Layout from '../../components/layouts/layout';
import { useNavigate } from 'react-router-dom';
function Addtocart1() {
    const { cartItems, setCartItems } = useCart();
    const navigate = useNavigate();
    const [isHeartFilled, setIsHeartFilled] = useState(false);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        address: '',
        city: '',
        country: '',
        zip: ''
    });

    const [itemQuantities, setItemQuantities] = useState({});

    useEffect(() => {
        // Initialize quantities based on cart items
        const initialQuantities = {};
        cartItems.forEach((item) => {
            initialQuantities[item.id] = 1; // Set default quantity to 1 for each item
        });
        setItemQuantities(initialQuantities);
    }, [cartItems]);
    const handleQuantityChange = (e, itemId) => {
        const { value } = e.target;
        setItemQuantities((prevQuantities) => ({
            ...prevQuantities,
            [itemId]: parseInt(value) // Ensure quantity is parsed as an integer
        }));
    };
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const requiredFields = ['firstName', 'lastName', 'email', 'address', 'city', 'country', 'zip'];
        const isAnyFieldEmpty = requiredFields.some(field => !formData[field]);
        const isValidEmail = validateEmail(formData.email);

        if (isAnyFieldEmpty) {
            console.log('Please fill all required fields');
        } else if (!isValidEmail) {
            console.log('Please provide a valid email address');
        } else {
            // Proceed with placing order
            handleplaceorder();
        }

        setFormData({
            firstName: '',
            lastName: '',
            email: '',
            address: '',
            city: '',
            country: '',
            zip: ''
        });
    };
    const showcanceltoast = (status) => {
       if(status){

           toast.success('✔Product cancel successfully ', {
            position: "top-center",
            hideProgressBar: false,
            closeOnClick: true,
            autoClose: 1500,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition: Bounce,
                
                   
                 
     
             });
       }
       else{
        toast.error('❌Product Is Not Exist', {
            position: "top-center",
            hideProgressBar: false,
            closeOnClick: true,
            autoClose: 1500,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition: Bounce,
           
              
            

        });
       }
    }
    const showtoast = (status) => {
        if (status) {
            toast.success('✔ Order Submitted Successfully!', {
                position: "top-center",
                hideProgressBar: false,
                closeOnClick: true,
                autoClose: 1500,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                transition: Bounce,
               
                   
                

            });
        }
        else {
            toast.error('❌ Please Select Food', {
                position: "top-center",
                hideProgressBar: false,
                closeOnClick: true,
                autoClose: 1500,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                transition: Bounce,
               
                   
                



            });
        }




    }

    const validateEmail = (email) => {
        // Regular expression to check if email is valid
        const re = /\S+@\S+\.\S+/;
        return re.test(email);

    };

    const handleplaceorder = () => {

        const isValidEmail = validateEmail(formData.email);

        if (isValidEmail) {
            if (!isHeartFilled) {
                if (cartItems.length === 0) {
                    showtoast(false);
                    navigate('/')
                }

                else {

                    showtoast(true);
                    navigate("/");
                    setCartItems([]);
                    setIsHeartFilled(true);
                }



            }

        } else {

        }
    }
    const cancelProduct = () => {
        if (cartItems.length === 0) {
            showcanceltoast(false);
            navigate("/")
        }
        else {
            showcanceltoast(true);
            setCartItems([]);
            navigate('/');

        }
    };
    const calculateTotalCost = () => {
        let total = 0;
        cartItems.forEach((item) => {
            const quantity = itemQuantities[item.id] || 1;
            total += item.price * quantity;

        });
        return total.toFixed(2);
    };
    return (
        <Layout>
            <section className='herosection'>
                <Container >
                    <Row>
                        <Col>
                            <div className='checkoutmain'>
                                <div className="checkout-page">
                                    <h2 className='text-white'>Checkout</h2>

                                    <form onSubmit={handleSubmit}>
                                        <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="First Name*" required />
                                        <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Last Name*" required /><br /><br />
                                        <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email*" required />
                                        <input type="text" name="address" value={formData.address} onChange={handleChange} placeholder="Address*" required /><br /><br />
                                        <input type="text" name="city" value={formData.city} onChange={handleChange} placeholder="City*" required />
                                        <input type="text" name="country" value={formData.country} onChange={handleChange} placeholder="Country*" required /><br />
                                        <div className='zip'>
                                            <input type="text" name="zip" value={formData.zip} onChange={handleChange} placeholder="ZIP/Postal Code*" required />
                                            <br />


                                        </div>
                                        <div style={{ display: 'flex', justifyContent: 'space-around' }}>

                                            <button type="submit" id='submitbtn' className='btn btn-success' variant="primary">Confirm Order</button>
                                            <h4 className='text-white' >Total Cost: ${calculateTotalCost()}</h4>
                                            <div style={{ textAlign: 'center' }}>
                                                <button className='btn btn-danger' onClick={() => cancelProduct()}>
                                                    Cancel Products
                                                </button>
                                            </div>
                                        </div>
                                    </form>

                                </div>



                            </div>
                        </Col>

                        <Col  >
                            <div className='text-white' id='cartdata' >
                                <h1>Your Cart</h1>
                                {cartItems.map((item, index) => (
                                    <div key={index} style={{ borderBottom: '1px solid white', borderRight: '1px solid white' }}>
                                        <p className='pno'>product No {index + 1}</p>
                                        <img src={item.image} alt={item.title} style={{ width: "100px" }} className='pimage' />
                                        <p className='pname'>{item.title}</p>
                                        <p pprice> Price: ${item.price}</p>
                                        <p className='pquantity'>
                                            Quantity{' '}
                                            <input
                                                type="number"
                                                id={`quantity-${item.id}`}
                                                name={`quantity-${item.id}`}
                                                value={itemQuantities[item.id] || 1}
                                                onChange={(e) => handleQuantityChange(e, item.id)}
                                                required
                                            />



                                        </p>
                                    </div>
                                ))}

                            </div>
                        </Col>



                    </Row>
                </Container>
            </section>
        </Layout>
    )
}

export default Addtocart1