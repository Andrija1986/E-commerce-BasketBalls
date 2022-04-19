import { useContext } from 'react';
import { Link } from 'react-router-dom';
import MyContext from '../../context/MyContext';

import addToCart from '../../helpers/addToCart';

const Product = ({ ball }) => {
  const { title, image, price } = ball;

  const { ballItem, ballItemDispatch } = useContext(MyContext);

  return (
    <section className='product' style={{ backgroundImage: `URL(${image})` }}>
      <Link to='/productDetail' state={ball}>
        <h5>{title}</h5>
      </Link>
      <aside className='products-aside'>
        <button
          onClick={() => addToCart(ball, ballItem, ballItemDispatch)}>
          Add to Cart
        </button>
        <p>{price}</p>
      </aside>
    </section>
  );
};

export default Product;