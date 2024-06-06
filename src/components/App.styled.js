import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
  border-radius: 5px;
  color: var(--color-black);
  padding: 0.5rem 1rem;
  text-align: center;
  text-decoration: none;
  transition: background-color 200ms ease;

  &:hover,
  &:focus {
    background-color: var(--color-gray);
    box-shadow: 2px 2px 5px var(--color-darkgray);
    outline: none;
  }

  &:active {
    box-shadow: inset 2px 2px 5px var(--color-darkgray);
  }

  &.active {
    color: var(--color-accent);
  }
`;
