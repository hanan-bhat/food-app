import React from 'react'
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined'

const CartItem = () => {
  return (
    <div className="menu-cart-item">
      <img
        src="https://www.licious.in/blog/wp-content/uploads/2020/10/butter-chicken-.jpg"
        alt=""
      />
      <div className="menu-cart-item-container">
        <div className="menu-cart-item-content">
          <h2 className="menu-cart-prod-name">Butter Chicken</h2>
          <p className="menu-cart-prod-price">₹200</p>
        </div>
      </div>
      <div className="delete-btn-container">
        <DeleteOutlineOutlinedIcon className="delete-cart-item-btn" />
      </div>
    </div>
  )
}

export default CartItem
