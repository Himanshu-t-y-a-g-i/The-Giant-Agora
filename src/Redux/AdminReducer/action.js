import axios from "axios"
import { DELETEDATA, ERROR, GETDATA, PATCHDATA, POSTDATA, REQUEST } from "./actionTypes"

export const request = () => {
    return { type: REQUEST }
}

export const failure = () => {
    return { type: ERROR }
}

export const postData = (payload) => {
    return { type: POSTDATA, payload }
}

export const getData = (payload) => {
    return { type: GETDATA, payload }
}

export const patchData = (payload) => {
    return { type: PATCHDATA, payload }
}

export const deleteData = (payload) => {
    return { type: DELETEDATA, payload }
}

export const getDataF = () => dispatch => {
    dispatch(request());
    axios.get(`https://jsonserver-revision.onrender.com/products`).then(res => dispatch(getData(res.data))).catch(e => {
        dispatch(failure());
    })
}

export const deleteDataF = (id) => dispatch => {
    dispatch(request());
    axios.delete(`https://jsonserver-revision.onrender.com/products/${id}`).then(res => { dispatch(deleteData(res.data)); dispatch(getDataF()) }).catch(e => {
        dispatch(failure());
    })
}

export const patchDataF = (id, data) => dispatch => {
    dispatch(request());
    axios.patch(`https://jsonserver-revision.onrender.com/products/${id}`, data).then(res => { dispatch(patchData(res.data)); dispatch(getDataF()) }).catch(e => {
        dispatch(failure());
    })
}

export const postDataF = (data) => dispatch => {
    dispatch(request());
    axios.post(`https://jsonserver-revision.onrender.com/products`, data).then(res => { dispatch(postData(res.data)); dispatch(getDataF()) }).catch(e => {
        dispatch(failure());
    })
}