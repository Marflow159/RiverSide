import { useState } from 'react'

const NotificationOrderItem = ({menu, total, status, i, arr}) => {
    const [activeClazzz, setActiveClazzz] = useState(`showOrders`)

    let firstDelay = 0.22 + (i * 0.06);
    let secondDelay = 0.38 + (i * 0.06);
    setTimeout(() => setActiveClazzz('showOrders acttive'), 100)
    return (
        <div className={activeClazzz} style={{ transitionDelay: `${firstDelay}s, ${secondDelay}s, 0s` }}>
            <p>Orders #{arr.length - i}</p>
            <p>{menu[0].name}</p>
            <p>${total}</p>
            <p className={status === `preparing` ? `Preparing` : `Complited`}>{status === `preparing` ? `Preparing` : `Complited`}</p>
        </div>
    )
}

export default NotificationOrderItem