import { Link } from 'react-router-dom';
import {FaEye, FaInfo, FaLink, FaStar, FaUtensils} from 'react-icons/fa';
import Loader from './Spinner';

import {useGetUserReposQuery} from '../slices/githubUsersApiSlice'


const ReposList = ({login}) => {
    const {
        data: repos,
        isLoading,
        error
    } = useGetUserReposQuery(login)
 
    return (
    <div className='rounded-lg shadow-lg card bg-base-100'>
        <div className="card-body">
            <h2 className="text-3xl my-4 font-bold card-title">
                Les 10 derniers Repositories
            </h2>

            {isLoading ? (
                <Loader/>
            ): error ? (
                <>
                    <h2 className="text-center text-3xl text-red-600">
                        {error?.data?.message || error.error}
                    </h2>
                    <Link to='/profile' lassName='btn btn-info'>
                        Créer un profil
                    </Link>
                </>
            ) :(
                <>
                    {repos.map((repo)=>(
                        <div key={repo.id} repo={repo} className='mb-2 rounded-md card bg-gray-800 hover:bg-gray-900'>
                            <div className="card-body">
                                <h3 className="mb-2 text-xl font-semibold">
                                    <Link to={repo.html_url}>
                                        <FaLink className='inline mr-1'/>{repo.name}
                                    </Link>
                                </h3>
                                <p className="mb-3">{repo.description}</p>
                                <div>
                                    <div className="mr-2 badge badge-info  badge-lg">
                                        <FaEye className='mr-2'/>{repo.watchers_count}
                                    </div>
                                    <div className="mr-2 badge badge-success badge-lg">
                                        <FaStar className='mr-2'/>{repo.stargazers_count}
                                    </div>
                                    <div className="mr-2 badge badge-error badge-lg">
                                        <FaInfo className='mr-2'/>{repo.open_issues}
                                    </div>
                                    <div className="mr-2 badge badge-warning badge-lg">
                                        <FaUtensils className='mr-2'/>{repo.forks}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </>
            ) 
            }
            
        </div>
    </div>
    );
};

export default ReposList