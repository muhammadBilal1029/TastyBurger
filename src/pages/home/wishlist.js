import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { useWishlist } from '../../pages/home/createcontext';
import Cards from '../../components/layouts/Cards';
import Layout from '../../components/layouts/layout';
import { useRoundpoint } from '../../pages/home/createcontext';

function Wishlist() {
  const { wishlistItems, heartStatus, removeItemFromWishlist } = useWishlist();
  const { incrementRoundpoint, decrementRoundpoint } = useRoundpoint();

  const handleHeartClick = (id) => {
    if (heartStatus[id]) {
      decrementRoundpoint();
      removeItemFromWishlist(id);
    } else {
      incrementRoundpoint();
      // Add item to wishlist logic if needed (though in wishlist, it's just removing)
    }
  };

  return (
    <Layout>
      <section className='herosection'>
        <Container>
          <Row>
            {wishlistItems.map((item, index) => (
              <Cards
                key={index}
                Wishlist={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    onClick={() => handleHeartClick(item.id)}
                    width="16"
                    height="16"
                    fill={heartStatus[item.id] ? 'red' : 'lightgrey'}
                    className="bi bi-heart-fill"
                    viewBox="0 0 16 16"
                  >
                    <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314" />
                  </svg>
                }
                image={item.image}
                rating={item.rating}
                title={item.title}
                paragraph={item.paragraph}
                price={item.price}
                renderRatingIcons={() => null} // Provide your rating render function here if needed
              />
            ))}
          </Row>
        </Container>
      </section>
    </Layout>
  );
}

export default Wishlist;
