import React from "react";
import { Switch, Route } from "react-router-dom";
import Navbar from "./App/Layouts/Navbar/Navbar";
import HomePage from "../src/App/Pages/HomePage/HomePage";
import LoginPage from "../src/App/Pages/LoginPage/LoginPage";
import ShopPage from "../src/App/Pages/ShopPage/ShopPage";
import ContactPage from "../src/App/Pages/ContactPage/ContactPage";
import ToDoList from "./App/Pages/ToDoListPage/ToDoLisit";

// TODO:
// Routes / -- /contact /signIn /shop /shopDetails (hats - jackets -sneakers- women - men)
// signIn (signIn - register - signIn with Google signIn with facebook)
// shop (display to 4 items from Each category)
// /  ( display to menu)
// shopDetail Page display all Item from each Category

export default function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/shop">
          <ShopPage />
        </Route>
        <Route exact path="/contact">
          <ContactPage />
        </Route>
        <Route exact path="/sign">
          <LoginPage />
        </Route>
        <Route exact path="/todo">
          <ToDoList />
        </Route>
      </Switch>
    </div>
  );
}
