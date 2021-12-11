import React from 'react'
import '../../styles/cart.css'
import { Link } from 'react-router-dom'
import CartItemNav from './CartItemNav'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket'

const CartNav = () => {
  return (
    <div>
      {/* <Link to="/cart" className="menu-cart-link"> */}
      <div to="/" className="menu-cart-link">
        <ShoppingBasketIcon className="menu-cart-lg" />
        <div className="cart-item-count">2</div>
        <div className="menu-view-cart-items">
          <div className="mob-cart-top">
            <p className="menu-cart-title">Cart Items (2)</p>
            <Link to="/cart" className="goto-cart-btn">
              View Cart
            </Link>
          </div>
          <div className="menu-view-cart-items-content">
            <CartItemNav />
            <CartItemNav />
          </div>
        </div>
        {/* </Link> */}
      </div>
    </div>
  )
}

export default CartNav
