import React from 'react';
import { Link } from 'react-router-dom';
import { useUserStore } from '../../../stores/useUserStore';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useFoldersStore } from '../../../stores/useFoldersStore';


interface ITableInfoProps{
   name: string;
   created: string;
   id_folder: string;
   changes: [];
 }

function TableInfo(props: ITableInfoProps) {
   //store
   const user = useUserStore((state) => state.email)
   const setFolders = useFoldersStore((state) => state.setFolders);
   const navigate = useNavigate();
   const link = '/update-folder/'+ props.id_folder;

   //delete folder from db mongo, go to all folder
   const deleting = (() => {
    axios.delete('http://localhost:5000/folders/delete/'+props.id_folder).then((respone)=>{
      setFolders(respone.data)
      navigate('/');
    })
   });
  
        
return (    
   
<div className="overflow-hidden rounded-lg border border-gray-200 shadow-md m-5">
  <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
    <thead className="bg-gray-50">
      <tr>
        <th scope="col" className="px-6 py-4 font-medium text-gray-900"></th>
        <th scope="col" className="px-6 py-4 font-medium text-gray-900">Folder Creator</th>
        <th scope="col" className="px-6 py-4 font-medium text-gray-900">State</th>
        <th scope="col" className="px-6 py-4 font-medium text-gray-900">Folder Name</th>
        <th scope="col" className="px-6 py-4 font-medium text-gray-900 text-end">Actions</th>
      </tr>
    </thead>
    <tbody className="divide-y divide-gray-100 border-t border-gray-100">
      <tr className="hover:bg-gray-50">
        <td className="px-6 py-4">
          <Link to='/' className='px-4 py-2 text-xs font-bold text-white uppercase transition-all duration-150 bg-teal-500 rounded shadow outline-none active:bg-teal-600 hover:shadow-md focus:outline-none ease'>
            BACK
          </Link>         
        </td>
        <th className="flex gap-3 px-6 py-4 font-normal text-gray-900">
          <div className="text-sm">
            <div className="text-gray-400">{props.created}</div>
          </div>
        </th>
        <td className="px-6 py-4">
          <span
            className="inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs font-semibold text-green-600">
              <span className="h-1.5 w-1.5 rounded-full bg-green-600"></span>
            {user==props.created ? 'Active' : 'Offline'}
          </span>
        </td>
        <td className="px-6 py-4">{props.name}</td>
        <td className="px-6 py-4">
          <div className="flex justify-end gap-4">
            <a x-data="{ tooltip: 'Delete' }" href="#" onClick={()=>{
              const result = window.confirm("Delete?");
              if(result){
                deleting();
              }
            }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="h-6 w-6"
                x-tooltip="tooltip"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                />
              </svg>
            </a>
            <Link x-data="{ tooltip: 'Edite' }" to={link}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="h-6 w-6"
                x-tooltip="tooltip"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                />
              </svg>
            </Link>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</div>       
);
}
 
export default TableInfo;