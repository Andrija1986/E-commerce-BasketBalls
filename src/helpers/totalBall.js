const totalBall = (ballItem) => {
    return ballItem.reduce((acc, ball) => acc + (ball.price * ball.quantity), 0)
}

export default totalBall;