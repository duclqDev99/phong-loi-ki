import Menu from './Menu';
import Middle from './Middle';
import Topbar from './TopBar';

export default function Header() {
  return (
    <header className='header-area header-style-1 header-height-2'>
      <Topbar />
      <Middle />
      <Menu />
    </header>
  );
}
