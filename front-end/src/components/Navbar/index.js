import React from "react";
import { Nav, NavLink, Bars, NavMenu } from "./NavbarElements";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to="#"></NavLink>
        <Bars />
        <NavMenu>
          <NavLink to="/" activeStyle>
            Home
          </NavLink>
          <NavLink to="/grades" activeStyle>
            Grades
          </NavLink>
          <NavLink to="/allprojects" activeStyle>
            All Projects
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
