import { createSlice } from "@reduxjs/toolkit";


export interface NewsState {
    newsData: any;
}

const initialState: NewsState = {
    newsData: []
}

export const NewsSlice = createSlice({
    name: 'News',
    initialState,
    reducers: {
        newsData: (state, action) => {
            state.newsData = (action.payload)
        },
    },
});


export const { newsData } = NewsSlice.actions
export default NewsSlice.reducer;
