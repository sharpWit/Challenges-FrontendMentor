import { Github } from "lucide-react";

import "./header.scss";
import DropdownMenu from "../menu/dropdown/DropdownMenu";

const Header = () => {
  return (
    <div className="header">
      <div className="headerContainer">
        <div className="menu">
          <DropdownMenu />
        </div>
        <div className="logoContainer">
          <a
            href="https://github.com/sharpWit"
            rel="noreferrer"
            target="_blank"
            title="Visit my github profile"
            aria-label="Visit my github profile"
            className="github"
          >
            <Github />
          </a>
          <div className="logo">
            <a href="/">SharpWit</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
