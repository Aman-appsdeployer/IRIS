import { Navbar } from "../navbar"
import { Footer } from "../footer"
import { useNavigate } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const Prive = () => {
    const navigate = useNavigate();
    useEffect(() => {
        AOS.init({
            duration: 1200, // Adjust the duration as needed
        });
    }, []);

    const service = [
        {
            title: "Financial Product Advising",
            desc: "Guiding you towards the best investments aligned with your goals and risk tolerance."
        },
        {
            title: "Credit & Loan Arrangement",
            desc: "Securing the most favorable financing options for your needs."
        },
        {
            title: "Custody Arrangement: ",
            desc: "Safeguarding your assets with secure and reliable custodians."
        },
        {
            title: "Deal Arrangement: ",
            desc: "Facilitating investment opportunities that meet your financial objectives."
        },
        {
            title: "Asset Management",
            desc: "Building and managing a diversified portfolio for long-term growth."
        },
        {
            title: "Emphasize personalized service",
            desc: "Dedicated relationship managers who understand your unique needs and priorities."
        },
        {
            title: "Highlight ethical and sustainable investing practices",
            desc: "Aligning your investments with your values for a positive social and environmental impact."
        }
    ]

    // const hnis = [
    //     {
    //         title: "Robo-Advisory Platform",
    //         desc: "A user-friendly platform that creates personalized investment plans based on your risk profile and goals."
    //     },
    //     {
    //         title: "Curated Investment Options",
    //         desc: "Access to a wide range of ethically screened stocks, ETFs, and mutual funds."
    //     },
    //     {
    //         title: "Expert Guidance",
    //         desc: "Support from qualified investment advisors whenever you need it."
    //     },
    //     {
    //         title: "Affordable Fees",
    //         desc: "Transparent and competitive pricing structure."
    //     },
    //     {
    //         title: "Highlight the benefits of easy investing",
    //         desc: "Simple account setup, automated investing, and convenient mobile app access."
    //     }
    // ]
    return (
        <div className="max-w-screen">
            <Navbar />
            {/* <div className="bg-[url('https://alpencapital.com/assets/images/banner1.jpg')] bg-cover bg-center h-screen p-10 md:p-20 flex flex-col justify-center items-start"> */}
            <div className="bg-[url('/Yacht_3.webp')]  md:bg-[url('/YACHT1.webp')] bg-cover bg-center h-screen p-10 md:p-20 flex flex-col justify-center items-start">

                {/* <img
                    src="/sound-solutions.svg"
                    alt="Sound Solutions"
                    className="h-50 w-50 md:h-3/12 md:w-3/12"
                /> */}
                {/*  */}
                <h1 className="text-transparent font-cannes text-2xl sm:text-3xl md:text-5xl font-bold sm:my-2 mt-5 lg:w-6/12 md:w-6/12 tracking-wide bg-clip-text bg-gradient-to-r from-[#ba9e72] via-[#ccb48d] to-[#d1ba96]">Navigating Your Financial Voyage With Distinction</h1>

                <h2 className="text-white font-cannes font-bold text-xl sm:text-3xl font-base mt-2 md:w-6/12 tracking-wide ">
                    Bespoke Wealth Management Solutions
                </h2>
                <p className="text-white font-sans text-sm sm:text-base  mt-5 tracking-wide leading-4">
                    Preserving and growing your legacy, with a focus on your values.
                </p>
            </div>
            {/* <div className="flex-col flex md:flex-row mt-20 " >
                <div className="w-full md:w-2/6 flex h-80 justify-center items-center">
                    <h1 className="text-3xl pb-5 font-bold leading-tight text-transparent  bg-clip-text bg-gradient-to-r from-[#dbc7a6] via-[#3d4957] to-[#282e3a] sm:text-4xl lg:text-5xl">
                        Services
                    </h1>
                </div>
                <div className="relative flex flex-row w-full md:w-4/6 h-80 ">
                    <div className="bg-[url('https://alpencapital.com/assets/images/scale_img.png')] bg-contain bg-center h-full w-20 bg-repeat-y">
                    </div>
                    <div className="container-snap flex flex-col h-full overflow-y-auto scro gap-4 px-2 py-10 snap-center md:snap-start">
                        {service.map((item, index) => (
                            <div key={index} className="my-2 px-4 rounded-lg">
                                <h2 className="text-lg font-semibold">{item.title}</h2>
                                <p className="text-sm">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                    <div className="absolute w-full h-20 top-0 bg-gradient-to-b from-background to-transparent" />
                    <div className="absolute w-full h-20 bottom-0 bg-gradient-to-b from-transparent to-background" />
                </div>
            </div> */}
            <div className="bg-custom-dark-blue py-10 container">
                <div className="justify-center flex align-middle">
                    <h1 className="font-cannes text-3xl pb-5 font-bold leading-tight text-transparent  bg-clip-text bg-gradient-to-r from-[#ba9e72] via-[#ccb48d] to-[#d1ba96] sm:text-4xl lg:text-6xl">
                        Services
                    </h1>

                </div>
                <div className="flex flex-col items-center justify-center gap-4 mt-5 px-5 ">
                    {service.map((service, index) => (
                        <div
                            key={index}
                            data-aos={index % 2 === 0 ? "fade-up-right" : "fade-up-left"}
                            className="w-7/12 rounded-lg px-4 py-2  shadow-sm hover:shadow-md transition-shadow duration-200 "
                            style={{ backgroundImage: 'linear-gradient(110deg, #3d4957, 55%, #4a5663)' }}
                        >
                            <div>
                                <h3 className="text-base font-semibold text-card-heading">{service.title}</h3>
                                <h2 className="text-sm text-slate-300 mt-1">{service.desc}</h2>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex justify-center mt-10">
    <button
        className="md:col-start-2 inline-flex h-10 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#3d4957,45%,#1e2631,55%,#3d4957)] bg-[length:200%_100%] px-4 lg:px-6 font-medium text-background transition-transform transform hover:scale-105 duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 whitespace-nowrap"
        type="button"
        onClick={() => navigate("/hnis")}
        data-aos="zoom-in" // AOS animation
    >
        PROSPER
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-4 h-4 ms-1"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
            />
        </svg>
    </button>
</div>

            </div><svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                className="w-4 h-4"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                ></path>
            </svg>
            {/* <div className="flex-col-reverse flex md:flex-row mt-20 px-10">
                <div className="relative h-80 flex flex-row w-full md:w-4/6">
                    <div className="container-snap flex flex-col h-full overflow-y-auto scro gap-4 px-2 py-10">
                        {hnis.map((item, index) => (
                            <div key={index} className="my-2 px-4 rounded-lg">
                                <h2 className="text-lg text-right font-semibold">{item.title}</h2>
                                <p className="text-sm text-right">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                    <div className="bg-[url('https://alpencapital.com/assets/images/scale_img.png')] bg-contain bg-center h-full w-20 bg-repeat-y" />
                    <div className="absolute w-full h-20 top-0 bg-gradient-to-b from-background to-transparent" />
                    <div className="absolute w-full h-20 bottom-0 bg-gradient-to-b from-transparent to-background" />
                </div>
                <div className="w-full md:w-2/6 h-80 flex flex-col justify-center">
                    <h1 className="text-xl text-center pb-2 font-bold leading-tight text-transparent  bg-clip-text bg-gradient-to-r from-[#dbc7a6] via-[#3d4957] to-[#282e3a] sm:text-4xl lg:text-3xl">
                        Road to becoming HNI's
                    </h1>
                    <h2 className="text-xl text-center pb-2 font-medium ">
                        Aspire. Achieve. Your wealth journey starts now.
                    </h2>
                    <p className="text-base text-center pb-2 font-medium">
                        Smart investing made simple, for a brighter tomorrow.
                    </p>
                </div>
            </div> */}
            <Footer />
        </div>

    )
}

export default Prive
