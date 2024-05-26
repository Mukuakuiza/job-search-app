import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar.jsx'; //navbar will be shown in every page
const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default MainLayout;
