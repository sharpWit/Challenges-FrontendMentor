import "./menu.scss";
import { menuItems } from "../../constants/manuItems";

function Menu() {
  return (
    <ul className="menu-list space-y-2 divide-y divide-stone-200 px-1">
      {menuItems.map((item) => (
        <li key={item.id}>
          <a href={item.slug}>{item.title}</a>
        </li>
      ))}
    </ul>
  );
}

export default Menu;
