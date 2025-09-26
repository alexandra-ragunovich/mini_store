import React from "react";
import { Link, useLocation } from "react-router-dom";

const routeNames = {
  "/": "Главная",
  "/liked": "Избранное",
};

const Breadcrumbs = () => {
  const location = useLocation();
  const pathSegments = location.pathname.split("/").filter(Boolean);

  const crumbs = pathSegments.map((segment, index) => {
    const path = "/" + pathSegments.slice(0, index + 1).join("/");
    return (
      <span key={path}>
        <Link to={path}>{routeNames[path] || segment}</Link>
        {index < pathSegments.length - 1 && " / "}
      </span>
    );
  });

  return (
    <nav className="breadcrumbs">
      <Link to="/">{routeNames["/"]}</Link>
      {pathSegments.length > 0 && " / "}
      {crumbs}
    </nav>
  );
};

export default Breadcrumbs;
