"use client";

import { useState, useContext, createContext, ReactNode } from "react";

const ContextModal: any = createContext({});

const ModalState = ({ children }: { children: ReactNode }) => {
    const [isOpen, setIsOpen]: any = useState(false);
    const [isOpenEdit, setIsOpenEdit]: any = useState(false);
    const [isOpenDelete, setIsOpenDelete]: any = useState(false);
    const [createNewProject, setCreateNewProject] = useState();
    const [createNewPage, setCreateNewPage] = useState();
    const [uopdate, setUpdate] = useState();
    const [edit, setEdit] = useState();
    const [deleteData, setDeleteData] = useState();
    const [idData, setIdData] = useState();

    return (
        <ContextModal.Provider
            value={{
                isOpen,
                setIsOpen,
                isOpenEdit,
                setIsOpenEdit,
                isOpenDelete,
                setIsOpenDelete,
                createNewProject,
                setCreateNewProject,
                createNewPage,
                setCreateNewPage,
                uopdate,
                setUpdate,
                edit,
                setEdit,
                deleteData,
                setDeleteData,
                idData,
                setIdData,
            }}
        >
            {children}
        </ContextModal.Provider>
    );
};
const useContexModalt = () => useContext(ContextModal);

export { useContexModalt, ModalState };
