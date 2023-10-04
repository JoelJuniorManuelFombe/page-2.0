"use client";

import { useContexModalt } from "@/provider/providerModal";
import { newPage } from "@/services/page";
import { newProject, updateProject } from "@/services/project";
// import { AppContext, ContextModaldashboard } from "@/context/context";

import React, {
    MouseEventHandler,
    createContext,
    useContext,
    useState,
} from "react";

// TODO: Types
type INewPage = {
    projectId: any;
};

type IModelEdit = {
    title: string;
    pageName: string;
};

type IModelDelete = {
    title: string;
    pageName: string;
};

type IInput = {
    placeholder?: string;
    onClick?: MouseEventHandler<HTMLInputElement> | undefined;
    onChange?: MouseEventHandler<HTMLInputElement> | undefined;
};

type IButton = {
    text?: string;
    onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
};

// TODO: Componentes

const Input = ({ placeholder }: IInput) => {
    return (
        <input
            className="p-2 border border-black w-full"
            placeholder={placeholder}
            type="text"
        />
    );
};

const Button = ({ text }: IButton) => {
    return (
        <button className="border border-black p-2 w-36 hover:bg-black hover:text-white">
            {text}
        </button>
    );
};

// TODO: Fuctions

// TODO: Models

// TODO: Projects

const ModelNewProject = () => {
    const { isOpen, setIsOpen, createNewProject, setCreateNewProject }: any =
        useContexModalt();

    const CreateProject = async () => {
        console.log("olaaaaaaaaaaaaaaaaaaaaaa " + createNewProject);
        await newProject({
            projectName: createNewProject,
            userId: localStorage.getItem("id"),
        });
        setIsOpen(!isOpen);
    };

    return (
        <section className="flex justify-center items-center h-screen backdrop-blur-sm">
            <div className="w-96 border border-black p-10 space-y-5">
                <div className="flex justify-between">
                    <h2>New Project</h2>
                    <span
                        className="cursor-pointer"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        X
                    </span>
                </div>
                <input
                    className="p-2 border border-black w-full"
                    placeholder="New Project"
                    type="text"
                    onChange={(e) => setCreateNewProject(e.target.value)}
                />
                {/* <Input onChange={(e: any) => setNameProject(e.target.value)} placeholder="New Project" /> */}
                <div className="flex justify-between">
                    <button onClick={CreateProject}>olaaaa</button>
                    <Button onClick={CreateProject} text="Create" />
                    <Button onClick={() => setIsOpen(!isOpen)} text="Cancel" />
                </div>
            </div>
        </section>
    );
};

const ModelDelete = (props: IModelEdit) => {
    const { isOpenDelete, setIsOpenDelete }: any = useContexModalt();

    return (
        <section className="flex justify-center items-center h-screen backdrop-blur-sm">
            <div className="w-96 border border-black p-10 space-y-5">
                <div className="flex justify-between">
                    <h2>{props.title}</h2>
                    <span
                        className="cursor-pointer"
                        onClick={() => setIsOpenDelete(!isOpenDelete)}
                    >
                        X
                    </span>
                </div>
                <div>
                    {/* TODO: concatenar o nome do projecto */}
                    <p>{`Do you real wanna delete ${props.pageName}`}</p>
                </div>
                <div className="flex justify-between">
                    <button className="border border-black p-2 w-36 hover:bg-black hover:text-white">
                        Delete
                    </button>
                    <button
                        className="border border-black p-2 w-36 hover:bg-black hover:text-white"
                        onClick={() => setIsOpenDelete(!isOpenDelete)}
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </section>
    );
};

