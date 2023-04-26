import { create } from 'zustand'

interface IUser{
   email_verified: string,
   email: string,
   name: string,
   family_name: string,
   picture?: string,
   setUser?(obj:User): void
}

interface User{
   email_verified: string,
   email: string,
   name: string,
   family_name: string,
   picture?: string,
}

export const useUserStore = create<IUser>((set) => ({
   email_verified: '',
   email: '',
   name: '',
   family_name: '',
   picture: '',
   setUser: (obj:User) => set({
      email_verified: obj.email_verified, 
      email: obj.email, 
      name: obj.name, 
      family_name: obj.family_name, 
      picture: obj.picture }),
}))