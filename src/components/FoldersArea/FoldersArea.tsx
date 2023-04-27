import React, { useEffect } from 'react';
import axios from 'axios';
import { useFoldersStore } from '../../stores/useFoldersStore';
import Folder from './Folder/Folder';

function FoldersArea() {

    const setFolders = useFoldersStore((state) => state.setFolders);
    const folders = useFoldersStore((state) => state.folders);

    useEffect(() => {
      axios.get('http://localhost:5000/folders').then(response => {
          setFolders(response.data);
      })
    }, [])

    const folders_components: JSX.Element[] = [];
    for (let index = 0; index < folders.length; index++) {  
      folders_components[index] = <Folder name={
        folders[index].name} 
        created={folders[index].created} 
        id_folder={folders[index].id_folder} 
        changes={folders[index].changes}/>;   
    }
    
    const arr_folders = folders_components.map((folder:JSX.Element):JSX.Element => {return <div>{folder}</div>});

    return (
        <div className='ml-10 mt-10 grid grid-flow-col grid-cols-9 gap-4'>{arr_folders}</div>    
    );
}
 
export default FoldersArea;
 