import { useDispatch, useSelector } from 'react-redux';
import { activeFoodsChanged } from '../mainFoodList/foodsSlice'

import './mainFilter.scss'

const MainFilter = () => {
    const dispatch = useDispatch();
    const { activeFilter } = useSelector(state => state.foods)

    return (
        <div className='mainFilter'>
            <div className={activeFilter === 'HotDishes' ? 'activeFilters' : ''}>
                <button onClick={() => dispatch(activeFoodsChanged(`HotDishes`))}>HotDishes</button>
                <span></span>
            </div>
            <div className={activeFilter === 'ColdDishes' ? 'activeFilters' : ''}>
                <button onClick={() => dispatch(activeFoodsChanged(`ColdDishes`))}>ColdDishes</button>

                <span></span>
            </div>
            <div className={activeFilter === 'Soup' ? 'activeFilters' : ''}>
                <button onClick={() => dispatch(activeFoodsChanged(`Soup`))}>Soup</button>
                <span></span>
            </div>
            <div className={activeFilter === 'Desserts' ? 'activeFilters' : ''}>
                <button onClick={() => dispatch(activeFoodsChanged(`Desserts`))}>Desserts</button>
                <span></span>
            </div>
        </div>
    )
}

export default MainFilter;  