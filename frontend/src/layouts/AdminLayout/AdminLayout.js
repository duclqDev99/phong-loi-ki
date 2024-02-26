import { Outlet } from 'react-router-dom';
import Header from '../../components/admin/header';
import Footer from '../../components/admin/footer';
import Aside from '../../components/admin/aside';

import './admin.css';

export default function AdminLayout() {
  return (
    <>
      <Aside />
      <main className='main-wrap'>
        <Header />
        <Outlet />
        <Footer />
      </main>
    </>
  );
}
