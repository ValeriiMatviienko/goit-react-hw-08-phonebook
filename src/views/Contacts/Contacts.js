import React, { Component } from 'react';
import { connect } from 'react-redux';
import InputForm from '../../components/InputForm/InputForm';
import Filter from '../../components/Filter/Filter';
import Phonebook from '../../components/Phonebook/Phonebook';
import Container from '../../components/Container/Container';
import { getIsLoading } from '../../redux/phonebook/phonebook-selectors';
import * as contactsOperations from '../../redux/phonebook/phonebook-operations';

class Contacts extends Component {
  componentDidMount() {
    this.props.fetchContacts();
  }

  render() {
    return (
      <>
        <Container title="Phonebook">
          <InputForm />
        </Container>
        <Container title="Contacts">
          <Filter />
          {this.props.isLoadingContacts && <h2> Loading contacts...</h2>}
          <Phonebook />
        </Container>
      </>
    );
  }
}

const mapStateToProps = state => ({
  isLoadingContacts: getIsLoading(state),
});

const mapDispatchToProps = dispatch => ({
  fetchContacts: () => dispatch(contactsOperations.fetchContacts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);
