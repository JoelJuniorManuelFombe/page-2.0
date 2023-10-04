"use client";

import { getProjectById } from "@/services/project";
import { ProjectList } from "@/components/dashboard/project/projectList";
import {
    ModelNewProject,
    ModelEdit,
    ModelDelete,
} from "@/components/modals/models";
import { createContext, useContext, useState, use, useEffect } from "react";
import { useContexModalt } from "@/provider/providerModal";
import { Navbar } from "../navbar";

// async function getProjects() {
//     return await getUserByUserId(localStorage.getItem('id'))
// };

export default function Project() {
    let {
        isOpen,
        setIsOpen,
        isOpenEdit,
        setIsOpenEdit,
        isOpenDelete,
        setIsOpenDelete,
        edit,
        setEdit,
        deleteData,
        setDeleteData
    }: any = useContexModalt();

    const [projects, setProjects] = useState([]);

    // const projects = use(getProjects())

    useEffect(() => {
        async function getProjects() {
            const data: any = await getProjectById(localStorage.getItem("id"));
            setProjects(data);
        }
        getProjects();
    }, []);

    return (
        <div className="relative">
            <div className="container mx-auto flex justify-end">
                <button
                    onClick={() => {
                        setIsOpen(!isOpen);
                    }}
                    className="bg-blue-500 w-44 border-2 border-black py-2"
                >
                    New Project
                </button>
            </div>

            {projects.map((project: any) => {
                const created_at: any = new Date(
                    project.createdAt
                ).toLocaleString();
                
                return (
                    <div className="mx-auto container" key={project._id}>
                        <ProjectList
                            title={project.projectName}
                            date={created_at}
                            projectId={project._id}
                        />
                    </div>
                );
            })}

            <div
                className={`absolute h-screen w-screen justify-center items-center -top-28 ${
                    isOpen ? "block" : "hidden"
                }`}
            >
                <ModelNewProject />
            </div>
            <div
                className={`absolute h-screen w-screen justify-center items-center -top-28 ${
                    isOpenEdit ? "block" : "hidden"
                }`}
            >
                <ModelEdit title="Edit Project" pageName={edit} />
            </div>
            <div
                className={`absolute h-screen w-screen justify-center items-center -top-28 ${
                    isOpenDelete ? "block" : "hidden"
                }`}
            >
                <ModelDelete title="Delete Project" pageName={edit} />
            </div>
        </div>
    );
}
