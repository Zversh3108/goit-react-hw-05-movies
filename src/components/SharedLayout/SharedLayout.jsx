import { Outlet } from 'react-router-dom';
import Loader from 'components/Loader/Loader';
import { Suspense } from 'react';
import { Header, Nav, NavItem, NavLinkStyled } from './SharedLayout.Styled';
import React from 'react';

const SharedLayout = () => {
  return (
    <div>
      <Header>
        <Nav>
          <ul
            style={{
              display: 'flex',
              justifyContent: 'flex-end',
              listStyle: 'none',
              margin: 0,
              padding: 0,
            }}
          >
            <NavItem style={{ margin: '0 10px' }}>
              <NavLinkStyled to="/">Home </NavLinkStyled>
            </NavItem>
            <NavItem style={{ margin: '0 10px' }}>
              <NavLinkStyled to="/movies">Movies</NavLinkStyled>
            </NavItem>
          </ul>
        </Nav>
      </Header>{' '}
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};
export default SharedLayout;
