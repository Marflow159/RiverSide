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
        return request("http://localhost:3001/orders")
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
                state.allOrders = action.payload;
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