import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import css from './AuthChanger.module.css';

const StyledLink = styled(NavLink)`
  color: black;
  font-weight: 700;
  text-decoration: none;

  &.active {
    color: blue;
  }
`;

export const AuthChanger = () => {
  return (
    <div className={css.container}>
      <StyledLink to="/">Register</StyledLink>
      <StyledLink to="/login">Login</StyledLink>
    </div>
  );
};
