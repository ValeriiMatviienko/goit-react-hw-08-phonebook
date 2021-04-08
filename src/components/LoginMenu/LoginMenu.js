import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './LoginMenu.module.css';

const LoginMenu = () => {
  return (
    <div className={s.container}>
      <NavLink className={s.cybrbtn} to="/signup">
        <span aria-hidden className={s.cybrbtn__glitch}>
          SignUp
        </span>
        SignUp
      </NavLink>
      <NavLink className={s.cybrbtn} to="/login">
        <span aria-hidden className={s.cybrbtn__glitch}>
          SignIn
        </span>
        SignIn
      </NavLink>
    </div>
  );
};

export default LoginMenu;
