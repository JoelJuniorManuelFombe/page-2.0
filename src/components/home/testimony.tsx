import { Quotes } from "@phosphor-icons/react";
import Image from "next/image";
import { TUser } from "@/components/home/types";

const CardTestimony = (props: TUser) => {
    return (
        <section>
            <div className="w-96 p-6 space-y-5 border border-black">
                <div className="flex justify-between items-center">
                    <div className="flex gap-3 items-center">
                        <div>
                            <Image
                                className="w-10 h-10 bg-black rounded-full border-2 border-black"
                                src={props.photo}
                                alt="icon-perfil"
                            />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-lg tracking-tight font-semibold text-zinc-800">
                                {props.name}
                            </span>
                            <span className="text-sm tracking-tight text-zinc-500">{props.username}</span>
                        </div>
                    </div>
                    <Quotes size={30} color="#000000" weight="fill" />
                </div>
                <div className="flex flex-col space-y-5">
                    <span className="text-justify tracking-tight">
                        {props.comment}
                    </span>
                    <span className="flex justify-end text-sm underline">
                        {props.date}
                    </span>
                </div>
            </div>
        </section>
    );
};

export { CardTestimony };
