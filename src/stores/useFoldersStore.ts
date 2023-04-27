import { create } from 'zustand'

export interface IF{

      name: string;
      created: string;
      id_folder: string;
      changes: [];   
}

interface IFolders{
   folders: IF[];
   setFolders (array:[]): void;
}



export const useFoldersStore = create<IFolders>((set) => ({
   folders: [],  
   setFolders: (array:[]) => set({ folders: array }),
   
}))