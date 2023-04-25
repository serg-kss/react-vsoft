import React from 'react';
import { GoogleLogin } from '@react-oauth/google';
import axios from 'axios';


function Login() {

   return (
      <div className="flex flex-wrap min-h-screen w-full content-center justify-center bg-gray-200 py-10">
         <div className="flex shadow-md">
            <div className="flex flex-wrap content-center justify-center rounded-l-md bg-white" style={{width:"24rem", height: "32rem"}}>
               <div className="w-72">
                  <h1 className="text-xl font-semibold">Please Login, using Google</h1>
                  <div className="mb-4 mt-4 ms-9">
                     <GoogleLogin onSuccess={async credentialResponse => {
                        const res = await axios.post('http://localhost:5000/users/login',{
                           token: credentialResponse.credential
                        })

                        const data = res.data

                        if(data.email_verified){
                           console.log("Fuck Yeah")
                        }else console.log("Fuck Nooo")

                     }} onError={() => {
                        console.log('Login Failed');
                     }}/>
                  </div>
                  <div className="text-center">
                     <span className="text-xs text-gray-400 font-semibold">Don't have account? </span>
                     <a href="https://www.google.com.ua/" className="text-xs font-semibold text-purple-700">Go to Google</a>
                  </div>
               </div>
            </div>   
            <div className="flex flex-wrap content-center justify-center rounded-r-md" style={{width:"24rem", height: "32rem"}}>
               <img className="w-full h-full bg-center bg-no-repeat bg-cover rounded-r-md" src="https://i.imgur.com/9l1A4OS.jpeg"/>
            </div>
         </div>       
      </div>
   );
}
 
export default Login;
 