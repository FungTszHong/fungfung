import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function BasicExample() {
  return (
    <Router>
      <div>
            <button onClick={() => alert('Welcome!')}><Link to="/"><h1>Main Page</h1></Link></button>
            <button onClick={() => alert('Have a nice day')}><Link to="/ShoppingCart"><h1>ShoppingCart</h1></Link></button>
            <button onClick={() => alert('Call me for details')}><Link to="/Orders"><h1>Orders</h1></Link></button>
            <button onClick={() => alert('Call me for ordering')}><Link to="/NEWOrders"><h1>NEW Orders</h1></Link></button>
            <button onClick={() => alert('Whatsapp/Signal me')}><Link to="/Contacts"><h1>Contacts</h1></Link></button><br/>
        <hr />
        <Switch>
          <Route exact path="/">
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
    <div>
      {/* <h2>Home</h2> */}
    </div>
  );
}

function ShoppingCart() {
  return (
    <div>
      {/* <h2>ShoppingCart</h2> */}
    </div>
  );
}

function Orders() {
  return (
    <div>
      {/* <h2>Orders</h2> */}
    </div>
  );
}
function NEWOrders() {
  return (
    <div>
      {/* <h2>NEW Orders</h2> */}
    </div>
  );
}
function Contacts() {
  return (
    <div>
      {/* <h2>Contacts</h2> */}
    </div>
  );
}