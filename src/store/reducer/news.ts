import { createSlice } from "@reduxjs/toolkit";


export interface NewsState {
    NewsData: any;
}

const initialState: NewsState = {
    NewsData: []
}

export const NewsSlice = createSlice({
    name: 'News',
    initialState,
    reducers: {
        NewsData: (state, action) => {
            state.NewsData = (action.payload)
        },
    },
});


export const { NewsData } = NewsSlice.actions
export default NewsSlice.reducer;
