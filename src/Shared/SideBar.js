import React from "react";
import { RxDashboard } from "react-icons/rx";
import { DASHBOARD_SIDEBAR_LINKS } from "../Lib/Constant";
import { DASHBOARD_SIDEBAR_BOTTOM_LINKS } from "../Lib/Constant";
import { Link, useLocation } from "react-router-dom";
import classNames from "classnames";

const LinkClass =
  "flex LinkClass gap-2 font-light px-3 py-2 hover:bg-neutral-700 hover:no-underline active:bg-neutral-600 rounded-sm text-base flex justify-between";

const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="top-bar">
        <RxDashboard fontSize={24} />
        <span className="text-neutral-100 text-2xl">Dashboard</span>
      </div>
      <div className="sidebar-links">
        {DASHBOARD_SIDEBAR_LINKS.map((item) => (
          <SideBarLink key={item.key} item={item} />
        ))}
      </div>
      <div className="bottom-links">
        {DASHBOARD_SIDEBAR_BOTTOM_LINKS.map((item) => (
          <SideBarLink key={item.key} item={item} />
        ))}
      </div>
    </div>
  );
};

const SideBarLink = ({ item }) => {
  const { pathname } = useLocation();
  return (
    <Link
      to={item.path}
      className={classNames(
        pathname === item.path ? "text-white" : "bg-indigo-900",
        LinkClass
      )}
    >
      <span className="icon">{item.icon}</span>
      <span className="label">{item.label}</span>
      <span className="next">{item.next}</span>
    </Link>
  );
};

export default SideBar;
