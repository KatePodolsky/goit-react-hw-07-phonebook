import { createSelector } from '@reduxjs/toolkit';

const getLoading = state => state.contacts.loading;

const getfilter = state => state.contacts.filter;

const getAllContacts = state => state.contacts.items;

const getfilteredContacts = createSelector(
    [getfilter, getAllContacts],
    (filter, contacts) => {
        const normalizedFilter = filter.toLowerCase();
        return contacts.filter(contact =>
            contact.name.toLowerCase().includes(normalizedFilter));
    }
);
// eslint-disable-next-line
export default {
    getLoading,
    getfilter,
    getAllContacts,
    getfilteredContacts
}
    


