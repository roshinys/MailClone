import React from "react";
import Header from "./Components/Layout/Header/Header";
import Sidebar from "./Components/Layout/Sidebar/Sidebar";
import { Outlet } from "react-router-dom";

function RootLayout() {
  return (
    <div>
      <Header />
      <Sidebar />
      <Outlet />
    </div>
  );
}

export default RootLayout;
