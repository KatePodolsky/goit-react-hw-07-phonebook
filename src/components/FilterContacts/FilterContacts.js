import React from 'react';
import { connect } from 'react-redux';

import { contactsSelectors, updateFilter  } from '../../redux/contacts';

import styles from "./FilterContacts.module.css";


const FilterContacts = ({ value, onChange }) => (
    <label className={styles.filterName}>
        Filter by name
        <input type="text" value={value} onChange={onChange} className={styles.input} />
    </label>
)
const mapStateToProps = state => ({
    value: contactsSelectors.getfilter(state),
});

const mapDispatchToProps = dispatch => ({
    onChange: (e) => dispatch(updateFilter(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FilterContacts)