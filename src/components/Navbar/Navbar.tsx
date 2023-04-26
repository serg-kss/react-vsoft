import React from 'react';
import { useAuthStore } from '../../stores/useAuthStore';
import Button from '../UI/Buttons/Button';
import { useUserStore } from '../../stores/useUserStore';

function Navbar() {
   const logout = useAuthStore((state) => state.logout);
   const name = useUserStore((state) => state.name);
   const family_name = useUserStore((state) => state.family_name);
   const picture = useUserStore((state) => state.picture);
   const email = useUserStore((state) => state.email);
   return (
      <header className="w-full text-gray-700 bg-white shadow-sm body-font">
        <div className="container flex flex-col items-start p-5 mx-auto md:flex-row">         
            <div className="flex items-center mb-2 font-medium text-gray-900 title-font md:mb-0">
               <img src={picture} alt="Avatar user" className="w-10 md:w-16 rounded-full mx-auto"/>
            </div>
            <div className="flex items-center justify-center text-base md:ml-auto mt-1">
                <span className="mr-5 font-medium hover:text-gray-900">{email}</span>
            </div>                    
            <div className="items-center h-full pl-6 ml-6 border-l border-gray-200">
               <span className="mr-5 font-medium hover:text-gray-900">{name} {family_name}</span>
               <Button logout={logout} title={'Logout'} style={'px-4 py-2 text-xs font-bold text-white uppercase transition-all duration-150 bg-teal-500 rounded shadow outline-none active:bg-teal-600 hover:shadow-md focus:outline-none ease'}/>
            </div>
        </div>
    </header>
   );
}
 
export default Navbar;
 