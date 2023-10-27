import { useState } from "react";
import { AlignJustify, X } from "lucide-react";

import "./dropdown.scss";
import Menu from "../Menu";

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="dropdown" onClick={toggleDropdown}>
      <div>{isOpen ? <X /> : <AlignJustify />}</div>
      {isOpen && <Menu />}
    </div>
  );
};

export default DropdownMenu;
