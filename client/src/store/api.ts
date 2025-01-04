import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const HospitalAPI = createApi({
    baseQuery: fetchBaseQuery({
      baseUrl: 'localhost:8000',
    
      // credentials: "include"
    }),
    reducerPath: "HospitalApi",
    tagTypes: [
     'patients'
    ],
    endpoints: (build) => ({
      getCustomerData: build.query({
        query: () => "/patients",
        providesTags: ["patients"],
      }), 
      
    }),
  });
  