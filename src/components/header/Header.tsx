import { Github } from "lucide-react";
import { useLocation } from "react-router-dom";

import "./header.scss";
// import DropdownMenu from "../menu/dropdown/DropdownMenu";
import Sidebar from "../sidebar/Sidebar";
import Dropdown from "../menu/Dropdown";

const Header = () => {
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <div className="header">
      <div className="headerContainer">
        {pathname.startsWith("/Features/") ? (
          <Sidebar />
        ) : (
          <div className="menu">
            <Dropdown />
          </div>
        )}
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
