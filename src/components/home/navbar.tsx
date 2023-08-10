import { ArrowRight } from "@phosphor-icons/react"
import Link from "next/link"




export const NavBar = () => {
    return(
        <section className="flex py-5 justify-between items-center">
            <div>
                <h1 className="text-2xl font-bold ">PagePoint</h1>
            </div>
            <div>
                <ul className="flex gap-3">
                    <li>
                        <Link href="#">Home</Link>
                    </li>
                    <li>
                        <Link href="#">About</Link>
                    </li>
                    <li>
                        <Link href="#">Trust Us</Link>
                    </li>
                    <li>
                        <Link href="#"></Link>
                    </li>
                </ul>
            </div>
            <div >
                <Link href="/login" className="bg-zinc-600 px-4 py-2 rounded-full flex items-center gap-2">
                    Login
                    <span>
                        <ArrowRight/>
                    </span>
                </Link>
            </div>
        </section>
    )
}