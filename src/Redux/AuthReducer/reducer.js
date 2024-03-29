import { ADMIN_LOGIN, LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT } from "./actionTypes"

const initialState = {
    isLoading: false,
    isAuth: false,
    token: "",
    isError: false,
    admin: {}
}

export const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case LOGIN_REQUEST:
            return { ...state, isLoading: true }
        case LOGIN_SUCCESS:
            return { ...state, isLoading: false, token: payload, isAuth: true }
        case LOGIN_FAILURE:
            return { ...state, isLoading: false, isError: true }
        case ADMIN_LOGIN:
            return { ...state, isLoading: false, admin: payload, isAuth: true }
        case LOGOUT:
            return { initialState }
        default:
            return state
    }
}