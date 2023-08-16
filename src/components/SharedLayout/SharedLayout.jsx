import { Outlet } from 'react-router-dom';
import Loader from 'components/Loader/Loader';
import { Suspense } from 'react';
import React from 'react';
import { Header } from 'components/Header/Header';


const SharedLayout = () => {
  return (
    <div>
      
      <Header/>

      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>

  );
};
export default SharedLayout;
