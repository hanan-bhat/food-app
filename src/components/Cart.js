import React from 'react'
import '../styles/cart.css'
import { Link } from 'react-router-dom'
import CartItem from './CartItem'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket'

const Cart = () => {
  return (
    <div>
      <Link to="/cart" className="menu-cart-link">
        <ShoppingBasketIcon className="menu-cart-lg" />
        <div className="cart-item-count">2</div>
        <div className="menu-view-cart-items">
          <p className="menu-cart-title">Cart Items (2)</p>
          <div className="menu-view-cart-items-content">
            <CartItem />
            <CartItem />
          </div>
        </div>
      </Link>
    </div>
  )
}

export default Cart
