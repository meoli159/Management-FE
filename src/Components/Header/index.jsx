/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './style.css';

export const Header = () => {
  const user = useSelector((state) => state.auth?.user);

  return (
    <div className="navbar-wrapper">
      <nav>
        <Link to="/">Khều donate</Link>
        <span>
          Signed in as: <a href="">{user.username}</a>
        </span>
      </nav>
    </div>
  );
};
