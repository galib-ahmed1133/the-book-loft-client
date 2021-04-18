import React from "react";
import { Nav } from "react-bootstrap";
import css from "./Admin.css";
import { Link, Route } from "react-router-dom";
import Switch from "react-bootstrap/esm/Switch";
import ManageBooks from "../ManageBooks.js/ManageBooks";
import AddBook from "../AddBooks/AddBook";

const admin = () => {
  return (
    <div className="container admin-panel">
      <div className="row">
      <div className="col-md-3">
        <Nav className="admin-nav-bg">
          <Nav.Item>
            <Nav.Link className="admin-nav">
              <Link className="nav-menu" to="/admin/managebooks">
                Manage Books
              </Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className="admin-nav">
              <Link className="nav-menu" to="/admin/addbook">
                Add Book
              </Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className="admin-nav">
              <Link className="nav-menu" to="/admin/editbooks">
                Edit Books
              </Link>
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
      <div className="col-md-9">
        <Switch>
          <Route exact path="/admin/managebooks">
            <ManageBooks />
          </Route>
          <Route path="/admin/addbook">
            <AddBook />
          </Route>
        </Switch>
      </div>
      </div>
    </div>
  );
};

export default admin;
