import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { PaginationParams } from "../blogs/types/blog.types";
import { NewsResponse } from "./types/news.types";

export const NewsApi = createApi({
    reducerPath: "newsApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8081/v1/news" }),
    tagTypes: ["News"],
    endpoints: (build) => ({
        getNews: build.query<NewsResponse, PaginationParams>({
            query: ({ page, limit }) => `?page=${page}&limit=${limit}`,
            providesTags: ["News"],
        }),
    }),
})


export const { useGetNewsQuery } = NewsApi;