import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { IF, useFoldersStore } from '../../stores/useFoldersStore';
import TableInfo from './TableInfo/TableInfo';
import FilesArea from '../Files/FilesArea';

type FolderParams = {
   id: string;
};

function FolderContent() {
   //store
   const folders = useFoldersStore((state) => state.folders);

   //get data from url
   const { id }= useParams<FolderParams>();
   const routing_id: string = id!;

   //link to form add file
   const link_add_file = '/add-file/' + id;

   const folder_info: IF={
      name: '',
      created: '',
      id_folder: '',
      changes: []
   }
   
   // data for props
   for (let index = 0; index < folders.length; index++) {
      if (folders[index].id_folder == routing_id) {
        folder_info.name = folders[index].name;
        folder_info.created = folders[index].created;
        folder_info.id_folder = folders[index].id_folder;
        folder_info.changes = folders[index].changes;
      }  
  }
 
return (    
   
  <div >
    <TableInfo name={folder_info.name} created={folder_info.created} id_folder={folder_info.id_folder} changes={folder_info.changes}/>
    <Link to={link_add_file} className='px-4 py-2 mt-5 text-xs font-bold text-white uppercase transition-all duration-150 bg-teal-500 rounded shadow outline-none active:bg-teal-600 hover:shadow-md focus:outline-none ease'>            
          Add New File +     
    </Link>
    <div>
      <FilesArea/>
    </div>
  </div>       
);
}
 
export default FolderContent;