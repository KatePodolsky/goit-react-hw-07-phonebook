import React from "react";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import ContactListItem from "../ContactListItem"

import { contactsOperations, contactsSelectors } from '../../redux/contacts';

import styles from "./ContactList.module.css";


const ContactList = ({ contacts, onDeleteContact }) => (
    <ul className={styles.contactList}>
        {contacts.map((contact) => (
            <ContactListItem key={contact.id} contact={contact} onDeleteContact={onDeleteContact} />
        ))}
    </ul>
)

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
    })).isRequired,
};

const mapStateToProps = state => ({
    contacts: contactsSelectors.getfilteredContacts(state),
})

const mapDispatchToProps = dispatch => (
    {
        onDeleteContact: (contactId) => dispatch(contactsOperations.deleteContact(contactId)),
    }
)

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);