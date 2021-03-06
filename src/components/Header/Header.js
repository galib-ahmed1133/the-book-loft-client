import React, { useContext } from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { UserContext } from "../../App";
import "./Header.css"

const Header = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  return (
    <div  className="header-style container">
    <Navbar sticky="top" collapseOnSelect expand="lg" className="container">
      <Navbar.Brand href="#home" className="Brand-logo">THE BOOK LOFT</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link> <Link className="link-style" to="/">Home</Link> </Nav.Link>
          <Nav.Link> <Link className="link-style" to="/orders">Orders</Link></Nav.Link>
          <Nav.Link> <Link className="link-style" to="/admin">Admin</Link></Nav.Link>
          <Nav.Link > <Link className="link-style" to="/deals">Deals</Link></Nav.Link>
          {loggedInUser.email ? <Nav.Link > <Link className="link-style-name" to="/">{loggedInUser.displayName}</Link></Nav.Link> : <Nav.Link > <Link className="link-style" to="/login"><button className="btn btn-success button">Login</button></Link></Nav.Link>}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    </div>
  );
};

export default Header;
