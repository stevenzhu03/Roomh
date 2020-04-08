const initalState = {
    users: []
}

export default (state = initalState, action) => {
    switch (action.type) {
        case 'FETCH_USERS':
            return {...state, users: action.payload}
        default:
            return state
    }
}