"use client";

import { PageList } from "@/components/dashboard/project/projectList";
import {
    ModelNewPage,
    ModelPageEdit,
    ModelPageDelete,
} from "@/components/modals/models";
import { useEffect, useState } from "react";
import { useContexModalt } from "@/provider/providerModal";
import { Navbar } from "../navbar";
import { getPageById } from "@/services/page";
// import { AppContext, ContextModaldashboard } from "@/context/context";

export default function Page({ params }: { params: { page: any } }) {
    let {
        isOpen,
        setIsOpen,
        isOpenEdit,
        setIsOpenEdit,
        isOpenDelete,
        setIsOpenDelete,
        createNewPage,
        setCreateNewPage,
        update,
        setUpdate,
        edit,
        deleteData
    }: any = useContexModalt();

    const [pages, setPages] = useState([]);

    useEffect(() => {
        async function getPages() {
            const data: any = await getPageById(params.page);
            setPages(data);
        }
        getPages();
    }, [params.page]);

    return (
        <div className="relative">
            <div className="container mx-auto flex justify-between items-center">
                <div>
                    <span>Project - SavanaPoint</span>
                </div>
                <button
                    onClick={() => {
                        setIsOpen(!isOpen);
                    }}
                    className="bg-blue-500 w-44 border-2 border-black py-2"
                >
                    New Page
                </button>
            </div>

            {pages.map((page: any) => {
                const created_at: any = new Date(
                    page.createdAt
                ).toLocaleString();
                return (
                    <div className="mx-auto container" key={page._id}>
                        <PageList
                            title={page.pageName}
                            date={created_at}
                            pageId={page._id}
                        />
                    </div>
                );
            })}
            <div className="">
                <div
                    className={`absolute h-screen w-screen justify-center items-center -top-28 ${
                        isOpen ? "block" : "hidden"
                    }`}
                >
                    <ModelNewPage projectId={params.page} />
                </div>
                <div
                    className={`absolute h-screen w-screen justify-center items-center -top-28 ${
                        isOpenEdit ? "block" : "hidden"
                    }`}
                >
                    <ModelPageEdit title="Edit Page" pageName={edit} />
                </div>
                <div
                    className={`absolute h-screen w-screen justify-center items-center -top-28 ${
                        isOpenDelete ? "block" : "hidden"
                    }`}
                >
                    <ModelPageDelete
                        title="Delete Page"
                        pageName={edit}
                    />
                </div>
            </div>
        </div>
    );
}
