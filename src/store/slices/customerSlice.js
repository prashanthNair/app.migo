const { createSlice, createAsyncThunk } = require('@reduxjs/toolkit');
import {
  addToCart,
  getCart,
} from '../../../pages/api/products/[brandId]/[id]/index';

const initialState = {
  orders: [],
  cart: [],
  customerInfo: {},
};

export const getOrdersThunk = createAsyncThunk(
  '/oms/customer/orders',
  async () => {
    const response = await getProducts();
    return response;
  }
);

export const postCartThunk = createAsyncThunk(
  '/oms/customer/post-order',
  async (payload) => {
    debugger;
    const customerId = 'C131212'; //localStorage.getItem("customerId");
    const res = await addToCart(customerId, payload);
    return res
  }
);

export const getCartThunk = createAsyncThunk(
  '/oms/customer/get-order',
  async () => {
    debugger;
    const customerId = 'C131212'; //localStorage.getItem("customerId");
    const response = await getCart(customerId);
    return response;
  }
);
const customerSlice = createSlice({
  name: 'customer',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(postCartThunk.fulfilled, (state, action) => {
      state.cart = action.payload;
    });
    builder.addCase(getCartThunk.fulfilled, (state, action) => {
      state.cart = action.payload;
    });
  },
});

export default customerSlice.reducer;
