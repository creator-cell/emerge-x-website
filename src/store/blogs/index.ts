
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BlogData, BlogDataResponse, BlogDataTypes, PaginationParams } from "./types/blog.types";

export const BlogApi = createApi({
    reducerPath: "blogApi",
    baseQuery: fetchBaseQuery({ baseUrl: "https://emerge-x-backend-c2kvq.ondigitalocean.app/v1/blog" }),
    tagTypes: ["Blog"],
    endpoints: (builder) => ({
        getBlogs: builder.query<BlogData, PaginationParams>({
            query: ({ page = 1, limit = 10 }) => `?page=${page}&limit=${limit}`,
            providesTags: ["Blog"],
        }),
        getSingleBlog: builder.query<BlogDataResponse, string>({
            query: (id) => `/${id}`,
            providesTags: ["Blog"],
        }),
    }),
})

export const { useGetBlogsQuery, useGetSingleBlogQuery } = BlogApi;

