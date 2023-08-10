"use client";

import { AppContext, ContextModaldashboard } from "@/context/context";
import { useContext } from "react";

type IInput = {
    placeholder?: string;
};

type IButton = {
    text?: string;
};

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

const ModelNewProject = () => {
    const { isOpen, setIsOpen } = useContext(ContextModaldashboard);
    return (
        <section className="flex justify-center items-center h-screen backdrop-blur-sm">
            <div className="w-96 border border-black p-10 space-y-5">
                <div className="flex justify-between">
                    <h2>New Project</h2>
                    <span onClick={() => setIsOpen(!isOpen)}>X</span>
                </div>
                <Input placeholder="New Project" />
                <Button text="Create" />
            </div>
        </section>
    );
};

export { ModelNewProject };
