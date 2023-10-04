import { ModalState } from "@/provider/providerModal";
import "./globals.css";
import "grapesjs/dist/css/grapes.min.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "PagePoint",
    description: "Welcome to Page Point - Where Your Ideas Come to Life!🚀",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            {/* <body className={inter.className}>{children}</body> */}
            <ModalState>
                <body>{children}</body>
            </ModalState>
        </html>
    );
}
