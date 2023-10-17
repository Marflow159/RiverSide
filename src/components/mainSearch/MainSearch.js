import { useDispatch, useSelector } from 'react-redux'
import { filteredFoodsChanged } from '../mainFoodList/foodsSlice'
import { selectAll } from '../mainFoodList/foodsSlice'
import store from '../../store/store'

import './mainSearch.scss'
import search from '../resources/img/filterImg/search.png'

const MainSearch = () => {
    let date = new Date().toGMTString().slice(0, 16)

    const dispatch = useDispatch();
    // eslint-disable-next-line  
    const { } = useSelector(state => state.foods)
    const foods = selectAll(store.getState());

    const searchFood = (items, term) => {
        if (term.length === 0) {
            dispatch(filteredFoodsChanged(foods))
        } else {
            const food = items.filter(item => {
                
                if (item.name.toLowerCase().indexOf(term.toLowerCase()) > -1) {
                    return item;
                } else {
                    return null;
                }
            })
            dispatch(filteredFoodsChanged(food))
        }
    }

    return (
        <div className="mainSearch">
            <div>
                <div className="wrapper nine">
                    <div>
                        <h1 className="rotate">
                            <span>R</span>
                            <span>I</span>
                            <span>V</span>
                            <span>E</span>
                            <span>R</span>
                            <span>S</span>
                            <span>I</span>
                            <span>T</span>
                            <span>E</span>
                        </h1>
                    </div>
                </div>
                <p>{`${date}`}</p>
            </div>
            <div>
                <img src={search} alt="" />
                <input onChange={(e) => searchFood(foods, e.target.value)} placeholder='Search for food, coffe, etc..' type="text" />
            </div>
        </div>
    )
}
export default MainSearch;