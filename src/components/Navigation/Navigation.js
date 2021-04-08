import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';

const Navigation = () => {
  return (
    <div className={s.container}>
      <NavLink className={s.cybrbtn} exact to="/">
        <span aria-hidden className={s.cybrbtn__glitch}>
          Home
        </span>
        Home
      </NavLink>
      <NavLink className={s.cybrbtn} to="/phonebook">
        <span aria-hidden className={s.cybrbtn__glitch}>
          Phonebook
        </span>
        Phonebook
      </NavLink>
    </div>
  );
};

export default Navigation;
