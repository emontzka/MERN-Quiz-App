import React from "react";
import Login from "./Login";
import { Menu } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <Menu>
        <Menu.Item name='Home' as={NavLink} to='/'>
          Home
        </Menu.Item>
        <Menu.Item name='login' as={NavLink} to='/login'>
          Log In
        </Menu.Item>
        <Menu.Item name='signin' as={NavLink} to='/signup'>
          Sign Up
        </Menu.Item>
      </Menu>
    </div>
  );
}

export default Navbar;
