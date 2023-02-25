import React from 'react';
import { Outlet } from 'react-router-dom';
import { Footer } from '../../ui/Footer';

const Layout = () => {
  return (
    <>
      <h2>layout</h2>
      <Outlet />
      <Footer />
    </>
  )
}

export { Layout };