import { ACTIONS } from "../actions/action";

export const ballItemReducer = (ballItem, { type, payload }) => {
    switch (type) {
        case ACTIONS.SET:
            return payload
        case ACTIONS.CHANGE:
            return payload
        case ACTIONS.RESET:
            return payload
        default:
            return ballItem;
    }
}