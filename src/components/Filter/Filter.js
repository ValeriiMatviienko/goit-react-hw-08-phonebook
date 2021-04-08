import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from '../../redux/phonebook/phonebook-actions';
import { getFilter } from '../../redux/phonebook/phonebook-selectors';
import s from './Filter.module.css';

const Filter = ({ filter, onChange }) => (
  <div className={s.wrapper}>
    <label className={s.label}>
      Find by Name
      <input
        className={s.input}
        type="text"
        value={filter}
        onChange={onChange}
      />
    </label>
  </div>
);
Filter.defaultProps = {
  filter: '',
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  filter: getFilter(state),
});

const mapDispatchToProps = dispatch => ({
  onChange: event => dispatch(actions.changeFilter(event.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
