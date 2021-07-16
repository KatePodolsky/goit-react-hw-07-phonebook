import React from "react";
import { connect } from 'react-redux';
import contactsOperations from '../../redux/contacts/contacts-operations';
import PropTypes from 'prop-types';
import styles from "./ContactList.module.css";
import ContactListItem from "../ContactListItem/ContactListItem"

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
}

const getfilteredContacts = (allcontacts, filter) => {
    const normalizedFilter = filter.toLowerCase();

    return allcontacts.filter(contact =>
        contact.name.toLowerCase().includes(normalizedFilter));
};

const mapStateToProps = state => ({
    contacts: getfilteredContacts(state.contacts.items, state.contacts.filter),
})


const mapDispatchToProps = dispatch => (
    {
        onDeleteContact: (contactId) => dispatch(contactsOperations.deleteContact(contactId)),
    }
)

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);