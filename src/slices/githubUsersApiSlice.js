import {apiSlice} from './apiSlice';
import { BASE_URL } from '../constant';
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;



export const githubUsersApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getAllUsers: builder.query({
            query: () => ({
                url: `${BASE_URL}/users`,
            }),
            keepUnusedDataFor: 5,
            providesTags: ['Users']
        }),
        getUser: builder.query({
            query: (user) => ({
                url: `${BASE_URL}/search/users?q=${user}`
            }),
            headers : {
                'user-agent': 'node.js',
                 Authorization: `token ${GITHUB_TOKEN}`,
            },
            keepUnusedDataFor: 5,
            providesTags: ['Users']
        }),
        getprofile: builder.query({
            query: (login) => ({
                url: `${BASE_URL}/users/${login}`,
            }),
            headers : {
                'user-agent': 'node.js',
                 Authorization: `token ${GITHUB_TOKEN}`,
              },
            keepUnusedDataFor: 5,
            providesTags: ['Users']
        }),
    }),
});

export const {
    useGetAllUsersQuery,
    useGetUserQuery,
    useGetprofileQuery,
} = githubUsersApiSlice