import { ACTIONS } from "../actions/action";

const removeBall = (ball, ballItem, ballItemDispatch) => {
    const found = ballItem.find((item) => item.id === ball.id);

    const index = ballItem.indexOf(found);

    let copyBallItem = [...ballItem];

    copyBallItem.splice(index, 1);

    ballItemDispatch({ type: ACTIONS.CHANGE, payload: copyBallItem });
}

export default removeBall;