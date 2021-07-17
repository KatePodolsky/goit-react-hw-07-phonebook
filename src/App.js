import React, { Component } from "react";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Container from "./components/Container";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import FilterContacts from "./components/FilterContacts";
import LoaderContacts from "./components/Loader";

import { contactsOperations, contactsSelectors } from './redux/contacts';

import styles from "./App.module.css";


class App extends Component {
  static propTypes = {
    contacts: PropTypes.array,
    filter: PropTypes.string,
  };

  componentDidMount() {
    this.props.fetchContacts();
  }

  render() {
    return (
      <Container>
          <h1 className={styles.title}>Phonebook</h1>
          <ContactForm />
          <h2 className={styles.title}>Contacts</h2>
          <FilterContacts />
          {this.props.isLoadingContacts&&<LoaderContacts />}
          <ContactList />
     
      </Container >
    )
  }
}

const mapStateToProps = state => ({
    isLoadingContacts: contactsSelectors.getLoading(state),
})

const mapDispatchToProps = dispatch => ({
   fetchContacts:()=>dispatch(contactsOperations.fetchContacts())
});
 

export default connect (mapStateToProps, mapDispatchToProps)(App);





