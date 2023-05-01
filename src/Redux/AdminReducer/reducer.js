import { DELETEDATA, ERROR, GETDATA, PATCHDATA, POSTDATA, REQUEST } from "./actionTypes";

const initState = {
    data: [],
    isLoading: false,
    isError: false,
    response: ""
}

export const reducer = (state = initState, { type, payload }) => {
    switch (type) {
        case REQUEST:
            return { ...state, isLoading: true }
        case ERROR:
            return { ...state, isError: true, isLoading: false }
        case POSTDATA:
            return { ...state, isError: false, isLoading: false, response: "Product Added" }
        case DELETEDATA:
            return { ...state, isError: false, isLoading: false, response: "Product Deleted" }
        case GETDATA:
            return { ...state, isError: false, isLoading: false, data: payload }
        case PATCHDATA:
            return { ...state, isError: false, isLoading: false, response: "Product Updated" }
        default:
            return state;
    }
}