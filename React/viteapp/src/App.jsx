import {BrowserRouter, Routes,Route, Link}  from "react-router-dom";
import About from "./components/pages/About";
import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";
import Products from "./components/pages/Products";
import CarProducts from "./components/pages/CarProducts";
import BikeProducts from "./components/pages/BikeProducts";
 
 
 

function App() {
   
  return (
    <BrowserRouter>
    
<nav>
  <Link to="/">Home</Link>
  <Link to="/products">Products</Link>
  <Link to="/contact">Contact</Link>
</nav>

<Routes>

  <Route path="/" element = {<Home/>} ></Route>
  <Route path="/products" element = {<Products/>} >
  <Route path="car" element = {<CarProducts/>} ></Route>
  <Route path="bike" element = {<BikeProducts/>} ></Route>
  
  </Route>
  <Route path="/contact" element = {<Contact/>} ></Route>
</Routes>
     
    </BrowserRouter>
  );
}

export default App;
