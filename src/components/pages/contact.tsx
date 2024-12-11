// import { useState } from "react";
// import { Input } from "../ui/input";
// import { Label } from "../ui/label";

// const ContactPage = () => {
//     const [email, setEmail] = useState("");
//     const [number, setNumber] = useState("");
//     const [name, setName] = useState("");

//     const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//         e.preventDefault();

//         console.log(email, name, number);

//         setEmail("");
//         setName("");
//         setNumber("");
//     };

//     return (
//         <section className="py-10 sm:py-16 lg:py-20">
//             <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
//                 <div className="max-w-3xl mx-auto text-center">
//                     <h2 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-[#dbc7a6] via-[#3d4957] to-[#282e3a]">
//                         Connect with us
//                     </h2>
//                     <p className="max-w-2xl mx-auto mt-4 text-base leading-relaxed text-secondary">
//                         Please visit our Learn section for our{" "}
//                         <a
//                             href="faqs"
//                             className="text-primary underline-offset-4 underline"
//                         >
//                             frequently asked questions
//                         </a>{" "}
//                         on more about Nuqi and investing through our mobile app.
//                         You can share questions about your Nuqi account through
//                         our mobile app.
//                     </p>
//                 </div>
//                 <form
//                     onSubmit={onSubmit}
//                     className="grid md:grid-cols-3 gap-6 md:gap-8 place-items-center mt-10"
//                 >
//                     <div className="grid w-full items-center gap-3">
//                         <Label htmlFor="text">Name</Label>
//                         <Input
//                             type="text"
//                             id="text"
//                             placeholder="Your name"
//                             onChange={(e) => setName(e.target.value)}
//                             value={name}
//                         />
//                     </div>
//                     <div className="grid w-full items-center gap-3">
//                         <Label htmlFor="email">Email</Label>
//                         <Input
//                             type="email"
//                             id="email"
//                             placeholder="Your email"
//                             onChange={(e) => setEmail(e.target.value)}
//                             value={email}
//                             required
//                         />
//                     </div>
//                     <div className="grid w-full items-center gap-3">
//                         <Label htmlFor="tel">Phone number</Label>
//                         <div className="flex border border-gray-300 rounded-md">
//                             <span className="flex items-center border-r px-3">
//                                 +971
//                             </span>
//                             <Input
//                                 type="tel"
//                                 id="tel"
//                                 placeholder="Your phone number"
//                                 className="border-none"
//                                 onChange={(e) => setNumber(e.target.value)}
//                                 value={number}
//                             />
//                         </div>
//                     </div>

//                     <button className="md:col-start-2 inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#3d4957,45%,#282e3a,55%,#3d4957)] bg-[length:200%_100%] px-6 font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
//                         Submit
//                     </button>
//                 </form>
//             </div>
//         </section>
//     );
// };

// export default ContactPage;








import { useState } from "react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

const ContactPage = () => {
    const [email, setEmail] = useState<string>("");
    const [number, setNumber] = useState<string>("");
    const [name, setName] = useState<string>("");
    const [message, setMessage] = useState<string>("");

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        console.log({ name, email, number, message });

        // Clear inputs after submission
        setEmail("");
        setName("");
        setNumber("");
        setMessage("");
    };

    return (
        <section className="bg-black text-white py-16">
            <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
                        Your questions, Our expertise – Let’s talk
                    </h2>
                </div>

                {/* Main Grid Section */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Global Offices */}
                    <div className="space-y-6">
                        <h3 className="text-lg font-semibold text-[#00c9ff]">
                            Global Offices
                        </h3>
                        {/* UAE Office */}
                        <div className="p-6 bg-[#0a0a0a] rounded-lg border border-[#00c9ff] shadow-md">
                            <h4 className="text-lg font-semibold">UAE</h4>
                            <p className="mt-2 text-sm">
                                Office 501, 05th Floor, Innovation One, DIFC,
                                Dubai, UAE
                            </p>
                        </div>
                        {/* India Office */}
                        <div className="p-6 bg-[#0a0a0a] rounded-lg border border-[#00c9ff] shadow-md">
                            <h4 className="text-lg font-semibold">India</h4>
                            <p className="mt-2 text-sm">
                                Office Nos 206, Parinee I, Veera Desai Road,
                                Andheri West, Mumbai - 400053
                            </p>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="col-span-2 p-6 bg-[#0a0a0a] rounded-lg border border-[#00c9ff] shadow-md">
                        <h3 className="text-lg font-semibold text-[#00c9ff] mb-6">
                            Contact Us
                        </h3>
                        <form onSubmit={onSubmit} className="space-y-6">
                            {/* Name Input */}
                            <div>
                                <Label htmlFor="text" className="text-sm">
                                    Name
                                </Label>
                                <Input
                                    type="text"
                                    id="text"
                                    placeholder="Your name"
                                    className="mt-2 w-full bg-[#000] text-white border border-[#00c9ff] rounded-md"
                                    onChange={(e) => setName(e.target.value)}
                                    value={name}
                                    required
                                />
                            </div>

                            {/* Email Input */}
                            <div>
                                <Label htmlFor="email" className="text-sm">
                                    Email
                                </Label>
                                <Input
                                    type="email"
                                    id="email"
                                    placeholder="Your email"
                                    className="mt-2 w-full bg-[#000] text-white border border-[#00c9ff] rounded-md"
                                    onChange={(e) => setEmail(e.target.value)}
                                    value={email}
                                    required
                                />
                            </div>

                            {/* Phone Number Input */}
                            <div>
                                <Label htmlFor="tel" className="text-sm">
                                    Phone Number
                                </Label>
                                <div className="flex items-center mt-2 border border-[#00c9ff] rounded-md bg-[#000]">
                                    <span className="px-3 bg-[#0a0a0a] text-[#00c9ff]">
                                        +971
                                    </span>
                                    <Input
                                        type="tel"
                                        id="tel"
                                        placeholder="Your phone number"
                                        className="flex-1 border-none bg-transparent text-white"
                                        onChange={(e) =>
                                            setNumber(e.target.value)
                                        }
                                        value={number}
                                        required
                                    />
                                </div>
                            </div>

                            {/* Message Input */}
                            <div>
                                <Label htmlFor="message" className="text-sm">
                                    Message
                                </Label>
                                <textarea
                                    id="message"
                                    placeholder="Your message"
                                    className="mt-2 w-full bg-[#000] text-white border border-[#00c9ff] rounded-md p-3"
                                    rows={4}
                                    onChange={(e) =>
                                        setMessage(e.target.value)
                                    }
                                    value={message}
                                    required
                                ></textarea>
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="w-full h-12 bg-[#00c9ff] text-black font-semibold rounded-md hover:bg-[#0086b3] transition"
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactPage;
