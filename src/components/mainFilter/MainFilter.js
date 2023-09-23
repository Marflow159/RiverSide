import { useDispatch, useSelector } from 'react-redux';
import { activeFoodsChanged } from '../mainFoodList/foodsSlice'

import './mainFilter.scss'

const MainFilter = () => {
    const dispatch = useDispatch();
    const { activeFilter } = useSelector(state => state.foods)

    const lineFilter = () => {
        if (activeFilter === 'HotDishes') {
            return 'hot-dishes'
        } else if (activeFilter === 'ColdDishes') {
            return 'cold-dishes'
        } else if (activeFilter === 'Soup') {
            return 'soup-dishes'
        } else if (activeFilter === 'Desserts') {
            return 'desserts-dishes'
        }
    }

    return (
        <>
            <div className='mainFilter'>
                <span  className={lineFilter()}></span>
                <div className={activeFilter === 'HotDishes' ? 'activeFilters' : ''}>
                    <button onClick={() => dispatch(activeFoodsChanged(`HotDishes`))}>HotDishes</button>
                </div>
                <div className={activeFilter === 'ColdDishes' ? 'activeFilters' : ''}>
                    <button onClick={() => dispatch(activeFoodsChanged(`ColdDishes`))}>ColdDishes</button>
                </div>
                <div className={activeFilter === 'Soup' ? 'activeFilters' : ''}>
                    <button onClick={() => dispatch(activeFoodsChanged(`Soup`))}>Soup</button>
                </div>
                <div className={activeFilter === 'Desserts' ? 'activeFilters' : ''}>
                    <button onClick={() => dispatch(activeFoodsChanged(`Desserts`))}>Desserts</button>
                </div>
            </div>
        </>

    )
}

export default MainFilter;  