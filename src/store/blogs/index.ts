
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BlogData, BlogDataTypes, PaginationParams } from "./types/blog.types";

export const BlogApi = createApi({
    reducerPath: "blogApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8081/v1/blog" }),
    tagTypes: ["Blog"],
    endpoints: (builder) => ({
        getBlogs: builder.query<BlogData, PaginationParams>({
            query: ({ page = 1, limit = 10 }) => `?page=${page}&limit=${limit}`,
            providesTags: ["Blog"],
        }),
    }),
})

export const { useGetBlogsQuery } = BlogApi;

