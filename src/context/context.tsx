// import { ModelNewProject } from "@/components/modals/models";
// import React, { createContext, useState, ReactNode } from "react";

// type TChildren = {
//     children: React.ReactNode;
// };

// interface IContextModaldashboard {
//     isOpen: boolean;
//     setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
//     isOpenEdit: boolean;
//     setIsOpenEdit: React.Dispatch<React.SetStateAction<boolean>>;
//     isOpenDelete: boolean;
//     setIsOpenDelete: React.Dispatch<React.SetStateAction<boolean>>;
//     Update: boolean;
//     setUpdate: React.Dispatch<React.SetStateAction<boolean>>;
//     UpdatePage: boolean;
//     setUpdatePage: React.Dispatch<React.SetStateAction<boolean>>;
// }

// export const ContextModaldashboard = createContext<IContextModaldashboard>({
//     isOpen: false,
//     setIsOpen: () => {},
//     isOpenEdit: false,
//     setIsOpenEdit: () => {},
//     isOpenDelete: false,
//     setIsOpenDelete: () => {},
//     Update: false,
//     setUpdate: () => {},
//     UpdatePage: false,
//     setUpdatePage: () => {},
// });

// export const AppContext = ({ children }: TChildren) => {
//     const [isOpen, setIsOpen] = useState(false);
//     const [isOpenEdit, setIsOpenEdit] = useState(false);
//     const [isOpenDelete, setIsOpenDelete] = useState(false);
//     const [Update, setUpdate] = useState(false);
//     const [UpdatePage, setUpdatePage] = useState(false);
//     return (
//         <ContextModaldashboard.Provider
//             value={{
//                 isOpen,
//                 setIsOpen,
//                 isOpenEdit,
//                 setIsOpenEdit,
//                 isOpenDelete,
//                 setIsOpenDelete,
//                 Update,
//                 setUpdate,
//                 UpdatePage,
//                 setUpdatePage,
//             }}
//         >
//             <ModelNewProject/>
//         </ContextModaldashboard.Provider>
//     );
// };
