import { Outlet } from 'react-router-dom';
import { Header } from '../Components/Header';
import { Footer } from '../Components/Footer';
import { Sidebar } from '../Components/Sidebar';
import './MainLayout.css'; // Import your custom CSS file

export const MainLayout = () => {
  return (
    <div className="main-layout">
      <Header />
      <div className="row-wrapper">
        <div className="sidebar-layout">
          <Sidebar />
        </div>
        <div className="content-layout">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
};
