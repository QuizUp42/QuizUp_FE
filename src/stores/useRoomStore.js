import { create } from "zustand";

export const useRoomStore = create((set) => ({
  roomCode: null,
  setRoomCode: (code) => set({ roomCode: code }),
  clearRoomCode: () => set({ roomCode: null }),
}));
