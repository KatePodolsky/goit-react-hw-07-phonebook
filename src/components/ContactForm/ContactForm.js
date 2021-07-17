import React, { Component } from "react";
import { connect } from 'react-redux';
import shortid from 'shortid';
import PropTypes from "prop-types";

import {contactsSelectors, contactsOperations} from '../../redux/contacts';

import styles from "./ContactForm.module.css"


class ContactForm extends Component {
    static defaultProps = {
        name: '',
        number: ''
    };

    static propTypes = {
        name: PropTypes.string,
        number: PropTypes.string,
    };

    state = {
        name: this.props.name,
        number: this.props.number,
    }

    nameInputId = shortid.generate();
    numberInputId = shortid.generate();

    handleContactAdd = e => {
        const { name, value } = e.currentTarget;
        this.setState({ [name]: value });
    }

    checkingAnExistingContact = (state, contacts) => {
        const { name, number } = state;
        if (contacts.some(contact => contact.name.toLowerCase() === name.toLowerCase())) {
            alert(`${name} is already in contacts`)
            return;
    }

        if (contacts.some(contact => contact.number === number)) {
            alert(`${number} is already in contacts under a different name`)
            return;
        }
        this.props.onSubmit(state);
    }

    handlesubmit = e => {
        e.preventDefault();
        this.checkingAnExistingContact(this.state, this.props.contacts);
        this.reset()
    }
    reset = () => {
        this.setState({ name: "", number: "" });
    };

    render() {
        const { name, number } = this.state;

        return (
            <form onSubmit={this.handlesubmit} className={styles.form}>
                <label htmlFor={this.nameInputId} className={styles.property}>
                    <span>Name</span>
                    <input
                        type="text"
                        name="name"
                        value={name}
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                        required
                        className={styles.input}
                        onChange={this.handleContactAdd}
                        id={this.nameInputId}
                    />
                </label>
                <label htmlFor={this.numberInputId} className={styles.property}>
                    <span>Number</span>
                    <input
                        type="tel"
                        name="number"
                        value={number}
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                        required
                        className={styles.input}
                        onChange={this.handleContactAdd}
                        id={this.numberInputId}
                    />
                </label>
                <button type="submit" className={styles.button}>
                    Add contact
                </button>
            </form>
        )
    }
}

const mapStateToProps = state => ({
    contacts: contactsSelectors.getAllContacts(state),
})

const mapDispatchToProps = dispatch => ({
    onSubmit: (name, number) => dispatch(contactsOperations.saveContact(name, number))
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
