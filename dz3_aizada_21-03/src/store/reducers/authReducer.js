const initialState = {
    username: '',
    password: '',
    isAuth: false,
    isError: false,
}

export const actions = {
    NAME: "NAME",
    PASS: "PASS",
    ERROR: "ERRPR",
    AUTH: "AUTH",
}

export const authReducer = (state = initialState, action) => {
    switch ( action.type) {
        case action.NAME:
            return{...state, username: action.payload}
        case action.PASS:
            return{...state, password: action.payload}
        case action.ERROR:
            return{...state, isError: action.payload}  
        case action.AUTH:
            return{...state, isAuth: action.payload}  
        default:
            return state    
    }
}