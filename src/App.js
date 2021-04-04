import "./App.css";
import Navbar from "./Components/Navbar/nav";

import { Switch, Route } from "react-router-dom";
import AboutPage from "./Pages/AboutPage";
import UserPage from "./Pages/UserPage";
import HomePage from "./Pages/HomePage";
import ContactPage from "./Pages/ContactPage";
const App = () => {

  // TODO: Routing
  // TODO: React-route-dom
  
  // 1 - go To index.js  and add BrowserRouter
  // 2- Nav
  // 3- Add the Switch and Routes to the App

  return (
    <div>
      <Navbar />

        {/* container   --> Routes */}
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/about">
          <AboutPage />
        </Route>
        <Route exact path="/users">
          <UserPage />
        </Route>
        <Route exact path="/contact">
          <ContactPage />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
