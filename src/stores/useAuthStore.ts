import { create } from 'zustand'

interface Ilogin{
   isLogin: boolean;
   loginSuccess (): void;
   logout (): void;
}

export const useAuthStore = create<Ilogin>((set) => ({
   isLogin: false,
   loginSuccess: () => set({ isLogin: true }),
   logout: () => set({ isLogin: false }),
}))