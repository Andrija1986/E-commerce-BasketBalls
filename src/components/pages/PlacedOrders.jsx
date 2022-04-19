import {useContext, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../Header'
import MyContext from '../../context/MyContext'
import { ACTIONS } from '../../actions/action'



const PlacedOrders = () => {
    const {ballItemDispatch} = useContext(MyContext);
    const navigate = useNavigate();

    useEffect(() => {
        ballItemDispatch({type: ACTIONS.RESET, payload: []})
    }, [ballItemDispatch]);

  return (
      <main>
      <Header />
      <section className='orders-placed'>
        <p>Placed Orders</p>
        <button onClick={() => navigate('/products')}>Next shopping</button>
      </section>
    </main>
  )
}

export default PlacedOrders