import { create } from "zustand";

interface User {
  username: string;
  email: string;
  password: string;
}

interface UserState {
  user: User | null;
  setUser: (user: User) => void;
  clearUser: () => void;
}

export const useUserStore = create<UserState>()((set) => ({
  user: null,
  setUser: (user: User) => set({ user }),
  clearUser: () => set({ user: null }),
}));
