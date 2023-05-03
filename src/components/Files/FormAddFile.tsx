import React, { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useUserStore } from '../../stores/useUserStore';
import axios from 'axios';
import { useFileStore } from '../../stores/useFoldersStore';


type FileParams = {
   id: string;
};

function FormAddFile() {
   //get data from url
   const { id }= useParams<FileParams>();
   const folder_id = id!;
   // const link_to_folder = 'folders/'+id;
   const link_to_folder = '/folders/'+id;

   const email = useUserStore((state) => state.email);
   const file = useFileStore((state) => state.file);
   const setFile = useFileStore((state) => state.setFile)

   //creating new folder, updating folders, go to all folders
   const navigate = useNavigate();
   const [state, setState] = useState({
      fl: '',
   });
     
   const {
      fl,
   } = state;
   // take a file from input and convert to string as Base64
   const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      'ChangeEvent<HTMLInputElement>'
         event.persist();
         setState((prev) => ({
            ...prev,
            [event.target.id]: event.target.value,
         }));
         console.log(event.currentTarget.files?.[0]);
         const reader = new FileReader();
         reader.addEventListener("load", () => {
            // Base64 Data URL 
               console.log(reader.result);
               let fl = reader.result;
               setFile(String(fl))
               });            
         };
   //send file to DB           
   const sendFile = async ()=>{
      await axios.post('http://localhost:5000/files',{
          file: file,
          id_folder: folder_id,
          privacy: true,
          email: email,
          
        }).then((res)=>{
          //setFolders(res.data);
          navigate(link_to_folder);
        })   

   }
  
return (
   <div className="mt-5 flex items-center justify-center"> 
      <div className="bg-white rounded-2xl border shadow-xl p-10 max-w-lg"> 
         <div className="flex flex-col items-center space-y-4">               
               <label className="block mb-2 text-sm font-medium text-gray-900" htmlFor="add_file">Upload file</label>
               <input 
                  type='file'
                  id='fl'
                  name='fl'
                  accept='image/png, image/jpeg'
                  onChange={onChange}
                  value={fl}
                  className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 " aria-describedby="add_file"
               />
               <div className="mt-1 text-sm text-gray-500" id="user_avatar_help">
                  A profile picture is useful to confirm your are logged into your account
               </div>
               <div className="flex items-center mb-4">
                  <input id="checkbox-3" type="checkbox" value="" name='privacy_form' className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"/>
                  <label htmlFor="checkbox-3" className="ml-2 text-sm font-medium text-gray-900">Privat</label>
               </div>
               <button onClick={sendFile} className="mt-5 bg-teal-500 text-white rounded-md font-semibold px-4 py-3 w-full">Add</button>                
            <Link to={link_to_folder} className="mt-5 bg-teal-500 text-white rounded-md font-semibold px-4 py-3 w-full">Back To Folder</Link>
         </div> 
      </div> 
   </div>      
);
}
 
export default FormAddFile;