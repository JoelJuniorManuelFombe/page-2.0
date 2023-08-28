import { ReactNode } from "react";
import { Navbar } from "./navbar";
import { ContextModal, ModalState } from "@/provider/providerModal";
// import { AppContext } from "@/context/context";

export default function Layout({ children }: { children: ReactNode }) {
    return (
        <>
            <ModalState>
                <Navbar />
                <main>{children}</main>
            </ModalState>
        </>
    );
}