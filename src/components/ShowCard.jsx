import {useContext} from 'react'

import MyContext from '../context/MyContext'

const ShowCard = () => {
    const {basketballsData} = useContext(MyContext);

    const ballList = basketballsData.map((ball) => (
        <img 
        className={ball.class}
        key={ball.id}
        src={ball.image}
        alt=""
        />
    ))
    return <section className='grid'>{ballList}</section>
}

export default ShowCard