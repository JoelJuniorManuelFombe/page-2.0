"use client";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { At, GoogleLogo, LockSimple, User } from "@phosphor-icons/react";
import { app, auth, googleAuth } from "@/config/firebaseConfig";
import {
    getAuth,
    signInWithPopup,
    onAuthStateChanged,
    GoogleAuthProvider,
} from "firebase/auth";
import { getUserByEmail, newUser } from "@/services/user";
import { useState } from "react";

export default function Login() {
    const [email, setEmail] = useState("");
    const [userData, setUserData] = useState();
    const Entrar = async () => {
        // TODO: Create spinner in login button
        // setLoginSpinner(!loginSpinner);
        const resposta: any = await signInWithPopup(auth, googleAuth);
        try {
            onAuthStateChanged(auth, async (user) => {
                console.log(resposta);

                // localstorage
                localStorage.setItem(
                    "refreshToken",
                    resposta.user.refreshToken
                );

                //MongoDB
                await newUser({
                    uid: resposta.user.uid,
                    nameUser: resposta.user.displayName,
                    emailUser: resposta.user.email,
                    photoURL: resposta.user.photoURL,
                });

                // TODO: Create spinner in login button
                // setLoginSpinner(!loginSpinner);
                // console.log(Login);
            });
        } catch (error) {
            console.log(error);
        }
    };

    console.log(email);

    const Login = async () => {
        const data = await getUserByEmail(email);
        setUserData(data);
        data.map((user: any) => {
            console.log(user.nameUser);
            localStorage.setItem("user", user.nameUser);
            localStorage.setItem("email", user.emailUser);
            localStorage.setItem("id", user._id);
            localStorage.setItem("photoURL", user.photoURL);
        });

    };
    
    if (localStorage.getItem("id")) {
        redirect("/dashboard/projects");
    }
    console.log(userData)

    return (
        <section className="min-h-screen flex items-center justify-center">
            <div className="flex flex-col items-center justify-center space-y-10">
                <h1 className="text-3xl font-bold">
                    Welcome to Page Point - Where Your Ideas Come to Life!{" "}
                    <span className="absolute animate-bounce duration-50 right-[425px]">
                        🚀
                    </span>
                </h1>
                <div className="w-96 space-y-5">
                    <div className="flex items-center gap-3 border-black border-2 w-full px-3 py-2 rounded-xl focus-within:border-blue-700">
                        <span>
                            {/* <User size={32} /> */}
                            <At size={32} />
                        </span>
                        <input
                            className="w-full py-2 outline-none"
                            type="text"
                            placeholder="Email"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="flex items-center gap-3 border-black border-2 w-full px-3 py-2 rounded-xl focus-within:border-blue-700">
                        <span>
                            <LockSimple size={32} />
                        </span>
                        <input
                            className="w-full py-2 outline-none"
                            type="password"
                            placeholder="Password"
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="flex gap-2">
                            <input type="checkbox" />
                            <span>Remember me</span>
                        </div>
                        <div>
                            <a className="text-red-500 font-semibold" href="">
                                Forgot Password
                            </a>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <button
                            className="flex justify-center items-center gap-2 px-10 py-2 rounded-xl border-2 border-black  hover:bg-black  hover:text-white"
                            onClick={Login}
                        >
                            {/* TODO: Add spinner here */}
                            <span className="text-base">Login</span>
                        </button>
                    </div>
                    <div className="flex items-center justify-center">
                        <span className="w-full h-px bg-black"></span>
                        <span className="border-2 border-black w-80 text-center rounded-xl">
                            Or login with
                        </span>
                        <span className="w-full h-px bg-black"></span>
                    </div>
                    <div className="flex items-center justify-center">
                        <button
                            onClick={Entrar}
                            className="flex justify-center items-center gap-2 px-10 py-2 rounded-xl border-2 border-black hover:bg-red-400"
                        >
                            {/* TODO: Add spinner here */}
                            <GoogleLogo
                                size={30}
                                color="#44469b"
                                weight="bold"
                            />
                            <span className="text-base">
                                Log in with Google
                            </span>
                        </button>
                    </div>
                    <div>
                        <p>
                            Dont have on account?{" "}
                            <a className="text-red-500 font-semibold" href="">
                                Sign up
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
