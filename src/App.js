import "./App.css";
import Home from "./component/Home";
import Navbar from "./component/Navbar";
import { Switch, Route, Router } from "react-router-dom";
import Products from "./component/Products";
import Product from "./component/Product";
import Cart from "./component/Cart";


function App() {
  return (
    <>
      <Navbar />
      <Router>
        <Route exact path="/" component={Home} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/products/:id" component={Product} />
        <Route exact path="/cart" component={Cart} />
      </Router>
    </>
  );
}

export default App;