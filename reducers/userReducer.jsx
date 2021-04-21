// import data from './usuario.json'
// export default () => data
export default (state, action) => {
    switch(action.type) {
        case 'user_change':
            return action.payload
        default:
            return state = ''
    }
}