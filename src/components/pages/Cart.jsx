import {useContext} from 'react'
import { useNavigate } from 'react-router-dom'
import MyContext from '../../context/MyContext'

import Header from '../Header'
import CheckoutAside from './CheckoutAside'

import addToCart from '../../helpers/addToCart'
import reduceOrder from '../../helpers/reduceOrder'
import removeBall from '../../helpers/removeBall'
import totalInBasket from '../../helpers/totalInBasket'

const Cart = () => {
    const {ballItem, ballItemDispatch} = useContext(MyContext);
    const navigate = useNavigate();

    if (ballItem.length === 0) {
        return (
            <main>
                <Header/>
                <section className='cart-no-items'>
                    <p>There are no items in your cart</p>
                    <button onClick={()=> navigate(-1)}>Return</button>
                </section>
            </main>
        )
    }

    const ballTotal = totalInBasket(ballItem);

    const ballList = ballItem.map((ball, index) => (
        <aside key={ball.id} className='cart-line'>
        <img src={ball.image} alt={ball.name} />
        <aside className='cart-text'>
          <h5>{ball.title}</h5>
          <p>
            Quantity <span>{ball.quantity}</span>
          </p>
          <p>${ball.price}</p>
          <h4>Total ${ballTotal[index].toFixed(2)}</h4>
        </aside>

        <button
          onClick={() => addToCart(ball, ballItem, ballItemDispatch)}>
          +
        </button>

        <button
          onClick={() =>
            reduceOrder(ball, ballItem, ballItemDispatch)
          }>
          -
        </button>

        <button
          className='remove-button'
          onClick={() =>
            removeBall(ball, ballItem, ballItemDispatch)
          }>
          Remove Ball
        </button>
      </aside>
    ))
  return (
    <main>
      <Header />
      <section className='cart-page'>{ballList}</section>
      <CheckoutAside/>
    </main>
  )
}

export default Cart