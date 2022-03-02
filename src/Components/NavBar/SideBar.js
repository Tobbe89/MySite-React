import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar-Style.css";
import { SidebarData } from "./NavBarData";
import * as FaIcons from "react-icons/fi";

export function SideBar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  let IconStyle = { fontSize: "2em", color: "Black" };

  return (
    <div className="Sidebar-content">
      <div className="Sidebar">
        <Link className="plus-Navbar">
          <FaIcons.FiBarChart
            style={IconStyle}
            className="Navbar-Icon"
            onClick={showSidebar}
          />
        </Link>
      </div>
      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items" onClick={showSidebar}>
          {SidebarData.map((item, index) => {
            return (
              <li key={index} className={item.className}>
                <Link to={item.path}>
                  <span>{item.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
