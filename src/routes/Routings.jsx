import { HashRouter as Router, Routes, Route } from "react-router-dom"

import Login from '../components/pages/Login'
import Auth from "../authorization/Auth"
import Products from '../components/pages/Products'
import ProductDetail from '../components/pages/ProductDetail'
import NotFound from '../components/pages/NotFound'
import PlacedOrders from '../components/pages/PlacedOrders'
import Cart from '../components/pages/Cart'
import Checkout from '../components/pages/Checkout'
import Footer from '../components/Footer'

const Routings = () => (
  <Router>
    <main>
    <Routes>
      <Route path="/" element={<Login/>} />

      <Route element={<Auth/>}>
        <Route path="/products" element={<Products/>} />
        <Route path="/productDetail" element={<ProductDetail/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/checkout" element={<Checkout/>} />
        <Route path="/placedOrders" element={<PlacedOrders/>} />
      </Route>
      <Route path="*" element={<NotFound/>} />
    </Routes>
    <Footer/>
    </main>
  </Router>
)

export default Routings