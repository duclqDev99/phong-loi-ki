import AsideMenuItem from './AsideMenuItem';
import menu from './menu';

export default function AsideMenu() {
  return (
    <nav>
      {menu.map((item, key) => (
        <AsideMenuItem item={item} key={key} />
      ))}
    </nav>
  );
}
