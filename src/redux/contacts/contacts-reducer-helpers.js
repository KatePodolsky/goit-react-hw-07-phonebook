
const checkingAnExistingContact = (state, action) => {
    if (state.some(({ name }) => name.toLowerCase() === action.payload.name.toLowerCase())) {
        alert(`${action.payload.name} is already in contacts`)
        return state
    }

    if (state.some(({ number }) => number === action.payload.number)) {
        alert(`${action.payload.number} is already in contacts under a different name`)
        return state
    }
    return [action.payload, ...state]
};

export default checkingAnExistingContact;