import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Login from '../Login/Login';
import Home from '../Home/Home';
import { AuthProvider } from '../Auth/Auth';

const App: React.FC = () => {
  return(
    <AuthProvider>
      <Router>
        <>
          <Route exact path="/" component={Home}/>
          <Route exact path="/login" component={Login}/>
        </>
      </Router>
    </AuthProvider>
  )
}

export default App;