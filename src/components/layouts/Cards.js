import React, { useState } from "react";
import { Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useRoundpoint } from '../../pages/home/createcontext';
import { useCart } from '../../pages/home/createcontext';
import { useWishlist } from '../../pages/home/createcontext';
function Cards({image, rating, title, paragraph, price, renderRatingIcons }) {
  const { addItemToCart } = useCart();
  const { incrementRoundpoint, decrementRoundpoint } = useRoundpoint();
  const { addItemToWishlist, removeItemFromWishlist,heartStatus  } = useWishlist();
  
  const [isAddedCart, setIsAddedCart] = useState(false);
  const handleHeartClick = () => {
    const item = { id: image, title, image, price };

    if (heartStatus[image]) {
      decrementRoundpoint();
      removeItemFromWishlist(image);
    } else {
      incrementRoundpoint();
      addItemToWishlist(item);
    }
  };

   
    const handleAddToCart = () => {
      addItemToCart({ image, rating, title, paragraph, price });
      setIsAddedCart(true);
      // Additional logic for adding to cart
    };
  
 
 

  return (
    <Col sm={6} lg={4} xl={3} className="mb-4"  >
      <Card className="overflow-hidden" >
        <div className="overflow-hidden">
          <Card.Img variant="top" src={image} />
        </div>
        <Card.Body>
          <div className="d-flex align-items-center justify-content-between">
            <div className="item_rating">{renderRatingIcons(rating)}</div>
            <div className="wishlist" >

              <svg xmlns="http://www.w3.org/2000/svg" onClick={handleHeartClick} width="16" height="16" fill={heartStatus[image] ? 'red' : 'lightgrey'} class="bi bi-heart-fill" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314" />
              </svg>
            </div>
          </div>
     
          <Card.Title>{title}</Card.Title>
          <Card.Text>{paragraph}</Card.Text>

          <div className="d-flex align-items-center justify-content-between">
            <div className="menu_price">
              <h5 className="mb-0">${price}</h5>
            </div>
            <div className="add_to_card">
              {!isAddedCart && (
                <Link to={`/addtocart`} onClick={handleAddToCart} >
                  <i class="bi bi-bag me-2"></i>
                  Add To Cart
                </Link>
              )}
            </div>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
}
export default Cards;