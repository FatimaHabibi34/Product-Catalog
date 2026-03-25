// src/components/Navbar.jsx
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const activeStyle = ({ isActive }) => ({
    color: isActive ? "red" : "black",
    fontWeight: isActive ? "bold" : "normal",
    marginRight: "15px"
  });

  return (
    <nav style={{ padding: "10px", borderBottom: "1px solid #ccc" }}>
      <NavLink to="/" style={activeStyle}>Home</NavLink>
      <NavLink to="/products" style={activeStyle}>Products</NavLink>
    </nav>
  );
}