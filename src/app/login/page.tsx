"use client";

import { GoogleLogo } from "@phosphor-icons/react";
import { app, auth, googleAuth } from "@/config/firebaseConfig";
import {
    getAuth,
    signInWithPopup,
    onAuthStateChanged,
    GoogleAuthProvider,
} from "firebase/auth";

export default function Login() {
    const Entrar = async () => {

        // TODO: Create spinner in login button
        // setLoginSpinner(!loginSpinner);
        const resposta: any = await signInWithPopup(auth, googleAuth);
        try {
            onAuthStateChanged(auth, (user) => {
                console.log(resposta);
                const Login = [
                    {
                        acess_token: resposta.user.refreshToken,
                        id: resposta.user.uid,
                        nome: resposta.user.displayName,
                        email: resposta.user.email,
                        photoURL: resposta.user.photoURL,
                    },
                ];
                // firebase
                // TODO: Add mongoDB function to save user
                // writeDataToDatabase(Login);

                // TODO: Create spinner in login button
                // setLoginSpinner(!loginSpinner);
            });
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <section className="min-h-screen flex items-center justify-center">
            <div className="flex flex-col items-center justify-center space-y-10">
                <h1 className="text-3xl font-bold">
                    Welcome to Page Point - Where Your Ideas Come to Life!{" "}
                    <span className="absolute animate-bounce duration-50 right-[425px]">
                        🚀
                    </span>
                </h1>
                <button className="flex justify-center items-center gap-2 px-10 py-2 rounded-xl border-2 border-black hover:bg-red-400">
                    {/* TODO: Add spinner here */}
                    <GoogleLogo size={30} color="#44469b" weight="bold" />
                    <span className="text-base">Log in with Google</span>
                </button>
            </div>
        </section>
    );
}
