export default (state, action) => {
    switch(action.type) {
        case 'filter_change':
            return action.payload
        default:
            return state = false
    }
}