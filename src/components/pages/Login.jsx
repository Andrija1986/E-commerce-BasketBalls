import {useContext, useRef, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import MyContext from '../../context/MyContext'
import ShowCard from '../ShowCard'
import BallPicture from '../BallPicture'

const Login = () => {
    const {loginData, changeHandler, loginHandler, formData, error} = useContext(MyContext);

    const navigate = useNavigate();

    const userNameRef = useRef();

    //Focus on first input
    useEffect(() => {
        userNameRef.current.focus();
    }, [])

    //Check again if the user is logged in
    useEffect(() => {
        loginData.success && navigate('/products');
    }, [loginData.success, navigate])

  return (
    <main>
      <aside className='logo-aside'>
        <BallPicture />
        <h3>
          Welcome to BasketBalls Shop
        </h3>
      </aside>
      <ShowCard />
      <section className='login-page'>
        <h2 className='login-form-h2'>Please enter your login details </h2>
        <form>
          <input
            type='text'
            ref={userNameRef}
            name='userName'
            placeholder='Enter your name'
            value={formData.userName}
            onChange={(e) => changeHandler(e)}
          />
          <input
            type='password'
            name='password'
            placeholder='Enter your password'
            value={formData.password}
            onChange={(e) => changeHandler(e)}
          />
          <button onClick={(e) => loginHandler(e)}>Login</button>
        </form>

        {error.error && (
          <aside className='aside-errors'>
            <p>{error.error}</p>
          </aside>
        )}
      </section>
    </main>
  )
}

export default Login