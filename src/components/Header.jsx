import {FaGithub} from 'react-icons/fa';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

const Header = ({title}) => {
  return (
    <nav className='navbar mb-12 shadow-lg bg-neutral text-white'>
      <div className="container mx-auto">
        <div className="flex-none px-2 mx-2">
          <Link to='/' className='text-lg font-bold align-middle'>
            <FaGithub className='inline pr-2 text-5xl hover:text-gray-500'/>
            {/* <div class="md:hidden">
              {title}
            </div> */}
          </Link>
        </div>
        <div className="flex-1 px-2 mx-2">
          <div className="flex justify-end">
            <Link to='/' className='font-alata md:flex md:space-x-8 hover:border-b hover:border-blue-50 mr-6'>
              Accueil
            </Link>
            <Link to='/about' className='font-alata md:flex md:space-x-8 hover:border-b hover:border-blue-50 mr-6'>
              A Propos
            </Link>
            <Link to='/' className='font-alata md:flex md:space-x-8 hover:border-b hover:border-blue-50'>
              Aide
            </Link>
          </div>
        </div>

      </div>
    </nav>
  )
}

Header.defaultProps = {
  title: 'Github Finder'
}

Header.propTypes = {
  title: PropTypes.string,
}

export default Header;