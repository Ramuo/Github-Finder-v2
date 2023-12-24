import {FaGithub} from 'react-icons/fa';
import {Link} from 'react-router-dom';
import avatar from '../images/avatar.png'
import UserSeach from './UserSeach';


const Header = () => {
  return(
    <nav className='navbar mb-12 shadow-lg bg-neutral text-white'>
      <div className="container mx-auto">
        <div className="navbar">
          <div className="flex-1">
            <Link to='/' className='text-lg font-bold align-middle'>
              <FaGithub className='inline pr-2 text-5xl hover:text-gray-500'/>
            </Link>
          </div>
          <div className="flex-none gap-2">
            <UserSeach/>
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full ">
                  <img alt="Profil" src={avatar} />
                </div>
              </label>
              <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-neutral rounded-box w-52">
                <li>
                  <Link  to='/' className="justify-between">
                    Profils
                    <span className="badge">New</span>
                  </Link>
                </li>
                <li>
                  <Link to='#!'>Paramètres</Link>
                </li>
                <li>
                  <Link to='/about'>A Propos</Link>
                </li>
                <li>
                  <Link to='#!'>Deconnexion</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Header;


 





























