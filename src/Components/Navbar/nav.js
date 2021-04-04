import React from "react";
import { Link } from "react-router-dom";
import './styleNav.css'

export default function Navbar() {
  return (
    <nav className='nav'>  
      <div>
        <Link to="/">Home</Link>
      </div>
      <div>
        <Link to="/about">About</Link>
      </div>
      <div>
        <Link to="/users">Users</Link>
      </div>
      <div>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
}
