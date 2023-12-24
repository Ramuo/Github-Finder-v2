import {useState} from 'react';
import Spinner from './Spinner';

import { useGetUserQuery } from '../slices/githubUsersApiSlice';






const UserSeach = ({user}) => {
  const [keyword, setKeyword] = useState('');

  const {
    data: users,
    isLoading,
    error
  } = useGetUserQuery(user);
  
  console.log(users)
  

  const submitHandler = (e) => {
    e.preventDefault();

    if(keyword === ''){
      alert('Saisissez un nom de Profil')
    }else{
      
      setKeyword('');
    }
  }


  return (
    <>
    {isLoading ? (
      <Spinner/>
    ): error ? (
      <>
        <h2 className="text-center text-3xl text-red-600">
            {error?.data?.message || error.error}
        </h2>
      </>
    ): (
      <>
        <form onSubmit={submitHandler}>
            <div className="form-control">
              <div className="relative">
                  <input type="text" className="w-full pr-10 md:pr-40 bg-gray-200 input 
                  input-md text-black" 
                  placeholder='Trouver un Profil...'
                  name= 'q'
                  value={keyword}
                  onChange={(e) => setKeyword(e.target.value)}
                  />
                  <button type='submit' className="absolute top-0 right-0 
                  rounded-l-none w-16 btn btn-md">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                  </button>
              </div>
            </div>
        </form>
      </>
    )
    }
    
    </>

  )
}

export default UserSeach