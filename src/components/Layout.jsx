import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { Footer } from "../ui/Footer";

const Layout = () => {
  return (
    <>
      <Outlet />
      <Footer />
    </>

  )
};

export { Layout };