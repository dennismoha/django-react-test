import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { UserDetails, userDetailsResponse } from "../interfaces";
 import { RootState } from "./store";

 // types/PatientRecord.ts
export interface PatientRecord {
  id: string; // ID of the record
  title: string; // Title of the record (e.g., diagnosis, observation)
  content: string; // Content of the record (e.g., details about diagnosis or treatment)
  created_at: string; // Timestamp when the record was created
}

export const HospitalAPI = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://127.0.0.1:8000/api',
    prepareHeaders: (headers, { getState }) => {
     
      const token = (getState() as RootState).auth.token;
  
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }

      return headers;
    },

  
  }),
  reducerPath: "HospitalApi",
  tagTypes: [
    'patients',
    'patient-history'
  ],
  endpoints: (build) => ({
    getPatientsData: build.query({
      query: () => "/patients",
      providesTags: ["patients"],
    }),
    createPatientData: build.mutation<userDetailsResponse, UserDetails>({
      query: (newUser) => ({
        url: "/user/register/",
        method: "POST",
        body: newUser,
      }),
      invalidatesTags: ["patients"],
    }),
    PatientLoginData: build.mutation<{refresh:string , access:string}, UserDetails>({
      query: (newUser) => ({
        url: "/token/",
        method: "POST",
        body: newUser,
      }),
      invalidatesTags: ["patients"],
    }),
    refreshUserToken: build.mutation<{access: string}, string>({
      query: (token) => ({
        url: "/token/refresh/",
        method: "POST",
        body: token,
      }),
      invalidatesTags: ["patients"],
    }),
    getPatientRecords: build.query<PatientRecord[], void>({
      query: () => '/patient-history/',
      providesTags: ["patient-history"],
    }),

    // Delete a patient record
    deletePatientRecord: build.mutation<void, string>({
      query: (id) => ({
        url: `/api/patient-records/delete/${id}/`,
        method: 'DELETE',
      }),
    }),

    createPatientRecord: build.mutation<void, { title: string; content: string }>({
      query: ({ title, content }) => ({
        url: '/patient-history/',
        method: 'POST',
        body: { title, content },
        providesTags: ["patient-history"],
      }),
    }),
    

  }),
});

export const {
  useGetPatientsDataQuery,
  useCreatePatientDataMutation,
  useRefreshUserTokenMutation,
  usePatientLoginDataMutation,

  useGetPatientRecordsQuery, 
  useDeletePatientRecordMutation, 
  useCreatePatientRecordMutation 

} = HospitalAPI;