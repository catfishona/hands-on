import { createSlice } from "@reduxjs/toolkit";

export const searchSlice = createSlice({
    name: "search",
    initialState: {
        query: "",
    },
    reducers: {
        setQuery: (state, action) => {
           state.query = action.payload;
        }
    }
});

// export action
export const { setQuery } = searchSlice.actions;

// export reducer
export default searchSlice.reducer;