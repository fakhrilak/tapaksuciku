import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import {Link } from "react-router-dom"
import "./Sidebar.css"
export default props => {
  return (
    <div>
        <div className="text"/>
        <Menu>
      <Link to="/">
        Home
      </Link>
      <Link>
        About
      </Link>
      {props.isAuthenticated && <Link to="/profile">
        Profile
      </Link>}
      {props.isAuthenticated && <a
      onClick={()=>props.handleLogout()}
      >
        LogOut
      </a>}
      {!props.isAuthenticated && <a
      onClick={()=>props.login()}
      >
        LogIn
      </a>}
      {!props.isAuthenticated &&<a
      onClick={()=>props.register()}
      >
        Register
      </a>}
    </Menu> 
    </div>
   
  );
};