
import { createAction } from '@reduxjs/toolkit';

export const saveContactRequest = createAction('contacts/saveContactRequest');
export const saveContactSuccess = createAction('contacts/saveContactSuccess');
export const saveContactError = createAction('contacts/saveContactError');

export const deleteContactRequest = createAction('contacts/deleteContactRequest');
export const deleteContactSuccess = createAction('contacts/deleteContactSuccess');
export const deleteContactError = createAction('contacts/deleteContactError');


export const updateFilter = createAction('contact/Filter');




