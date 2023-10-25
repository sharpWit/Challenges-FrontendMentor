import { menuItems } from "../../constants/manuItems";

function Menu() {
  return (
    <ul className="space-y-2 divide-y divide-stone-200 px-2">
      {menuItems.map((item) => (
        <li key={item.id}>
          <a href={item.slug}>{item.title}</a>
        </li>
      ))}
    </ul>
  );
}

export default Menu;
