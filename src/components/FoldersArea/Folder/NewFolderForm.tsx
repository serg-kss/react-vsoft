import axios from 'axios';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useUserStore } from '../../../stores/useUserStore';
import { useFoldersStore } from '../../../stores/useFoldersStore';


function NewFolderForm() {

    //store folders
    const setFolders = useFoldersStore((state) => state.setFolders);
    const folders = useFoldersStore((state) => state.folders);

    //data for new folder
    const new_folder_email = useUserStore((state) => state.email);
    let new_folder_id = '';
    let arr: number[] = [];
    for (let index = 0; index < folders.length; index++) {
      arr[index] = parseInt(folders[index].id_folder);      
    }
    new_folder_id = String(Math.max.apply(null, arr) + 1);

    //creating new folder, updating folders, go to all folders
    const navigate = useNavigate();
    const creating_new_f =async (e: React.SyntheticEvent) => {
      e.preventDefault();
      const target = e.target as typeof e.target & {
        new_folder_name: { value: string };       
      };
      const name = target.new_folder_name.value;
      const email_form = new_folder_email;

      await axios.post('http://localhost:5000/folders',{
        name: name,
        created: email_form,
        id_folder: new_folder_id,
        changes: [email_form]
      }).then((res)=>{
        setFolders(res.data);
        navigate('/');
      })     
    }
  
  return (    
   <div className="mt-5 flex items-center justify-center">   
	    <div className="bg-white rounded-2xl border shadow-xl p-10 max-w-lg">
        <div className="flex flex-col items-center space-y-4">
	        <h1 className="font-bold text-2xl text-gray-700 w-4/6 text-center">Create New Folder</h1>
          <p className="text-sm text-gray-500 text-center w-5/6">Please write a new folder name</p>
          <form onSubmit={creating_new_f}>
            <input type="text" name='new_folder_name' placeholder="folder name" className="border-2 rounded-lg w-full h-12 px-4"/>
            <button className="mt-5 bg-teal-500 text-white rounded-md font-semibold px-4 py-3 w-full">Create</button>
          </form>
          <Link to='/' className="mt-5 bg-teal-500 text-white rounded-md font-semibold px-4 py-3 w-full">Back</Link>
        </div>	
      </div>	
   </div>       
  );
}
 
export default NewFolderForm;
 