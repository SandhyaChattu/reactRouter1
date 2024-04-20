// Write your JS code here

import {Link} from 'react-router-dom'

import './index.css'

const Header = () => {
  return (
    <div className="basement">
      <div className="bg-container">
        <nav className="nav-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
            alt="wave"
          />
          <ul className="list-container">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Header
