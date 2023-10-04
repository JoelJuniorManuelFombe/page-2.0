"use client";

import page from "@/app/page";
import { ModelPageEdit, ModelPageDelete } from "@/components/modals/models";
import { useContexModalt } from "@/provider/providerModal";
import { PencilSimple, Trash } from "@phosphor-icons/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { MouseEventHandler } from "react";

type colors = "bg-red-500" | "bg-blue-500";

type IButton = {
    icon?: () => React.ReactNode;
    onclick?: () => React.ReactNode;
    // onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
    color?: colors;
    text?: string;
};

type IContent = {
    title?: string;
    date?: string;
};

type IContentProject = {
    title?: string;
    date?: string;
    projectId: any;
};

type IContentPage = {
    title: string;
    date: string;
    pageId: any;
};

const Content = ({ title = "", date = "" }: IContent) => {
    return (
        <div className="flex flex-col gap-y-1">
            <h2 className="text-xl font-medium">{title}</h2>
            <span className="text-base text-zinc-500">Created: {date}</span>
        </div>
    );
};

const Button = ({ icon, color, text = "" }: IButton) => {
    return (
        <button
            className={`flex flex-col border-2 border-black justify-center items-center w-20 py-1 ${color}`}
        >
            {icon && icon()}
            {text}
        </button>
    );
};

const ProjectList = ({
    title = "",
    date = "",
    projectId = "",
}: IContentProject) => {
    const {
        isOpenEdit,
        setIsOpenEdit,
        isOpenDelete,
        setIsOpenDelete,
        edit,
        setEdit,
        deleteData,
        setDeleteData,
        idData,
        setIdData,
    }: any = useContexModalt();

    return (
        <section className="">
            <div className="flex justify-between py-3 border-2 border-b-black border-transparent">
                <Link
                    href={`/dashboard/${projectId}`}
                    className="flex justify-between items-center w-screen"
                >
                    <Content title={title} date={date} />
                </Link>
                <div className="flex gap-3">
                    <button
                        className="flex flex-col border-2 border-black justify-center items-center w-20 py-1 bg-blue-500"
                        onClick={() => {
                            setIsOpenEdit(!isOpenEdit);
                            setEdit(title);
                            setIdData(projectId)
                        }}
                    >
                        <span>
                            <PencilSimple
                                size={30}
                                color="#01010e"
                                weight="thin"
                            />
                        </span>
                        Edit
                    </button>
                    <button
                        className="flex flex-col border-2 border-black justify-center items-center w-20 py-1 bg-red-500"
                        onClick={() => {
                            setIsOpenDelete(!isOpenDelete);
                            setDeleteData(projectId);
                            setEdit(title);
                        }}
                    >
                        <span>
                            <Trash size={30} color="#01010e" weight="thin" />
                        </span>
                        Delete
                    </button>
                </div>
            </div>
        </section>
    );
};

const PageList = ({ title = "", date = "", pageId = "" }: IContentPage) => {
    const {
        isOpenEdit,
        setIsOpenEdit,
        isOpenDelete,
        setIsOpenDelete,
        edit,
        setEdit,
        deleteData,
        setDeleteData,
    }: any = useContexModalt();

    return (
        <section className="">
            <div className="flex justify-between py-3 border-2 border-b-black border-transparent">
                <Link
                    href={`/${pageId}`}
                    className="flex justify-between items-center w-screen"
                >
                    <Content title={title} date={date} />
                </Link>
                <div>
                    <div className="flex gap-3">
                        <button
                            className="flex flex-col border-2 border-black justify-center items-center w-20 py-1 bg-blue-500"
                            onClick={() => {
                                setIsOpenEdit(!isOpenEdit);
                                setEdit(title);
                            }}
                        >
                            <span>
                                <PencilSimple
                                    size={30}
                                    color="#01010e"
                                    weight="thin"
                                />
                            </span>
                            Edit
                        </button>
                        <button
                            className="flex flex-col border-2 border-black justify-center items-center w-20 py-1 bg-red-500"
                            onClick={() => {
                                setIsOpenDelete(!isOpenDelete);
                                setDeleteData(pageId);
                            }}
                        >
                            <span>
                                <Trash
                                    size={30}
                                    color="#01010e"
                                    weight="thin"
                                />
                            </span>
                            Delete
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export { ProjectList, PageList };
