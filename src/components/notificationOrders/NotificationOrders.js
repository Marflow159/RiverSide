import { useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchOrders } from './ordersSlice';

import NotificationOrderItem from './NotificationOrderItem';
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


        return revArr.map((item, i) => {
            const {id, ...props} = item
            return(
                <NotificationOrderItem key={id} {...props} i={i} arr={arr}/>
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
            return <h4 className="not_found">Dishes not found</h4>
        }
    }

    return (
        <div className='notifOrders'>
            <div className='notifOrders__y'>
                <h2>All orders</h2>
            </div>

            <div className='notifOrders__filter'>
                <p>Customer</p>
                <p>Menu</p>
                <p>Total Payment</p>
                <p>Status</p>
            </div>
            <span className='lineFull'></span>

            <div className='notifOrders__orders'>
                {element}
            </div>

        </div>
    )
}

export default NotificationOrders