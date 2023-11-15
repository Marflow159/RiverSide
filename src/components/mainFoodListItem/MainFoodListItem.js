import { useState } from 'react'

import './mainFoodListItem.scss'

const MainFoodListItem = ({ onAddToOrder, name, price, img, i }) => {
    const [activeClazz, setActiveClazz] = useState(`foodListItem`)

    let firstDelay = 0.22 + (i * 0.06);
    let secondDelay = 0.38 + (i * 0.06);
    console.log(activeClazz);
    setTimeout(() => setActiveClazz('foodListItem acttive'), 100)

    return (
        <div className={activeClazz} style={{ transitionDelay: `${firstDelay}s, ${secondDelay}s, 0s` }}>
            <img src={img} alt="" />
            <p>{name}</p>
            <p>$ {price}</p>
            <button onClick={() => onAddToOrder()}>Order now</button>
        </div>
    )
}

export default MainFoodListItem