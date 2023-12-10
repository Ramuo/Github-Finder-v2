import React from 'react'


import { useGetprofileQuery } from '../slices/githubUsersApiSlice'

const User = () => {

    const {data: user} = useGetprofileQuery()
    console.log(user)
  return (
    <main className="container mx-auto px-3 pb-12">

        <h1>hello</h1>
    </main>
  )
}

export default User