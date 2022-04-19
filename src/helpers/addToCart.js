import { ACTIONS } from "../actions/action";

const addToCart = (ball, ballItem, ballItemDispatch) => {

    const found = ballItem.find((item) => item.id === ball.id);

    if (found === undefined) {
        ballItemDispatch({ type: ACTIONS.CHANGE, payload: [...ballItem, { ...ball, quantity: 1 }] })
    } else {
        const index = ballItem.indexOf(found);

        found.quantity += 1;

        let copyBallItem = [...ballItem];

        copyBallItem.splice(index, 1, found);

        ballItemDispatch({ type: ACTIONS.CHANGE, payload: copyBallItem })
    }
}

export default addToCart;