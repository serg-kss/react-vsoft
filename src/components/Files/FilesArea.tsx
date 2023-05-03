import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useFileStore } from '../../stores/useFoldersStore';


type FolderParams = {
   id: string;
};

function FilesArea() {
   //get data from url
   const { id }= useParams<FolderParams>();
   const folder_id = id;

   //files store
   const setFiles = useFileStore((state) => state.setFiles);
   const files = useFileStore((state) => state.files);  
  
   //get files for folder
   useEffect(() => {
      axios.get('http://localhost:5000/files/folder/'+folder_id).then(response => {
         setFiles(response.data);
         console.log(files);
      })
   }, [])

   //files in folder
   const files_arr = files.map((el:JSX.Element)=>{
      return <li>
               <span
                  className="font-semibold text-gray-900"
               >File</span>
             </li>
   })

return (
   <div className='mt-10'>      
      <h2 className="mb-2 text-lg font-semibold text-gray-900">Files list:</h2>
      <ol className="max-w-md space-y-1 text-gray-500 list-decimal list-inside">
         {files_arr}
      </ol>    
   </div>      
);
}
 
export default FilesArea;