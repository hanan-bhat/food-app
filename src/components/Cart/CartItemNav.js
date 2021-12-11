import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined'
import DeleteIcon from '@mui/icons-material/Delete'

const CartItem = () => {
  const [deleteBtn, setDeleteBtn] = useState(true)

  const deleteBtnFill = () => {
    setDeleteBtn(!deleteBtn)
  }

  const deleteBtnOutline = () => {
    setDeleteBtn(!deleteBtn)
  }
  return (
    <div className="menu-cart-item">
      <img
        src="https://www.licious.in/blog/wp-content/uploads/2020/10/butter-chicken-.jpg"
        alt=""
      />
      <div className="menu-cart-item-container">
        <div className="menu-cart-item-content">
          <Link to="/menu">
            <h2 className="menu-cart-prod-name">Butter Chicken</h2>
          </Link>
          <p className="menu-cart-prod-price">₹200</p>
        </div>
      </div>
      <div
        className="delete-btn-container"
        onMouseEnter={deleteBtnFill}
        onMouseLeave={deleteBtnOutline}
      >
        {deleteBtn ? (
          <DeleteOutlineOutlinedIcon
            className="delete-cart-item-btn"
            onClick={() => alert()}
          />
        ) : (
          <DeleteIcon
            className="delete-cart-item-btn"
            onClick={() => alert()}
          />
        )}
      </div>
    </div>
  )
}

export default CartItem
