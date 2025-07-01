import React, { useState } from 'react'
import { Link } from "react-router-dom";

const SideMenu = ({menuItems}) => {

  const [activeMenuItem, setActiveMenuItem] = useState(location.pathname);

  const handelMenuItemClick = (menuItemUrl)=> {
    setActiveMenuItem(menuItemUrl);
  };



  return (
    <div className='list-group pl-4'>
      {menuItems.map((menuItem, index) => (
        <Link to={menuItem.url} key={index} className={`fw-bold list-group-item mb-2 ${activeMenuItem.includes(menuItem.url) ? "active" : ""}`} onClick={() => handelMenuItemClick(menuItem.url)}>
          <i className={`${menuItem.icon}`}></i> {menuItem.name}
        </Link>
      ))}
    </div>
  )
}

export default SideMenu