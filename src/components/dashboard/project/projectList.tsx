"use client";

import { PencilSimple, Trash } from "@phosphor-icons/react";
import Link from "next/link";

type colors = "bg-red-500" | "bg-blue-500";

type IButton = {
    icon?: () => React.ReactNode;
    color?: colors;
    text?: string;
};

type IContent = {
    title?: string;
    date?: string;
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

const ProjectList = ({ title = "", date = "" }: IContent) => {
    return (
        <section className="">
            <div className="py-3 border-2 border-b-black border-transparent">
                <Link
                    href="www.google.com"
                    className="flex justify-between items-center"
                >
                    <Content title={title} date={date} />
                    <div className="flex gap-3">
                        <Button
                            icon={() => (
                                <PencilSimple
                                    size={30}
                                    color="#01010e"
                                    weight="thin"
                                />
                            )}
                            color="bg-blue-500"
                            text="Edit"
                        />
                        <Button
                            icon={() => (
                                <Trash
                                    size={30}
                                    color="#01010e"
                                    weight="thin"
                                />
                            )}
                            color="bg-red-500"
                            text="Delete"
                        />
                    </div>
                </Link>
            </div>
        </section>
    );
};

export { ProjectList };
