import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import {AuthContext} from './../Auth/Auth';
import fb from '../../firebase';

const Header: React.FC = () =>{

  const currentUser: Partial<fb.User> | undefined | null = useContext(AuthContext);

  return(
    <header>
      {!!currentUser ? 
        <div>
          <p>{currentUser.phoneNumber}</p>
          <button onClick={() => fb.auth().signOut()}>
            Выйти
          </button>
        </div> : 
        <Link to="/login">
          <button>
            Войти
          </button>
        </Link>
      }
    </header>
  );
}

export default Header;