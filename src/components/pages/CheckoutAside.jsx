import {useContext} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import MyContext from '../../context/MyContext'
import totalBall from '../../helpers/totalBall'


const CheckoutAside = () => {
    const {ballItem} = useContext(MyContext);

    const navigate = useNavigate();

    const ballsTotal = totalBall(ballItem); 
  return (
    <aside className='checkout-aside'>
      <h4>Shipping free</h4>
      <p>
        Grand Total <span>${ballsTotal.toFixed(2)}</span>
      </p>
      {/* Place your order link */}
      <Link to='/placedOrders'>
        <button>Place your order</button>
      </Link>
      <button onClick={() => navigate('/products')}>Return</button>
    </aside>
  )
}

export default CheckoutAside