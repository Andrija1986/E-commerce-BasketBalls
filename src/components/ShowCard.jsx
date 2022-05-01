import {useContext} from 'react'

import MyContext from '../context/MyContext'

const ShowCard = () => {
    const {basketballsData} = useContext(MyContext);

    const ballList = basketballsData.map((ball) => (
        
        <div>
        <img 
        className={ball.class}
        key={ball.id}
        src={ball.image}
        alt=""
        />
        </div>
    ))
    return ballList
}

export default ShowCard