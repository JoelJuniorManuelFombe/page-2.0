'use client'

import { CardSwiper } from "@/components/home/cardsSwiper";
import { Footer } from "@/components/home/footer";
import { NavBar } from "@/components/home/navbar";
import Image from "next/image";
import { BiLogoCss3, BiLogoHtml5, BiLogoTailwindCss } from "react-icons/bi";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function HomeIndex() {
    useEffect(() => {
        AOS.init();
    }, []);
    const router = useRouter();
    useEffect(() => {
        if (localStorage.getItem('acess-token')) {
          router.push('/dashboard');
        }
      }, [router]);

    return (
        <section className="bg-zinc-100 space-y-40">
            <div className="container mx-auto space-y-40">
                <div className="space-y-20">
                    <div>
                        <NavBar />
                    </div>
                    <div className="mx-52 text-center space-y-5 flex flex-col justify-center">
                        <h1 className="text-4xl font-bold tracking-tight">
                            Bem-vindo ao nosso incrível criador de páginas da
                            web!
                        </h1>
                        <p className="text-xl text-center text-zinc-600">
                            Crie sites impressionantes de forma fácil e rápida
                            com nossa plataforma intuitiva e poderosa. Com nossa
                            ferramenta de arrastar e soltar e uma variedade de
                            componentes prontos para uso, você pode personalizar
                            seu site sem precisar escrever uma única linha de
                            código.
                        </p>
                    </div>
                    <div className="flex justify-center">
                        <Image
                            src="/home/grapes - editor.jpeg"
                            width={1000}
                            height={200}
                            alt="editor"
                        />
                    </div>
                </div>
                <div data-aos="fade-right" className="flex mx-32">
                    <div className="w-1/2">
                        <h1 className="text-3xl font-bold tracking-tight">
                            Interface amigável
                        </h1>
                        <p className="text-lg tracking-tight">
                            Não importa se você é um iniciante ou um
                            desenvolvedor experiente, nossa interface intuitiva
                            torna a criação de páginas simples e divertida.
                        </p>
                    </div>
                    <div data-aos="fade-up">
                        <Image
                            src="/home/friendly design.jpg"
                            width={700}
                            height={200}
                            alt="editor"
                        />
                    </div>
                </div>
                <div data-aos="fade-left" className="flex flex-row-reverse mx-32 gap-16">
                    <div className="w-1/2">
                        <h1 className="text-3xl font-bold tracking-tight">
                            Exportação de código
                        </h1>
                        <p className="text-lg tracking-tight">
                            Exporte suas páginas para HTML e CSS para usá-las em
                            qualquer ambiente.
                        </p>
                    </div>
                    <div>
                        <Image
                            src="/home/sc-grapesjs-export-code.jpg"
                            width={700}
                            height={200}
                            alt="editor"
                        />
                    </div>
                </div>
                <div className="mx-32  space-y-5">
                    <h1 className="text-3xl text-center font-bold tracking-tight">
                        Build Beautfull Pages
                    </h1>
                    <p className="text-zinc-600 text-center text-lg">
                        Crie páginas incríveis usando CSS, HTML e os componentes
                        do Tailwind CSS, que oferecem estilos pré-construídos e
                        um sistema de grid responsivo para facilitar a criação
                        de interfaces modernas e adaptáveis.
                    </p>
                    <div className="flex gap-10 justify-center">
                        <div className="flex flex-col justify-center items-center">
                            <span>
                                <BiLogoHtml5 size={120} />
                            </span>
                            <h1 className="text-xl text-center font-bold tracking-tight">
                                HTML
                            </h1>
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <span>
                                <BiLogoCss3 size={120} />
                            </span>
                            <h1 className="text-xl text-center font-bold tracking-tight">
                                CSS
                            </h1>
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <span>
                                <BiLogoTailwindCss size={120} />
                            </span>
                            <h1 className="text-xl text-center font-bold tracking-tight">
                                TAILWINDCSS
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="space-y-10">
                <div>
                    <h1 className="text-3xl text-center font-bold tracking-tight">
                        What do you think of PagePoint?
                    </h1>
                </div>
                <CardSwiper />
            </div>
            <div>
                <Footer />
            </div>
        </section>
    );
}