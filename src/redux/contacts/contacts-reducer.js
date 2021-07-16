import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
    saveContactRequest,
    saveContactSuccess,
    saveContactError,
    deleteContactRequest,
    deleteContactSuccess,
    deleteContactError,
    updateFilter
} from '../contacts/contacts-actions';
import checkingAnExistingContact from '../contacts/contacts-reducer-helpers';

const itemsReducer = createReducer([], {
    [saveContactSuccess]: (state, action) => checkingAnExistingContact(state, action),
    [deleteContactSuccess]: (state, action) => state.filter(({ id }) => id !== action.payload),
}
)

const filterReducer = createReducer('', {
    [updateFilter]: (_, { payload }) => payload
})

const loading = createReducer(false, {
    [saveContactRequest]: () => true,
    [saveContactSuccess]: () => false,
    [saveContactError]: () => false,
    [deleteContactRequest]: () => true,
    [deleteContactSuccess]: () => false,
    [deleteContactError]: () => false
});

export default combineReducers({
    items: itemsReducer,
    filter: filterReducer,
    loading

});

