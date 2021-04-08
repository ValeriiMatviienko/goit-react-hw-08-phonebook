import React from 'react';
import PropTypes from 'prop-types';

import s from './Container.module.css';

const Container = ({ title, children }) => (
  <section className={s.section}>
    <h2 className={s.heading}>{title}</h2>
    {children}
  </section>
);
Container.defaultProps = {
  title: '',
};

Container.propTypes = {
  title: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Container;
