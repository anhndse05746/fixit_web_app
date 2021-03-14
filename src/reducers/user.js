
const initialState = {
    isLogedIn: false,
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case "LOGIN":
            state = action.payload
            return state
        default:
            return state;
    }
}

export default userReducer;