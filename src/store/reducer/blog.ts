import { createSlice } from "@reduxjs/toolkit";


export interface BlogState {
    blogsData: any;
}

const initialState: BlogState = {
    blogsData: []
}

export const BlogSlice = createSlice({
    name: 'blogs',
    initialState,
    reducers: {
        blogsData: (state, action) => {
            state.blogsData = (action.payload)
        },
    },
});


export const { blogsData } = BlogSlice.actions
export default BlogSlice.reducer;
