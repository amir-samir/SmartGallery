import { useState } from 'react';
import './navbar.css';
import { NavLink } from 'react-router-dom';


function Navbar() {
    const [showNavBar, setShowNavbar] = useState(false)
    const handleShowNavBar = () =>
    {
        setShowNavbar(!showNavBar);
    };
    
    
    return  <nav className="navbar">
    <div className="container">
      <div className="logo">
      Smart Memories
      </div>
      <div className="menu-icon" onClick={handleShowNavBar}>
        <Hamburger />
      </div>
      <div className={`nav-elements  ${showNavBar && "active"}`}>
        <ul>
          <li>
            <a>About</a>
          </li>
          <li>
            <a>Register</a>
          </li>
          <li>
            <a>Contact</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
}

export default Navbar

const Hamburger = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="52"
      height="24"
      viewBox="0 0 52 24"
    >
      <g id="Group_9" data-name="Group 9" transform="translate(-294 -47)">
        <rect
          id="Rectangle_3"
          data-name="Rectangle 3"
          width="42"
          height="4"
          rx="2"
          transform="translate(304 47)"
          fill="#f9f8fb"
        />
        <rect
          id="Rectangle_5"
          data-name="Rectangle 5"
          width="42"
          height="4"
          rx="2"
          transform="translate(304 67)"
          fill="#f9f8fb"
        />
        <rect
          id="Rectangle_4"
          data-name="Rectangle 4"
          width="52"
          height="4"
          rx="2"
          transform="translate(294 57)"
          fill="#f9f8fb"
        />
      </g>
    </svg>
  );