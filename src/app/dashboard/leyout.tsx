import { ReactNode } from "react";
import { Navbar } from "./navbar";
import { AppContext } from "@/context/context";

export default function Layout({ children }: any) {
    return (
        <>
            <AppContext>
                <Navbar />
                <main>{children}</main>
            </AppContext>
        </>
    );
}
