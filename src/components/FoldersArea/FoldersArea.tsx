import React, { useEffect } from 'react';
import axios from 'axios';
import { useFoldersStore } from '../../stores/useFoldersStore';
import Folder from './Folder/Folder';
import { Link } from 'react-router-dom';

function FoldersArea() {

    //store folders
    const setFolders = useFoldersStore((state) => state.setFolders);
    const folders = useFoldersStore((state) => state.folders);  

    //get all folders
    useEffect(() => {
      axios.get('http://localhost:5000/folders').then(response => {
          setFolders(response.data);
      })
    }, [])

    //make array of folders
    const folders_components: JSX.Element[] = [];
    for (let index = 0; index < folders.length; index++) {  
      folders_components[index] = <Folder name={
        folders[index].name} 
        created={folders[index].created} 
        id_folder={folders[index].id_folder} 
        changes={folders[index].changes}/>;   
    }
    
    //show arr of folders
    const arr_folders = folders_components.map((folder:JSX.Element):JSX.Element => {return <div>{folder}</div>});

    return (
      <div>
        <div>
          <Link to='/new-folder'>
            <button 
              className='px-4 py-2 mt-5 text-xs font-bold text-white uppercase transition-all duration-150 bg-teal-500 rounded shadow outline-none active:bg-teal-600 hover:shadow-md focus:outline-none ease'>
                New Folder +
            </button>
          </Link>         
        </div>
        <div className='ml-10 mt-10 grid grid-flow-col grid-cols-9 gap-4'>{arr_folders}</div>      
      </div>           
    );
}
 
export default FoldersArea;
 