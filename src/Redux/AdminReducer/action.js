import { DELETEDATA, ERROR, GETDATA, PATCHDATA, POSTDATA, SUCCESS } from "./actionTypes"

export const success = () => {
    return { type: SUCCESS }
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