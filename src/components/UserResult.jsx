import Spinner from './Spinner';
import UserItem from './UserItem';


import {useGetAllUsersQuery} from '../slices/githubUsersApiSlice'



const UserResult = () => {
  

  const {
    data: users, 
    isLoading, 
    // error,
  } = useGetAllUsersQuery();




  if(!isLoading){
    return (
      <div className='grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2'>
        {users.map((user) => (
          <UserItem key={user.id} user={user}/>
        ))}
      </div>
    )
  }else{
    return  <Spinner/>
  }
 
}

export default UserResult;