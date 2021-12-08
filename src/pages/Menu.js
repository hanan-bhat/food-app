import React, { useEffect } from 'react'
import MenuItem from '../components/MenuItem'
import data from '../data'

const Menu = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className="menu-container">
      <div className="menu-content">
        {data.map((item) => (
          <MenuItem
            key={item.id}
            image={item.image}
            menuName={item.menuName}
            price={item.price}
          />
        ))}
      </div>
    </div>
  )
}

export default Menu
