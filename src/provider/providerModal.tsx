'use client'
import { useState, useContext, createContext, ReactNode } from "react";

const ContextModal: any = createContext('');

const ModalState = ({children}: {children: ReactNode }) => {
    const { isOpen, setIsOpen }: any = useState(false);

    return (
        <ContextModal.Provider value={{ isOpen, setIsOpen }}>
            {children}
        </ContextModal.Provider>
    );
};
export { ContextModal, ModalState}