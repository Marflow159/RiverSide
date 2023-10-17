import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFoods, orderDishesChanged } from './foodsSlice';

import MainFoodListItem from '../mainFoodListItem/MainFoodListItem';

import './mainFoodList.scss'
import SkeletonCard from '../skeleton/Skeleton';

const MainFoodList = () => {
    const { activeFilter, mainFilteredFoods, foodsLoadingStatus, orderDishes } = useSelector(state => state.foods)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchFoods())
        // eslint-disable-next-line  
    }, [])

    const filteredFoods = useMemo(() => {
        const filteredFoods = mainFilteredFoods.slice();
        if (activeFilter === "all") {
            return filteredFoods;
        } else {
            return filteredFoods.filter(item => item.type === activeFilter)
        }
    }, [mainFilteredFoods, activeFilter])

    const onAddToOrder = (addId, addProps) => {

        const allOrders = {
            all: []
        }
        let newOrders = [];
        let numberOfOrders = 0;
        
        if (orderDishes.length === 0) {
            newOrders.push({
                id: addId,
                ...addProps
            })

            allOrders.all = newOrders
            localStorage.setItem('allOrders', JSON.stringify(allOrders))
            dispatch(orderDishesChanged(newOrders))
        } else {
            orderDishes.map((item, i) => {
                const { id, count, ...props } = item
                if (id === addId) {
                    newOrders.push({
                        id,
                        ...props,
                        count: count + 1
                    })
                } else {
                    newOrders.push(item)
                    numberOfOrders += 1
                }
            })
            if (numberOfOrders === orderDishes.length) {
                newOrders.push({
                    id: addId,
                    ...addProps
                })
            }
            allOrders.all = newOrders
            localStorage.setItem('allOrders', JSON.stringify(allOrders))
            dispatch(orderDishesChanged(newOrders))

        }
    }

    const renderFoodsList = (arr) => {
        return arr.map((item, i) => {
            const { id, ...props } = item
            // console.log(i);
            return (
                <MainFoodListItem onAddToOrder={() => onAddToOrder(id, props)} key={id} {...props} i={i}  />
            )
        })
    }

    let element;

    if (foodsLoadingStatus === 'loading') {
        element = <SkeletonCard cards={12} />
    } else if (foodsLoadingStatus === 'error') {
        element = <h4 className="text-center mt-5">Error</h4>
    } else {
        if (filteredFoods.length > 0) {
            element = renderFoodsList(filteredFoods)
        } else if (filteredFoods.length === 0) {
            return <h4 className="not_found">Dishes not found</h4>
        }
    }

    return (
        <div className='mainFoodList'>
            <div>
                <h2>Choose Dishes</h2>
            </div>

            <div className='foodList'>
                {element}
            </div>
        </div>
    )
}

export default MainFoodList