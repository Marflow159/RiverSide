import { createSlice, createAsyncThunk, createEntityAdapter, isFulfilled } from "@reduxjs/toolkit";
import { useHttp } from "../../hooks/http.hook";

const ordersAdapter = createEntityAdapter()

const initialState = ordersAdapter.getInitialState({
    allOrders: [],
    ordersLoadingStatus: 'idle'
})

export const fetchOrders = createAsyncThunk(
    `orders/fetchOrders`,
    () => {
        const { request } = useHttp();
        return request("https://riversite-bba63-default-rtdb.firebaseio.com/orders.json")
    }
)

const ordersSlice = createSlice({
    name: 'orders',
    initialState,
    reducers: {

    },

    extraReducers: (builder) => {
        builder
            .addCase(fetchOrders.pending, state => { state.ordersLoadingStatus = 'loading' })
            .addCase(fetchOrders.fulfilled, (state, action) => {
                state.ordersLoadingStatus = 'idle';
                ordersAdapter.setAll(state, action.payload);
                console.log(Object.values(action.payload));
                state.allOrders = Object.values(action.payload);
            })
            .addCase(fetchOrders.rejected, state => { state.ordersLoadingStatus = 'error' })
            .addDefaultCase(() => { })
    }
})

const { actions, reducer } = ordersSlice;

export default reducer;

export const { selectAll } = ordersAdapter.getSelectors(state => state.orders)

export const {
    ordersFetching,
    ordersFetched,
    ordersFetchingError,

} = actions;