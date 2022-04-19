import { ACTIONS } from "../actions/action";

const reduceOrder = (ball, ballItem, ballItemDispatch) => {
    const found = ballItem.find((item) => item.id === ball.id);

    const index = ballItem.indexOf(found);

    found.quantity -= 1;

    let copyBallItem = [...ballItem];

    found.quantity >= 1 ? copyBallItem.splice(index, 1, found) : copyBallItem.splice(index, 1);
    ballItemDispatch({ type: ACTIONS.CHANGE, payload: copyBallItem });
}

export default reduceOrder;