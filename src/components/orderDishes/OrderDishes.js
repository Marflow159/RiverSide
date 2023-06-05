import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { orderDishesChanged } from '../mainFoodList/foodsSlice';

import './orderDishes.scss'

const OrderDishes = () => {

    const { orderDishes } = useSelector(state => state.foods);
    const dispatch = useDispatch();
    const allOrders = {
        all: []
    }

    useEffect(() => {
        const allOrders = localStorage.getItem('allOrders')
        const allOrd = JSON.parse(allOrders)
        dispatch(orderDishesChanged(allOrd.all));
        // eslint-disable-next-line  
    }, [])


    const minusPlus = (newId, fun) => {
        console.log(orderDishes);

        let newOrders = []

        orderDishes.map(item => {
            const { id, count, ...props } = item
            if (id === newId) {
                if (fun === "minus") {
                    if (count === 1) {
                        newOrders.pop(item)
                    } else {
                        newOrders.push({
                            id,
                            ...props,
                            count: count - 1
                        })
                    }
                } else if (fun === "plus") {
                    newOrders.push({
                        id,
                        ...props,
                        count: count + 1
                    })
                }
            } else {
                newOrders.push(item)
            }
        })
        allOrders.all = newOrders
        localStorage.setItem('allOrders', JSON.stringify(allOrders))
        dispatch(orderDishesChanged(newOrders))
    }

    const showOrderDishes = (arr) => {
        if (arr.length === 0) {
            return <h5>Not dishes yet</h5>
        } else if (arr.length > 0) {

            return arr.map((item) => {
                const { id, name, price, img, count } = item
                return (
                    <div key={id} className='order'>
                        <div className='order__img'>
                            <img src={img} alt="" />
                        </div>
                        <div className='order__p'>
                            <p>{name.length > 25 ? name.slice(0, 25) + `...` : name}</p>
                            <p>$ {(price * count).toFixed(2)}</p>
                            <div className='order__p__but'>
                                <button type="button" onClick={e => minusPlus(id, `minus`)}>-</button>
                                <p>{count}</p>
                                <button type="button" onClick={e => minusPlus(id, `plus`)}>+</button>
                            </div>

                        </div>
                    </div>
                )
            })
        }
    }

    return (
        <>
            {showOrderDishes(orderDishes)}
        </>
    )
}

export default OrderDishes;