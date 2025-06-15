import { create } from "zustand";

export const useAuthStore = create((set) => ({
  accessToken: null,
  role: null,
  setAuth: (accessToken, role) => set({ accessToken, role }),
  resetAuth: () => set({ accessToken: null, role: null }),
}));
