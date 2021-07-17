import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
    fetchContactRequest,
    fetchContactSuccess,
    fetchContactError,
    saveContactRequest,
    saveContactSuccess,
    saveContactError,
    deleteContactRequest,
    deleteContactSuccess,
    deleteContactError,
    updateFilter
} from '../contacts/contacts-actions';

const itemsReducer = createReducer([], {
    [fetchContactSuccess]: (_, { payload }) => payload,
    [saveContactSuccess]: (state, action) => [action.payload, ...state],
    [deleteContactSuccess]: (state, action) => state.filter(({ id }) => id !== action.payload),
}
)

const filterReducer = createReducer('', {
    [updateFilter]: (_, { payload }) => payload
})

const loading = createReducer(false, {
    [fetchContactRequest]: () => true,
    [fetchContactSuccess]: () => false,
    [fetchContactError]: () => false,
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

