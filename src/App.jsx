import { Switch, Route } from "wouter"

import Home from "./pages/Home/index.jsx";
import Cart from "./pages/Cart/index.jsx";
import Header from "./components/Header/index.jsx";
import Footer from "./components/Footer/index.jsx";
import SignIn from "./pages/SignIn/index.jsx";
import Register from "./pages/Register/index.jsx";

export default () => 
  <>
    <Header />
    <main>
      <Switch>
        <Route path="/">
          <Home />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/sign-in">
          <SignIn />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
      </Switch>
    </main>
    <Footer />
  </>