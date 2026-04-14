import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Products from "./components/pages/Products";
import Contact from "./components/pages/Contact";
import Home from "./components/pages/Home"; 

const navLinkStyles = ({ isActive }) => ({
  color: isActive ? '#007bff' : '#333',
  textDecoration: isActive ? 'none' : 'underline',
  fontWeight: isActive ? 'bold' : 'normal',
  padding: '5px 10px'
});

function App() {
  return (
    <BrowserRouter>

      <nav style={{ marginBottom: "20px" }}>
        <NavLink to="/" style={navLinkStyles}>Home</NavLink>
        <NavLink to="/product" style={navLinkStyles}>Products</NavLink>
        <NavLink to="/contact" style={navLinkStyles}>Contact</NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;