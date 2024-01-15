import { Outlet } from 'react-router-dom';
import { Header } from '../../Components/Header';
import { Footer } from '../../Components/Footer';
import { Sidebar } from '../../Components/Sidebar';
import './style.css'; // Import your custom CSS file

export const AdminLayout = () => {
  return (
    <div className="admin-layout-container">
      <Header />

      <div className="main-body-container">
        <Sidebar />

        <div className="main-content-wrapper">
          <Outlet />
        </div>
      </div>

      <Footer />
    </div>
  );
};
