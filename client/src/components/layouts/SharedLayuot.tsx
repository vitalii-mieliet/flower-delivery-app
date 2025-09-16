import React from 'react';
import { Outlet } from 'react-router';
import Header from '../Header';

const SharedLayuot = () => {
  return (
    <>
      <Header />

      <main>
        <Outlet />
      </main>
    </>
  );
};

export default SharedLayuot;
