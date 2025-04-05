import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">
          Social Media Analytics
        </Link>
        <div>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/top-users">Top Users</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/trending-posts">Trending Posts</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">Feed</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
