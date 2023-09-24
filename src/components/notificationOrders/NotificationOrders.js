import { useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchOrders } from './ordersSlice';

import preparing from '../resources/img/orders/preparing.png'
import complited from '../resources/img/orders/complited.png'

import './notificationOrders.scss'

const NotificationOrders = () => {
    const { allOrders, ordersLoadingStatus } = useSelector(state => state.orders)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchOrders())
    }, [])

    const ordersLoad = (arr) => {
        const arrSort = [...arr]
        const revArr = arrSort.reverse()

        return revArr.map(({ id, menu, total, status }, i) => {
            return (
                <div key={id} className='showOrders'>
                    <p>Orders #{arr.length - i}</p>
                    <p>{menu[0].name}</p>
                    <p>${total}</p>
                    <p>{status === `preparing` ? `Preparing` : `Complited`}</p>
                </div>
            )
        })
    }

    let element

    if (ordersLoadingStatus === 'loading') {
        element = 'loading'
    } else if (ordersLoadingStatus === 'error') {
        element = <h4 className="text-center mt-5">Error</h4>
    } else {
        if (allOrders.length > 0) {
            element = ordersLoad(allOrders)
        } else if (allOrders.length === 0) {
            console.log(allOrders);
            return <h4 className="not_found">Dishes not found</h4>
        }
    }

    return (
        <div className='notifOrders'>
            <div className='notifOrders__y'>
                <h2>Your orders</h2>
            </div>

            <div className='notifOrders__filter'>
                <p>Customer</p>
                <p>Menu</p>
                <p>Total Payment</p>
                <p>Status</p>
            </div>
            <span className='lineFull'></span>
            {element}
        </div>
    )
}

export default NotificationOrders