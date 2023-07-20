import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
export const Header = styled.header`
  background-color: #b3e5fc;
  color: #000;
  width: 100%;
  padding: 10px;
  margin-bottom:5px;
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: flex-start;
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const NavItem = styled.li`
  margin: 0 10px;
`;

export const NavLinkStyled = styled(NavLink)`
  color: grey;
  text-decoration: none;
  padding: 2px 20px;
  border: 2px solid grey;
  border-radius: 10px;
  &.active {
    color: white;
    background-color: grey;
  }
`;
