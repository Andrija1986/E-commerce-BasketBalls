const totalInBasket = (ballItem) => {
    const ballTotal = [...ballItem]

    return ballTotal.map((ball) => ball.quantity * ball.price)
}

export default totalInBasket;