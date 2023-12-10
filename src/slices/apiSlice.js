import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import { BASE_URL } from '../constant';


const baseQuery = fetchBaseQuery({baseUrl: BASE_URL
});

export const apiSlice = createApi({
    baseQuery,
    tagTypes: ['Users'],
    endpoints: (builder) => ({}) 
});







// const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

// const baseQuery = fetchBaseQuery({baseUrl: BASE_URL, 
//     prepareHeaders: (headers, {getState}) => {
//         const states = getState();
//         console.log(' states: ', states);
        
//         if (GITHUB_TOKEN) {
//             headers.set('authorization', `token ${GITHUB_TOKEN}`)
//         }
//         return headers;
//     }

// });