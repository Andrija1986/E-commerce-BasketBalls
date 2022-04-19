import { ACTIONS } from "../actions/action";

export const loginDataReducer = (loginData, { type, payload }) => {
    switch (type) {
        case ACTIONS.CHANGE:
            return payload
        case ACTIONS.RESET:
            return payload
        default:
            return loginData
    }
}