const initialState = {
    currentUser: null
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'SET_CURRENT_USER':
            return {...state, currentUser: action.payload.user}
        case 'AUTO_LOGIN':
            return {...state, currentUser: action.payload}
        case 'LOG_OUT':
            return {...state, currentUser: null}
        default:
            return state
    }
}

