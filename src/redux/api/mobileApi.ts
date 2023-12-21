import { baseApi } from "./baseApi";

export const userApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    myBooking: build.query({
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      query: () => ({
        url: "/mobile/my-team",
        method: "GET",
      }),
      providesTags: ["user", "mobile"],
    }),
    allMobile: build.query({
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      query: (arg: Record<string, any>) => ({
        url: "/mobile",
        method: "GET",
        params: arg,
      }),
      providesTags: ["mobile"],
    }),

    mobileDetails: build.query({
      query: (id: string) => ({
        url: `/mobile/${id}`,
        method: "GET",
      }),
      providesTags: ["mobile"],
    }),
    updateMobile: build.mutation({
      query: (data) => ({
        url: `/mobile/${data.id}`,
        method: "PATCH",
        data,
      }),
      invalidatesTags: ["mobile"],
    }),
    deleteMobile: build.mutation({
      query: (data) => ({
        url: `/mobile/${data.id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["mobile"],
    }),
  }),
});

export const {
  useMyBookingQuery,
  useMobileDetailsQuery,
  useAllMobileQuery,
  useDeleteMobileMutation,
  useUpdateMobileMutation,
} = userApi;
