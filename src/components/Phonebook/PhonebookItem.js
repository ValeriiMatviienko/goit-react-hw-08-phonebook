import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as contactsOperations from '../../redux/phonebook/phonebook-operations';
import s from './Phonebook.module.css';

const PhonebookItem = ({ name, number, id, onDelete }) => {
  return (
    <>
      <span>
        {name} : {number}
      </span>
      <button type="button" className={s.close} onClick={() => onDelete(id)}>
        +
      </button>
    </>
  );
};

PhonebookItem.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

const mapDispatchToProps = dispatch => ({
  onDelete: id => dispatch(contactsOperations.deleteContact(id)),
});

export default connect(null, mapDispatchToProps)(PhonebookItem);
