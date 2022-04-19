import { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from '../Header';

import MyContext from '../../context/MyContext';
import addToCart from '../../helpers/addToCart';

const ProductDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { title, image, price, features } = location?.state || {};

  const { ballItem, ballItemDispatch } = useContext(MyContext);

  return (
    <main>
      <Header />
      <section className='details-page'>
        <img src={image} alt='title' />
        <aside className='details-aside'>
          <h4>{title}</h4>
          <p>€{price}</p>
          <h2>Features</h2>
          {features?.map((features, i) => (
            <p key={i}>{features}</p>
          ))}
          <button
            className='details-addToCart-button'
            onClick={() =>
              addToCart(location?.state, ballItem, ballItemDispatch)
            }>
            Add to Cart
          </button>
        </aside>
      </section>
      <button className='details-button' onClick={() => navigate(-1)}>
        Return
      </button>
    </main>
  );
};

export default ProductDetail;