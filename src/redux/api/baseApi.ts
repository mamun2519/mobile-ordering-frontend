// Need to use the React-specific entry point to import createApi

import { createApi } from "@reduxjs/toolkit/query/react";

import { axiosBaseQuery } from "../../axios/axiosBaseQuery";
import { URL } from "../../constant/common";

// Define a service using a base URL and expected endpoints
export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: axiosBaseQuery({ baseUrl: URL }),
  endpoints: () => ({}),
  tagTypes: ["user", "mobile"],
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
