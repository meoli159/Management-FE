/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import './style.css';

export const Header = () => {
  // const isAuth = true;
  // const isAdmin = true;

  return (
    <div className="navbar-wrapper">
      <nav>
        <Link to="/">Khều donate</Link>
        <span>
          Signed in as: <a href="">Cyrus</a>
        </span>
      </nav>
    </div>
  );
};
