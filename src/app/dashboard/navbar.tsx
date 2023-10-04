"use client";
/* eslint-disable @next/next/no-img-element */
import { Pencil, GearSix, Clock } from "@phosphor-icons/react";
import { useState, useEffect } from "react";

// type TUser = {
//     name: string,
//     email: string,
//     photoUrl: string
// }

export const Navbar = () => {
    const [user, setUser]: any = useState({
        name: "",
        email: "",
        photoURL: "",
    });

    useEffect(() => {
        const getLocalStorageData = () => {
            const name = localStorage.getItem("user");
            const email = localStorage.getItem("email");
            const photoURL = localStorage.getItem("photoURL");
            return { name, email, photoURL };
        };
        const { name, email, photoURL } = getLocalStorageData();
        setUser({ name, email, photoURL });
    }, []);

    return (
        <nav className="relative container mx-auto space-y-5 mb-5">
            <div className="space-y-5 flex justify-between">
                <div className="flex items-center pt-5">
                    {/* avatar section */}

                    <div className="flex items-center gap-3">
                        <img
                            className="rounded-full w-10"
                            src={user.photoURL}
                            alt="profile"
                        />
                        <div className="">
                            <p className="text-black text-base">{user.name}</p>
                            <p className="text-zinc-400 text-sm">
                                {user.email}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex gap-3 items-center justify-center">
                    <div>
                        <Pencil size={25} color="#000000" />
                    </div>
                    <div>
                        <GearSix size={25} color="#000000" />
                    </div>
                </div>
            </div>

            {/* option sections */}
            <div className="flex items-center gap-3">
                <div className="flex items-center gap-2">
                    <span>
                        <Clock size={20} color="#000000" />
                    </span>
                    <span className="flex-nowrap flex">Recentes</span>
                </div>
                <div className="h-px w-full bg-black gap-3"></div>
            </div>
            {/* <div className="flex justify-end">
                <button className="bg-blue-500 w-44 py-2">New Project</button>
            </div> */}
        </nav>
    );
};
