import React from "react";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div>
      <h2>HEADER</h2>

      <Outlet />
      <h2>FOOTER</h2>
    </div>
  );
}

export default Layout;
