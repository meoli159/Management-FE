/* eslint-disable react/prop-types */
import { useState } from 'react';
import './style.css';
import { Link, useNavigate } from 'react-router-dom';
import { sidebarData } from './sidebarData';
import { HiLogout, HiOutlineChevronRight, HiOutlineChevronDown } from 'react-icons/hi';
import { useDispatch } from 'react-redux';
import { logOutSuccess } from '../../redux/auth/authSlice.js';
import { logout } from '../../Apis/authApi.js';
export const Sidebar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logout();
      dispatch(logOutSuccess());
      navigate('/dang-nhap');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return (
    <aside className="sidebar-container">
      <ul className={`sidebar-list`}>
        {sidebarData.map((item, index) => (
          <SidebarItem key={index} item={item} />
        ))}
      </ul>
      <div className="sidebar-logout" onClick={handleLogout}>
        <div>
          <HiLogout />
        </div>
        <div>Đăng xuất</div>
      </div>
    </aside>
  );
};

const SidebarItem = ({ item }) => {
  const [showSubMenu, setShowSubMenu] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const handleShowSubMenuClick = () => {
    setShowSubMenu(!showSubMenu);
    setIsCollapsed(!isCollapsed);
  };
  // const toggleCollapse = () => {
  //   setIsCollapsed(!isCollapsed);
  // };
  return (
    <li>
      <div className="sidebar-item" onClick={handleShowSubMenuClick}>
        <div>
          {item.icon}
          {item.title}
        </div>
        <div className="collapse-icon">
          {isCollapsed ? <HiOutlineChevronDown /> : <HiOutlineChevronRight />}
        </div>
      </div>
      <SubMenu subItems={item.subItems} showSubMenu={showSubMenu} />
    </li>
  );
};

const SubMenu = ({ subItems, showSubMenu }) => (
  <ul className={`submenu ${showSubMenu ? 'show' : ''}`}>
    {subItems.map((subItem, index) => (
      <li key={index}>
        <Link to={subItem.path}>{subItem.subItemTitle}</Link>
      </li>
    ))}
  </ul>
);
