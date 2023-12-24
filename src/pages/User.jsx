import React from 'react';
import { useParams, Link } from 'react-router-dom';
import {FaCodepen, FaStore, FaUserFriends, FaUsers} from 'react-icons/fa';
import Spinner from '../components/Spinner';
import ReposList from '../components/ReposList';


import { 
  useGetprofileQuery,
  // useGetUserReposQuery
 } from '../slices/githubUsersApiSlice'

const User = () => {

  const {login} = useParams();

    const {
      data: user,
      isLoading,
      // refetch,
      // error
    } = useGetprofileQuery(login)


    if(isLoading){
      return <Spinner/>
    }
    
  return (
    <main className="container mx-auto px-3 pb-12">
      <div className="w-full mx-auto lg-10/12">
        <div className="mb-4">
          <Link to='/' className='btn btn-info'>
            Retour
          </Link>
        </div>

        <article className='grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 mb-8 md:gap-8'>
          <aside className="custom-card-img mb-6 md:mb-0">
            <div className="rounded-lg shadow-lg card image-full">
              <figure>
                <img src={user.avatar_url} alt="" />
              </figure>
              <div className="card-body justify-end">
                <h2 className="card-title mb-0">
                  {user.name}
                </h2>
                <p className="flex-grow-0">{user.login}</p>
              </div>
            </div>
          </aside>

          <main className="col-span-2">
            <section className="mb-6">
              <h1 className="text-3xl card-title">
                {user.name}
                <div className="ml-2 mr-1 badge badge-success">{user.type}</div>
                {user.hireable && (
                  <div className='mx-1 badge badge-info'>Employable</div>
                )}
              </h1>
              <p>{user.bio}</p>
              <div className="mt-4 card-action">
                <Link
                to={user.html_url}
                target= '_blank'
                rel='noreferrer'
                className='btn btn-outline'
                >
                  Voir le Profil Github
                </Link>
              </div>
            </section>

            <section className='w-full rounded-lg shadow-md bg-base-100 stats'>
              {user.location && (
                <div className='stat'>
                    <div className='stat-title text-md'>Lieu</div>
                    <div className='text-lg stat-value'>{user.location}</div>
                </div>
              )}
              {user.blog && (
                <div className='stat'>
                    <div className='stat-title text-md'>Blog</div>
                    <div className='text-lg stat-value'>
                        <Link to={user.blog.startsWith('http') ? user.blog : `https://${user.blog}`} target='_blank' rel='noreferrer'>
                            {user.blog}
                        </Link>
                    </div>
                </div>
              )}
               {user.twitter_username && (
                <div className='stat'>
                    <div className='stat-title text-md'>Twitter</div>
                    <div className='text-lg stat-value'>
                        <Link
                        to={`https://twitter.com/${user.twitter_username}`}
                        target='_blank'
                        rel='noreferrer'
                        >
                          {user.twitter_username}
                        </Link>
                    </div>
                </div>
              )}
            </section>
          </main>
        </article>
        
        <article className="w-full py-5 mb-6 rounded-lg shadow-md bg-base-100 stats">
          <main className="grid grid-cols-1 md:grid-cols-4">
            <section className='stat'>
              <div className='stat-figure text-secondary'>
                  <FaUsers className='text-3xl md:text-5xl' />
              </div>
              <div className='stat-title pr-5'>Followers</div>
              <div className='stat-value pr-5 text-3xl md:text-4xl'>
                  {user.followers}
              </div>
            </section>

            <section className='stat'>
              <div className='stat-figure text-secondary'>
                  <FaUserFriends className='text-3xl md:text-5xl' />
              </div>
              <div className='stat-title pr-5'>Following</div>
              <div className='stat-value pr-5 text-3xl md:text-4xl'>
                  {user.following}
              </div>
            </section>

            <section className='stat'>
              <div className='stat-figure text-secondary'>
                  <FaCodepen className='text-3xl md:text-5xl' />
              </div>
              <div className='stat-title pr-5'>Public Repos</div>
              <div className='stat-value pr-5 text-3xl md:text-4xl'>
                  {user.public_repos}
              </div>
            </section>

            <section className='stat'>
              <div className='stat-figure text-secondary'>
                  <FaStore className='text-3xl md:text-5xl' />
              </div>
              <div className='stat-title pr-5'>Public Gists</div>
              <div className='stat-value pr-5 text-3xl md:text-4xl'>
                  {user.public_gists}
              </div>
            </section>
          </main>
        </article>
      </div>
      <ReposList login={user.login}/>
    </main>
  )
}

export default User