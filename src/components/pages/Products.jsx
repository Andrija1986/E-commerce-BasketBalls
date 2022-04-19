import { useContext } from 'react';
import MyContext from '../../context/MyContext';
import Header from '../Header';
import Product from './Product';

const Products = () => {
  const { basketballsData } = useContext(MyContext);

  const ballsList = basketballsData.map((ball) => (
    <Product key={ball.id} ball={ball} />
  ));

  return (
    <main>
      <Header />
      <section className='products'>{ballsList}</section>
    </main>
  );
};

export default Products;