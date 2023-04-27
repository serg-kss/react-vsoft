import React from 'react';
import { useParams } from 'react-router-dom';
import { IF, useFoldersStore } from '../../stores/useFoldersStore';
import TableInfo from './TableInfo/TableInfo';

type FolderParams = {
   id: string;
};

function FolderContent() {
   const folders = useFoldersStore((state) => state.folders);
   const { id }= useParams<FolderParams>();
   const routing_id: string = id!;

   const folder_info: IF={
      name: '',
      created: '',
      id_folder: '',
      changes: []
   }
  
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
  </div>       
);
}
 
export default FolderContent;