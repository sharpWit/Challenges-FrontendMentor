import { AlignJustify } from "lucide-react";

import "./header.scss";
import Menu from "../menu/Menu";

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="logo">SharpWit</div>
        <div className="menu">
          <AlignJustify>
            <Menu />
          </AlignJustify>
        </div>
      </div>
    </div>
  );
};

export default Header;
