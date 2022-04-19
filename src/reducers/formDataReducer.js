import { ACTIONS } from "../actions/action";

export const formDataReducer = (formData, { type, payload }) => {
    switch (type) {
        case ACTIONS.GET:
            return payload
        case ACTIONS.RESET:
            return payload
        default:
            return formData
    }
}