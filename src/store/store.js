import { configureStore } from '@reduxjs/toolkit';

import cartUiSlice from './cartUi-Slice';
import cartSlice from './cartSlice';

const store = configureStore({
  reducer: {
    cartUi: cartUiSlice.reducer,
    cart: cartSlice.reducer,
  },
});

export default store;
