import React, { Component } from "react";
import PropTypes from 'prop-types';

import Container from "./components/Container/Container";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import FilterContacts from "./components/FilterContacts/FilterContacts";

import styles from "./App.module.css"

class App extends Component {
  static propTypes = {
    contacts: PropTypes.array,
    filter: PropTypes.string,
  };

  render() {
    return (
      <Container>
        <h1 className={styles.title}>Phonebook</h1>
        <ContactForm />
        <h2 className={styles.title}>Contacts</h2>
        <FilterContacts />
        <ContactList />
      </Container >
    )
  }
}

export default App;





