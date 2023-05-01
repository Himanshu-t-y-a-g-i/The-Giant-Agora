import { ADMIN_LOGIN, LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT } from "./actionTypes";
import axios from "axios"

export const loginRequest = () => {
    return { type: LOGIN_REQUEST }
};

export const loginSuccess = (payload) => {
    return { type: LOGIN_SUCCESS, payload }
}

export const loginFailure = () => {
    return { type: LOGIN_FAILURE }
}

export const logOut = () => {
    return { type: LOGOUT }
}

export const adminLogin = (payload) => {
    return { type: ADMIN_LOGIN, payload }
}

export const login = (userData) => (dispatch) => {
    dispatch(loginRequest());
    return axios.post("https://reqres.in/api/login", userData).then((res) => {
        console.log(res.data)
        dispatch(loginSuccess(res.data.token))
    }).catch((err) => {
        dispatch(loginFailure())
    })
}

export const logout = (dispatch) => {
    dispatch(logOut());
}

export const adminLoginf = (data) => dispatch => {
    const adminData = [
        {
            email: "ranjit@gmail.com",
            password: "12345",
            name: "Ranjit Singh",
            image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg"
        }
    ]
    dispatch(loginRequest());
    let isAvail = false;
    let dataToSend = {};
    adminData.map(e => {
        if (data.email === e.email && data.password === e.password) {
            isAvail = true;
            dataToSend = e;
        }
    })
    if (isAvail) {
        dispatch(adminLogin(dataToSend));
        return true;
    } else {
        return false;
    }
}