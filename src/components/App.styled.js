import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
  color: var(--color-black);
  text-decoration: none;

  &.active {
    color: var(--color-accent);
  }
`;
