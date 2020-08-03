import React, {useEffect, useState} from 'react';
import fb from '../../firebase';

interface AuthProps {
  children: React.ReactNode;
}

export const AuthContext = React.createContext<Partial<fb.User | undefined | null>>(null);

export const AuthProvider: React.FC<AuthProps> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<Partial<fb.User | undefined | null>>(null);

  useEffect(()=>{
    fb.app().auth().onAuthStateChanged((user)=>{
      setCurrentUser(user)
  });
  }, []);

  return(
    <AuthContext.Provider
      value = {currentUser}
    >
      {children}
    </AuthContext.Provider>
  )
}