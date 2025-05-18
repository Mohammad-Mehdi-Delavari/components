import React from "react";
import { routes } from "../routes";
import { Link } from "react-router-dom";
export default function SideBar() {
  return (
    <>
      {routes
        .filter((item) => item.title != "404")
        .map((item) => (
          <Link to={item.path}>{item.title}</Link>
        ))}
    </>
  );
}
