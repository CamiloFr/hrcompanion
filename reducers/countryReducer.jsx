export default (state, action) => {
    switch(action.type) {
        case 'country_change':
            return action.payload
        default:
            return state = []
    }
}