import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const MenuNav = styled.nav`
  display: flex;
`;

export const MenuBox = styled.div`
  padding: 0.3em 1em;
  font-size: 1.3em;
  margin: 5px;
  border: 1px solid #efefef;
  border-radius: 5px;
  background: #efefef;
  cursor: pointer;
`;

export const MenuLink = styled(NavLink)`
  text-decoration: none;

  &.active {
    ${MenuBox} {
      background: #403c3c;
      color: white;
    }
  }
`;
