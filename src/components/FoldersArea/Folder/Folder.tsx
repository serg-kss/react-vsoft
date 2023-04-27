import React from 'react';
import folder_pic from '../../../assets/folder.png'

interface IFolderProps{
  name: string;
  created: string;
  id_folder: Number;
  changes: [];
}

function Folder(props:IFolderProps) {
  
  return (    
       <div>
         <img src={folder_pic} alt="" className=''/>
         <h3 className='text-teal-600 hover:text-teal-900'>{props.name}</h3>
       </div>        
  );
}
 
export default Folder;
 