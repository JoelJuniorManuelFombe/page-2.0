import {
    BiLogoFacebook,
    BiLogoGithub,
    BiLogoInstagram,
    BiLogoLinkedin,
} from "react-icons/bi";

const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();

    return (
        <section className="pb-10 flex flex-col items-center justify-center space-y-5">
            <div className="flex flex-col items-center space-y-5">
                <div>
                    <h1 className="text-2xl text-center font-bold tracking-tight">PagePoint</h1>
                </div>
                <div className="text-3xl flex gap-5">
                    <span>
                        <BiLogoFacebook />
                    </span>
                    <span>
                        <BiLogoInstagram />
                    </span>
                    <span>
                        <BiLogoLinkedin />
                    </span>
                    <span>
                        <BiLogoGithub />
                    </span>
                </div>
            </div>
            <div>
                <span>{year} © PagePoint</span>
            </div>
        </section>
    );
};

export { Footer };
