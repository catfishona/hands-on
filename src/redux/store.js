import { configureStore } from "@reduxjs/toolkit";
import searchReducer from './slices';

export default configureStore({
    reducer: {
        search: searchReducer,
    }
});