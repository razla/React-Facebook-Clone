export const initialState = {
    user: null,
};

export const actionTypes = {
    SET_USER: "SET_USER",
};

// If you just recived an action, we want to return everything plus the action
const reducer = (state, action) => {
    console.log(action);
    switch(action.type) {
        case actionTypes.SET_USER:
            return {
                ...state,
                user: action.user,
            };

            default:
                return state;
    }
}

export default reducer;