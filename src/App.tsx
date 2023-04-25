import React from 'react';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Login from './components/Login';


function App() {

  return (
    <div className="App">
      <GoogleOAuthProvider clientId={String(process.env.REACT_APP_GOOGLE_CLIENT_ID)}>
        <Login></Login>  
               
      </GoogleOAuthProvider>      
    </div>
  );
}

export default App;
