//STEP 2

import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';

import contactsReducer from './contacts/contacts-reducer'

const middleware = [...getDefaultMiddleware(), logger];

const store = configureStore({
    reducer: {
        contacts: contactsReducer,
    },
    middleware,
    devTools: process.env.NODE_ENV === 'development',
})

export default store;

//STEP 1

// import { createStore, combineReducers } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
// import contactsReducer from './contacts/contacts-reducer';


// const rootReducer = combineReducers({
//     contacts: contactsReducer,
// });

// const store = createStore(rootReducer, composeWithDevTools());

// export default store