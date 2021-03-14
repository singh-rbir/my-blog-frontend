import React from 'react';
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
  <>
  <nav>
    <ul>
      <li>
        <Link to="/" className="link">Home</Link>
      </li>
      <li>
        <Link to="/about" className="link">About</Link>
      </li>
      <li>
        <Link to="/articles-list" className="link">Articles</Link>
      </li>
    </ul>
  </nav>
  </>
  )
}

export default Navbar;