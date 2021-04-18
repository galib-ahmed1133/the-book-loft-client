import React, { createContext, useState } from "react";
import "./App.css"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Home from "./components/Home/Home";
import Admin from "./components/Admin/Admin";
import Login from "./components/Login/Login";
import { ThemeConsumer } from "react-bootstrap/esm/ThemeProvider";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import ManageBooks from "./components/ManageBooks.js/ManageBooks";
import Orders from "./components/Orders/Orders";
import Deals from "./components/Deals/Deals";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <Router>
      <Header></Header>
      <Switch>
        <PrivateRoute path="/admin">
          <Admin/>
        </PrivateRoute>
        <PrivateRoute path="/orders">
          <Orders/>
        </PrivateRoute>
        <PrivateRoute path="/deals/:id">
          <Deals/>
        </PrivateRoute>
        <Route path="/admin/managebooks">
          <ManageBooks/>
        </Route>
        <Route path="/login">
          <Login/>
        </Route>
        <Route path="/">
          <Home/>
        </Route>
      </Switch>
    </Router>
  </UserContext.Provider>
    
  );
}

export default App;