const ModelEdit = (props: IModelEdit) => {
    const { isOpenEdit, setIsOpenEdit, idData, setIdData, edit, setEdit }: any =
        useContexModalt();

    return (
        <section className="flex justify-center items-center h-screen backdrop-blur-sm">
            <div className="w-96 border border-black p-10 space-y-5">
                <div className="flex justify-between">
                    <h2>{props.title}</h2>
                    <span
                        className="cursor-pointer"
                        onClick={() => setIsOpenEdit(!isOpenEdit)}
                    >
                        X
                    </span>
                </div>
                <div>
                    {/* TODO: concatenar o nome do projecto por editar */}
                    <Input placeholder={props.pageName} />
                    <input type="text" onChange={e => setEdit(e.target.value)}/>
                </div>
                <div className="flex justify-between">
                    <button className="border border-black p-2 w-36 hover:bg-black hover:text-white" onClick={ async() => {
                        await updateProject(edit, idData)
                    }}>
                        Update
                    </button>
                    <button
                        className="border border-black p-2 w-36 hover:bg-black hover:text-white"
                        onClick={() => setIsOpenEdit(!isOpenEdit)}
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </section>
    );
};

// TODO: Page

const ModelNewPage = (props: INewPage) => {
    const {
        isOpen,
        setIsOpen,
        createNewProject,
        setCreateNewProject,
        createNewPage,
        setCreateNewPage,
    }: any = useContexModalt();

    const CreatePage = async () => {
        await newPage({
            pageName: createNewPage,
            projectId: props.projectId,
        });
        setIsOpen(!isOpen);
    };

    return (
        <section className="flex justify-center items-center h-screen backdrop-blur-sm">
            <div className="w-96 border border-black p-10 space-y-5">
                <div className="flex justify-between">
                    <h2>New Project</h2>
                    <span
                        className="cursor-pointer"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        X
                    </span>
                </div>
                <input
                    className="p-2 border border-black w-full"
                    placeholder="New Project"
                    type="text"
                    onChange={(e) => setCreateNewPage(e.target.value)}
                />
                {/* <Input onChange={(e: any) => setNameProject(e.target.value)} placeholder="New Project" /> */}
                <div className="flex justify-between">
                    <button onClick={CreatePage}>olaaaa</button>
                    {/* <Button onClick={} text="Create" /> */}
                    <Button onClick={() => setIsOpen(!isOpen)} text="Cancel" />
                </div>
            </div>
        </section>
    );
};

const ModelPageDelete = (props: IModelEdit) => {
    const { isOpenDelete, setIsOpenDelete }: any = useContexModalt();

    return (
        <section className="flex justify-center items-center h-screen backdrop-blur-sm">
            <div className="w-96 border border-black p-10 space-y-5">
                <div className="flex justify-between">
                    <h2>{props.title}</h2>
                    <span
                        className="cursor-pointer"
                        onClick={() => setIsOpenDelete(!isOpenDelete)}
                    >
                        X
                    </span>
                </div>
                <div>
                    {/* TODO: concatenar o nome do projecto */}
                    <p>{`Do you real wanna delete ${props.pageName}`}</p>
                </div>
                <div className="flex justify-between">
                    <button className="border border-black p-2 w-36 hover:bg-black hover:text-white">
                        Delete
                    </button>
                    <button
                        className="border border-black p-2 w-36 hover:bg-black hover:text-white"
                        onClick={() => setIsOpenDelete(!isOpenDelete)}
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </section>
    );
};

const ModelPageEdit = (props: IModelEdit) => {
    const { isOpenEdit, setIsOpenEdit }: any = useContexModalt();

    return (
        <section className="flex justify-center items-center h-screen backdrop-blur-sm">
            <div className="w-96 border border-black p-10 space-y-5">
                <div className="flex justify-between">
                    <h2>{props.title}</h2>
                    <span
                        className="cursor-pointer"
                        onClick={() => setIsOpenEdit(!isOpenEdit)}
                    >
                        X
                    </span>
                </div>
                <div>
                    {/* TODO: concatenar o nome do projecto por editar */}
                    <Input placeholder={props.pageName} />
                </div>
                <div className="flex justify-between">
                    <button className="border border-black p-2 w-36 hover:bg-black hover:text-white">
                        Update
                    </button>
                    <button
                        className="border border-black p-2 w-36 hover:bg-black hover:text-white"
                        onClick={() => setIsOpenEdit(!isOpenEdit)}
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </section>
    );
};

export {
    ModelNewProject,
    ModelDelete,
    ModelEdit,
    ModelNewPage,
    ModelPageDelete,
    ModelPageEdit,
};
