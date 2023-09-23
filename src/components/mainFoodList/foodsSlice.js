import { createSlice, createAsyncThunk, createEntityAdapter } from "@reduxjs/toolkit";
import { useHttp } from "../../hooks/http.hook";

const foodsAdapter = createEntityAdapter()

const initialState = foodsAdapter.getInitialState({
    mainFilteredFoods: [],
    foodsLoadingStatus: 'idle',
    activeFilter: 'HotDishes',
    orderDishes: []
})

export const fetchFoods = createAsyncThunk(
    'foods/fetchFoods',
    () => {
        const { request } = useHttp();
        return request("https://riversite-bba63-default-rtdb.firebaseio.com/foods.json")
    }
)   

const foodsSlice = createSlice({
    name: 'foods',
    initialState,
    reducers: {
        activeFoodsChanged: (state, action) => { state.activeFilter = action.payload },
        filteredFoodsChanged: (state, action) => { state.mainFilteredFoods = action.payload },
        orderDishesChanged: (state, action) =>{state.orderDishes =  action.payload},
    },

    extraReducers: (buider) => {
        buider
            .addCase(fetchFoods.pending, state => { state.foodsLoadingStatus = 'loading' })
            .addCase(fetchFoods.fulfilled, (state, action) => {
                state.foodsLoadingStatus = 'idle';
                foodsAdapter.setAll(state, action.payload);

                state.mainFilteredFoods = action.payload;
            })
            .addCase(fetchFoods.rejected, state => { state.foodsLoadingStatus = 'error' })
            .addDefaultCase(() => { })
    }
})

const { actions, reducer } = foodsSlice;

export default reducer;

export const { selectAll } = foodsAdapter.getSelectors(state => state.foods)

export const {
    foodsFetching,
    foodsFetched,
    foodsFetchingError,
    activeFoodsChanged,
    filteredFoodsChanged,
    orderDishesChanged,

} = actions;
