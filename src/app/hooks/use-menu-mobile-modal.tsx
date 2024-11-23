"use client"

import { create } from "zustand"

type MenuMobile = {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
}

export const useMenuMobileModal = create<MenuMobile>((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false})
}))