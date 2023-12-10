import {useState} from 'react';
import {useParams, useNavigate} from 'react-router-dom';

const BASE_URL = process.env.REACT_APP_GITHUB_URL;





const UserSeach = () => {
  const navigate = useNavigate();
  const {keyword: urlKeyword} = useParams();

  const [keyword, setKeyword] = useState(urlKeyword || "");

  
  




  const submitHandler = (e) => {
    e.preventDefault();

    if(keyword === ''){
      alert('Saisissez un nom de Profil')
    }else{
      setKeyword('');
      navigate(`${BASE_URL}/search/users?q=${keyword.trim()}`)
    }
  }


  return (
    <form 
    onSubmit={submitHandler}
    >
      <div className="form-control">
        <div className="relative">
            <input type="text" className="w-full pr-10 md:pr-40 bg-gray-200 input 
            input-md text-black" 
            placeholder='Rechercher un Profil'
            name= 'q'
            value={keyword || ""}
            onChange={(e) => setKeyword(e.target.value)}
            />
            <button type='submit' className="absolute top-0 right-0 
            rounded-l-none w-16 btn btn-md">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            </button>
        </div>
      </div>
    </form>

  )
}

export default UserSeach