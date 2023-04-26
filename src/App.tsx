import React from 'react';
import { GoogleOAuthProvider } from '@react-oauth/google';
import './App.css';
import Login from './components/Auth/Login';
import {useAuthStore} from './stores/useAuthStore'
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';


function App() {
  const isLogin = useAuthStore((state) => state.isLogin)
  console.log(isLogin)
  return (
    <div className="App">
      <GoogleOAuthProvider clientId={String(process.env.REACT_APP_GOOGLE_CLIENT_ID)}>
        {isLogin ?
          <div>
            <Navbar/>
            <Footer/>
          </div>:
          <Login/>
        }                     
      </GoogleOAuthProvider>      
    </div>
  );
}

export default App;


