/* eslint-disable react/prop-types */
import { useState } from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import { sidebarData } from './sidebarData';
import { HiLogout } from 'react-icons/hi';

export const Sidebar = () => {
  return (
    <aside className="sidebar-container">
      <ul className="sidebar-list">
        {sidebarData.map((item, index) => (
          <SidebarItem key={index} item={item} />
        ))}
      </ul>
      <div className="sidebar-logout">
        <div>{<HiLogout />}</div>
        <Link to={'/dang-xuat'}>Đăng xuất</Link>
      </div>
    </aside>
  );
};

const SidebarItem = ({ item }) => {
  const [showSubMenu, setShowSubMenu] = useState(false);

  const handleShowSubMenuClick = () => {
    setShowSubMenu(!showSubMenu);
  };

  return (
    <li>
      <div className="sidebar-item" onClick={handleShowSubMenuClick}>
        <div>{item.icon}</div>
        <div>{item.title}</div>
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
