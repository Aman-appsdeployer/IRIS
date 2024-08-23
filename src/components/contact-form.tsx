import { useState } from "react";
// import { Input } from "./ui/input";
// import { Label } from "./ui/label";
import '../styles/contact-form.css'
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";

const ContactForm = () => {
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState("");
    const [name, setName] = useState("");

    const words = [
        {
            text: "Begin",
        },
        {
            text: "your",
        },
        {
            text: "Journey.",
        },
        {
            text: "Start a",
        },
        {
            text: "Converstation",
            className: "text-[#F5DEB3]",
        },
    ];

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        console.log(email, name, number);

        setEmail("");
        setName("");
        setNumber("");
    };

    return (
        <div className="flex flex-col gap-8  py-12 pb-12 items-center justify-center antialiased">
            <div>
                <h1 className="text-2xl font-black   tracking-tighter md:text-3xl container text-center mb-5">
                    {/* Begin your Journey. <br /> <span className="md:text-2xl text-xl"> Start a Conversation</span> */}
                    {/* <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#dbc7a6] via-[#3d4957] to-[#282e3a] tracking-normal px-1">
                        <span className="font-extrabold">Journey</span>
                    </span>
                    . Start a{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#dbc7a6] via-[#3d4957] to-[#282e3a] tracking-normal px-1">
                        <span className="font-extrabold">conversation</span>
                    </span>
                    . */}
                    <TypewriterEffectSmooth words={words} />
                </h1>
            </div>
            <form
                onSubmit={onSubmit}
                className="flex flex-col  place-items-center container gap-6"
            >
                {/* <div className="grid  sm:min-w-96 min-w-72 items-center gap-3">
                    <Input
                        type="text"
                        id="text"
                        placeholder="Your name"
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                        className="rounded-xl"
                        style={{ boxShadow: "inset 2px 5px 10px rgb(255, 2555, 255)" }}
                    />
                </div>
                <div className="grid sm:min-w-96 min-w-72 items-center gap-3">
                    <Input
                        type="email"
                        id="email"
                        placeholder="Your Email"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        className="rounded-xl"
                        style={{ boxShadow: "inset 2px 5px 10px rgb(255, 2555, 255)" }}
                        required
                    />
                </div> */}
                <div className="inputGroup min-w-96">
                    <input
                        autoComplete="off"
                        required
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <label htmlFor="name">Name</label>
                </div>
                <div className="inputGroup min-w-96">
                    <input
                        autoComplete="off"
                        required
                        type="email"
                        id="name"
                        value={name}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <label htmlFor="email">Email</label>
                </div>
                <div className="min-w-96 relative">
                    <div className="flex border-2 border-[rgb(200, 200, 200)] rounded-3xl relative">
                        <span className="flex items-center border-r border-[rgb(200, 200, 200)] px-3">
                            +971
                        </span>
                        <input
                            type="tel"
                            id="tel"
                            className="w-full px-4 py-[11px] border-none outline-none bg-transparent rounded-e-xl peer"
                            onChange={(e) => setNumber(e.target.value)}
                            value={number}
                        />
                        <label
                            htmlFor="tel"
                            className="absolute left-16 top-[0.5rem] transform -translate-y-[-8%] text-gray-500 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-0 peer-focus:top-1 peer-focus:scale-90 peer-focus:-translate-y-[1.2rem] bg-white px-1"
                        >
                            Phone number
                        </label>
                    </div>
                </div>
                <button className="submitButton mt-3">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default ContactForm;
