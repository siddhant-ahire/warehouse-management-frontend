import "./App.css";
import { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import WebFont from "webfontloader";
import React from "react";
import store from "./store";
import ProtectedRoute from "./component/Route/ProtectedRoute";
import Dashboard from "./component/Admin/Dashboard";
import ProductList from "./component/Admin/ProductList";
import LoginSignUp from "./component/Users/LoginSignUp";
import { loadUser } from "./actions/userAction";
import NotFound from "./component/Layout/Not Found/NotFound";
import WarehouseList from "./component/Admin/WarehouseList";
import SectionList from "./component/Admin/SectionList";
import AddProduct from "./component/Admin/AddProduct";
import CategoryList from "./component/Admin/CategoryList";


function App() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });
    store.dispatch(loadUser());

  }, []);

  window.addEventListener("contextmenu", (e) => e.preventDefault());

  return (
    <Router>
      <Switch>
        <ProtectedRoute
          isAdmin={true}
          exact
          path="/"
          component={Dashboard}
        />
        <ProtectedRoute
          exact
          path="/warehouses-list"
          isAdmin={true}
          component={WarehouseList}
        />
        <ProtectedRoute
          exact
          path="/sections-list"
          isAdmin={true}
          component={SectionList}
        />
        <ProtectedRoute
          exact
          path="/category-list"
          isAdmin={true}
          component={CategoryList}
        />
        <ProtectedRoute
          exact
          path="/products-list"
          isAdmin={true}
          component={ProductList}
        />
        <ProtectedRoute
          exact
          path="/add-product"
          isAdmin={true}
          component={AddProduct}
        />

        <Route exact path="/login" component={LoginSignUp} />
        <Route component={ NotFound } />

      </Switch>
    </Router>
  );
}

export default App;
