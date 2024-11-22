"use client"

import { create } from "zustand"

type Contact = {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
}

export const useContactModal = create<Contact>((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false})
}))