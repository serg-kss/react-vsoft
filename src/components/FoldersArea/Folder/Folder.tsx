import React from 'react';
import folder_pic from '../../../assets/folder.png';
import { Link } from 'react-router-dom';

interface IFolderProps{
  name: string;
  created: string;
  id_folder: string;
  changes: [];
}

function Folder(props:IFolderProps) {

  const link = '/folders/'+props.id_folder;
  
  return (    
       <div>
        <Link to={link}>
          <img src={folder_pic} alt="" className=''/>
           <h3 className='text-teal-600 hover:text-teal-900'>{props.name}</h3>
        </Link>
       </div>        
  );
}
 
export default Folder;
 