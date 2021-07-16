import React from 'react';
import { connect } from 'react-redux';

import * as contactsActions from '../../redux/contacts/contacts-actions';
import styles from "./FilterContacts.module.css";

const FilterContacts = ({ value, onChange }) => (
    <label className={styles.filterName}>
        Filter by name
        <input type="text" value={value} onChange={onChange} className={styles.input} />
    </label>
)
const mapStateToProps = state => ({
    value: state.contacts.filter,
});

const mapDispatchToProps = dispatch => ({
    onChange: (e) => dispatch(contactsActions.updateFilter(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FilterContacts)