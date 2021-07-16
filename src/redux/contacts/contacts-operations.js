import axios from 'axios';
import {
    saveContactRequest,
    saveContactSuccess,
    saveContactError,
    deleteContactRequest,
    deleteContactSuccess,
    deleteContactError
} from './contacts-actions';

axios.defaults.baseURL = 'http://localhost:4040/';

const saveContact = ({ name, number }) => dispatch => {
    const contact = { name, number };

    dispatch(saveContactRequest());

    axios
        .post('/contacts', contact)
        .then(({ data }) =>
            dispatch(saveContactSuccess(data)))
        .catch(error =>
            dispatch(saveContactError(error)));

}

const deleteContact = id => dispatch => {

    dispatch(deleteContactRequest());
    axios
        .delete(`/contacts/${id}`)
        .then(() => dispatch(deleteContactSuccess(id)))
        .catch(error =>
            dispatch(deleteContactError(error)))

}

export default { saveContact, deleteContact }