"use client";

import { ProjectList } from "@/components/dashboard/project/projectList";
import Layout from "../leyout";
import { ModelNewProject } from "@/components/modals/models";
import { useContext } from "react";
import { AppContext, ContextModaldashboard } from "@/context/context";

export default function Project() {
    const { isOpen, setIsOpen } = useContext(ContextModaldashboard);

    return (
        <AppContext>
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
                </Layout>
                {!isOpen ? (
                    <div className="absolute h-screen w-screen justify-center items-center top-0">
                        <ModelNewProject />
                    </div>
                ) : (
                    "jjjjj"
                )}
            </div>
        </AppContext>
    );
}
