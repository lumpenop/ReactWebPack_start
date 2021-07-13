export const reducer = (state, action) => {
    switch(action.type){
        case "UP":
            return state + 1
        case "DOWN":
            return state-1
        default:
            return state;
    }
}