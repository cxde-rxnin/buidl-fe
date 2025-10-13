import { create } from 'zustand';

interface TipModalState {
  open: boolean;
  openModal: () => void;
  closeModal: () => void;
}

export const useTipModalStore = create<TipModalState>((set) => ({
  open: false,
  openModal: () => set({ open: true }),
  closeModal: () => set({ open: false }),
}));
