/* eslint-disable react/prop-types */
import { useState } from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import { sidebarData } from './sidebarData';
import { HiLogout } from 'react-icons/hi';

const SubMenuList = ({ subItems, showSubMenu }) => (
  <ul className={`submenu-list ${showSubMenu ? 'show' : ''}`}>
    {subItems.map((subItem, index) => (
      <li key={index}>
        <Link to={subItem.path}>{subItem.subItemTitle}</Link>
      </li>
    ))}
  </ul>
);

const SidebarListItem = ({ item }) => {
  const [showSubMenu, setShowSubMenu] = useState(false);

  const handleShowSubMenuClick = () => {
    setShowSubMenu(!showSubMenu);
  };

  return (
    <li>
      <div className="sidebar-list-item" onClick={handleShowSubMenuClick}>
        <div>{item.icon}</div>
        <div>{item.title}</div>
      </div>
      {/* {console.log(item)} */}
      <SubMenuList subItems={item.subItems} showSubMenu={showSubMenu} />
    </li>
  );
};

const Sidebar = () => {
  return (
    <aside className="sidebar-container">
      <ul className="sidebar-list-container">
        {sidebarData.map((item, index) => (
          <SidebarListItem key={index} item={item} />
        ))}
      </ul>
      <div className="sidebar-list-item logout">
        <div>{<HiLogout style={{ color: 'white' }} />}</div>
        <Link to={'/dang-xuat'}>Đăng xuất</Link>
      </div>
    </aside>
  );
};

export { Sidebar };
