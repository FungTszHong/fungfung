import React from "react";
import ReactDom from 'react-dom'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import App from './jump'
import MainButton from './MainButton'

export default function BasicExample() {
  return (
    <Router>
      <div>
            <button onClick={() => alert('Welcome!')}><Link to="/MainPage"><h1>Main Page</h1></Link></button>
            <button onClick={() => alert('Have a nice day')}><Link to="/ShoppingCart"><h1>ShoppingCart</h1></Link></button>
            <button onClick={() => alert('Call me for details')}><Link to="/Orders"><h1>Orders</h1></Link></button>
            <button onClick={() => alert('Call me for ordering')}><Link to="/NEWOrders"><h1>NEW Orders</h1></Link></button>
            <button onClick={() => alert('Whatsapp/Signal me')}><Link to="/Contacts"><h1>Contacts</h1></Link></button><br/>
        <hr />
        <Switch>
          <Route exact path="/MainPage">
            <MainPage />
          </Route>
          <Route path="/ShoppingCart">
            <ShoppingCart />
          </Route>
          <Route path="/Orders">
            <Orders />
          </Route>
          <Route path="/NEWOrders">
            <NEWOrders />
          </Route>
          <Route path="/Contacts">
            <Contacts />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function MainPage() {
  return (
    <div></div>
  );
}

function ShoppingCart() {
  return (
    <div></div>
  );
}

function Orders() {
  return (
    <div></div>
  );
}
function NEWOrders() {
  return (
    <div></div>
  );
}
function Contacts() {
  return (
    <div></div>
  );
}