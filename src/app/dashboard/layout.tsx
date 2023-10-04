import { ReactNode } from "react";
import { Navbar } from "./navbar";
import { ModalState } from "@/provider/providerModal";
// import { AppContext } from "@/context/context";

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <>
            <Navbar />
            <main>{children}</main>
        </>
    );
}
