import React, { useState } from 'react'
import { Link } from "react-router-dom";

const SideMenu = () => {


  const menuItems = [
    {
      name:"Profile",
      url:"/me/profile",
      icon:"fas fa-user"
    },
    {
      name:"Update Profile",
      url:"/me/update_profile",
      icon:"fas fa-user"
    },
    {
      name:"Upload Avatar",
      url:"/me/upload_avatar",
      icon:"fas fa-user-circle"
    },
    {
      name:"Update Password",
      url:"/me/update_password",
      icon:"fas fa-lock"
    },
  ];

  const [activeMenuItem, setActiveMenuItem] = useState(location.pathname);

  const handelMenuItemClick = (menuItemUrl)=> {
    setActiveMenuItem(menuItemUrl);
  };



  return (
    <div className='list-group mt-5 pl-4'>
      {menuItems.map((menuItem, index) => (
        <Link to={menuItem.url} key={index} className={`fw-bold list-group-item mb-2 ${activeMenuItem.includes(menuItem.url) ? "active" : ""}`} onClick={() => handelMenuItemClick(menuItem.url)}>
          <i className={`${menuItem.icon}`}></i> {menuItem.name}
        </Link>
      ))}
    </div>
  )
}

export default SideMenu