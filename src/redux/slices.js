import { createSlice } from "@reduxjs/toolkit";

export const searchSlice = createSlice({
    name: "search",
    initialState: {
        query: "",
    },
    reducers: {
        searchAction: (state, action) => {
           state.query = action.payload;
        }
    }
});

// export action
export const { searchQuery, searchAction } = searchSlice.actions;

// export recucer
export default searchSlice.reducer;