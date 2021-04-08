import React from 'react';
import { connect } from 'react-redux';
import { getVisibleContacts } from '../../redux/phonebook/phonebook-selectors';
import s from './Phonebook.module.css';
import PhonebookItem from './PhonebookItem';

const Phonebook = ({ contacts }) => {
  return (
    <>
      {contacts && (
        <ul className={s.list}>
          {contacts.map(contact => (
            <li className={s.item} key={contact.id}>
              <PhonebookItem {...contact} />
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

const mapStateToProps = state => {
  return {
    contacts: getVisibleContacts(state),
  };
};

export default connect(mapStateToProps)(Phonebook);
