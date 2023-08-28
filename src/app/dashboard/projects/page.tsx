"use client";
import { ProjectList } from "@/components/dashboard/project/projectList";
import Layout from "../layout";
import { ModelNewProject } from "@/components/modals/models";
import { createContext, useContext, useState } from "react";
import { ContextModal } from "@/provider/providerModal";
// import { AppContext, ContextModaldashboard } from "@/context/context";

export default function Project() {
    let { isOpen, setIsOpen }: any = useContext(ContextModal);

    return (
        <div className="relative">
            <Layout>
                <div className="container mx-auto flex justify-end">
                    <button
                        onClick={() => {
                            setIsOpen(!isOpen);
                            console.log(isOpen);
                        }}
                        className="bg-blue-500 w-44 border-2 border-black py-2"
                    >
                        New Project
                    </button>
                </div>
                <div className="mx-auto container">
                    <ProjectList title="SavanaPoint" date="10/03/2023" />
                    <ProjectList title="SavanaPoint" date="10/03/2023" />
                    <ProjectList title="SavanaPoint" date="10/03/2023" />
                    <ProjectList title="SavanaPoint" date="10/03/2023" />
                    <ProjectList title="SavanaPoint" date="10/03/2023" />
                    <ProjectList title="SavanaPoint" date="10/03/2023" />
                    <ProjectList title="SavanaPoint" date="10/03/2023" />
                </div>
                {isOpen ? (
                    <div className="absolute h-screen w-screen justify-center items-center top-0">
                        <ModelNewProject />
                    </div>
                ) : (
                    "jjjjj"
                )}
            </Layout>
        </div>
    );
}
