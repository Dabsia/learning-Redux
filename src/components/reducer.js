const reducer = (state = 0, action) => {
    switch (action.type){
        case 'Increase':
            return state + 1
        case 'Decrease':
            return state -1
        case 'IncreaseBynum':
            return state + action.payload
        default:
            return state
    }
}

export default reducer