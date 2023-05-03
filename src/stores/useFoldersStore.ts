import { create } from 'zustand';

export interface IF{
      name: string;
      created: string;
      id_folder: string;
      changes: [];   
}

interface IFolders{
   [x: string]: any;
   folders: IF[];
   setFolders (array:[]): void;
}

interface IFile{
   [x: string]: any;
   file: string;
   files: [];
   setFile (fl: string): void;
}



export const useFoldersStore = create<IFolders>((set) => ({
   folders: [],  
   setFolders: (array:[]) => set({ folders: array }),
   
}));


export const useFileStore = create<IFile>((set) => ({
   file: '',
   files: [],  
   setFile: (fl: string) => set({ file: fl }),
   setFiles: (fl: any) => set({files: fl}),  
}));


