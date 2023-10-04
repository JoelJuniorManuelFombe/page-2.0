"use client"

import Editor from "@/components/editor/editor";
// import { FloppyDisk } from "@phosphor-icons/react";


export default function Home() {

    // const UpdateProjectFunction = () => {
    //     const bodyProject = localStorage.getItem("gjsProject");
    //     UpdateProject(bodyProject, Project_id);
    // };

    // console.log(IdProject);

    return (
        <section className="top-0 w-screen h-screen overflow-hidden">
            <div className="bg-[#444444] flex gap-2">
                <h1 className="text-white font-bold text-2xl ml-2">
                    SavanaPoint
                </h1>
                <div className="w-1 bg-white`"></div>
                <div>
                    {/* <FloppyDisk
                        // onClick={() => UpdateProjectFunction()}
                        size={32}
                        color="#ffffff"
                        weight="fill"
                    /> */}
                </div>
            </div>
            <Editor />
        </section>
    );
}