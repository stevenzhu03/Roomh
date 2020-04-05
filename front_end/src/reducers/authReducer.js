const initialState = {
    currentUser: null
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'SIGN_IN':
            return {...state, currentUser: action.payload}
        case 'SIGN_OUT':
            return {...state, currentUser: null}
        default:
            return state
    }
}