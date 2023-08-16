import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
export const Header = styled.header`
background-color: grey;
`;

export const Nav = styled.nav`
background-color: grey;
`;  


export const NavItem = styled.li`
  margin: 0 10px;
`;

export const NavLinkStyled = styled(NavLink)`
  color: white;
  text-decoration: none;
  padding: 2px 20px;
  border: 2px solid grey;
  border-radius: 10px;
  &.active {
    color: red;

  }
`;
