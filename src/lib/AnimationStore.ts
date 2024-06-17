import { create } from "zustand";

interface PreloaderState {
  isActive: boolean;
  setIsActive: (active: boolean) => void;
}

const usePreloaderStore = create<PreloaderState>((set) => ({
  isActive: true,
  setIsActive: (active) => set({ isActive: active }),
}));

export default usePreloaderStore;
