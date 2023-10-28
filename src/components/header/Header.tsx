import { Github } from "lucide-react";
import { useLocation } from "react-router-dom";

import "./header.scss";
import DropdownMenu from "../menu/dropdown/DropdownMenu";
import Sidebar from "../sidebar/Sidebar";

const Header = () => {
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <div className="header">
      <div className="headerContainer">
        {pathname === "/Features" ? (
          <Sidebar />
        ) : (
          <div className="menu">
            <DropdownMenu />
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
