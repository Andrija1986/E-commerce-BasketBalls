import {useContext} from 'react'
import { NavLink } from 'react-router-dom'
import MyContext from '../context/MyContext'
import BallPicture from './BallPicture'

const Header = () => {

    const context = useContext(MyContext);
    const {loginData, ballItem, logoutHandler} = context;

  return (
    <header>
        <BallPicture/>
        <h3>Welcome to BasketBalls Shop {loginData.userName}</h3>

        <ul>
        <NavLink
          onClick={logoutHandler}
          to='/'
          style={({ isActive }) => ({
            color: isActive && 'blue',
            pointerEvents: isActive && 'none',
          })}>
          <li>Logout</li>
        </NavLink>

        <NavLink
          to='/products'
          style={({ isActive }) => ({
            color: isActive && 'blue',
            pointerEvents: isActive && 'none',
          })}>
          <li>Products</li>
        </NavLink>

        <NavLink
          to='/cart'
          style={({ isActive }) => ({
            color: isActive && 'blue',
            pointerEvents: isActive && 'none',
          })}>
          <li>
            Cart <span>{ballItem.length}</span>
          </li>
        </NavLink>

        <NavLink
          to='/checkout'
          style={({ isActive }) => ({
            color: isActive && 'blue',
            pointerEvents: isActive && 'none',
          })}>
          <li> Checkout </li>
        </NavLink>
      </ul>
    </header>
  )
}

export default Header