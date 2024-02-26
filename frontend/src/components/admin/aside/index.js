// import AsideMenu from "./AsideMenu";
import AsideMenu from './AsideMenu';
import AsideTop from './AsideTop';
import './aside.scss';

export default function Aside() {
  return (
    <aside className='navbar-aside' id='offcanvas_aside'>
      <AsideTop />

      <AsideMenu />
    </aside>
  );
}
