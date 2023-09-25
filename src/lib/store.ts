import { create } from "zustand";
import { onClient } from "@lib/utils";

interface DarkModeState {
  darkMode: boolean;
}

export const useAppStore = create<DarkModeState>((set) => ({
  darkMode: onClient() ? window.matchMedia("(prefers-color-scheme: dark)").matches : false,
  toggleDarkMode: () => set((state) => ({ darkMode: !state.darkMode })),
}));