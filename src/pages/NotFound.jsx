import {Link} from 'react-router-dom';
import {FaHome} from 'react-icons/fa';

const NotFound = () => {
  return (
    <main className="container mx-auto px-3 pb-12">
        <div className="hero">
          <div className="text-center hero-content">
            <div className="max-x-lg">
              <h1 className="text-8xl font-bold mb-8">Ooops!</h1>
              <p className="text-5xl mb-8">404 - Page Introuvable!</p>
                <Link to='/' className='btn btn-primary btn-lg'>
                    <FaHome className='mr-2'/>
                    Retour
                </Link>
            </div>
          </div>
        </div>
    </main>
  )
}

export default NotFound;