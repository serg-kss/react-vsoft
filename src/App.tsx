import React from 'react';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { BrowserRouter as Router, Route, Link, Routes, } from 'react-router-dom'
import './App.css';
import Login from './components/Auth/Login';
import {useAuthStore} from './stores/useAuthStore'
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import FoldersArea from './components/FoldersArea/FoldersArea';
import FolderContent from './components/FolderContent/FolderContent';



function App() {
  const isLogin = useAuthStore((state) => state.isLogin);
  return (    
    <div className="App">
      <GoogleOAuthProvider clientId={String(process.env.REACT_APP_GOOGLE_CLIENT_ID)}>
        {isLogin ?
          <Router>
            <div>
              <Navbar/>
              <Routes>
                <Route  path='/' element={<FoldersArea/>} />
                <Route  path='/folders/:id' element={<FolderContent/>} />                
              </Routes>
              <Footer/>
            </div></Router>:
          <Login/>
        }                     
      </GoogleOAuthProvider>      
    </div>   
  );
}

export default App;


