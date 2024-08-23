import { Navbar } from "../navbar"
import { Footer } from "../footer"
// import { useNavigate } from "react-router-dom";
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import { useEffect } from "react";
// import { motion } from 'framer-motion';
// import UseInView from "../ui/UseInView";
// import video from '../../assets/images/waves 3.mp4'
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import {
    IconArrowWaveRightUp,
    IconBoxAlignRightFilled,
    IconBoxAlignTopLeft,
    IconClipboardCopy,
    IconFileBroken,
    IconSignature,
    IconTableColumn,
} from "@tabler/icons-react";
import { useEffect, useState } from "react";

const Prive = () => {
    // const navigate = useNavigate();
    // useEffect(() => {
    //     AOS.init({
    //         duration: 1200, // Adjust the duration as needed
    //     });
    // }, []);

    // const service = [
    //     {
    //         title: "Financial Product Advising",
    //         desc: "Guiding you towards the best investments aligned with your goals and risk tolerance."
    //     },
    //     {
    //         title: "Credit & Loan Arrangement",
    //         desc: "Securing the most favorable financing options for your needs."
    //     },
    //     {
    //         title: "Custody Arrangement: ",
    //         desc: "Safeguarding your assets with secure and reliable custodians."
    //     },
    //     {
    //         title: "Deal Arrangement: ",
    //         desc: "Facilitating investment opportunities that meet your financial objectives."
    //     },
    //     {
    //         title: "Asset Management",
    //         desc: "Building and managing a diversified portfolio for long-term growth."
    //     },
    //     {
    //         title: "Emphasize personalized service",
    //         desc: "Dedicated relationship managers who understand your unique needs and priorities."
    //     },
    //     {
    //         title: "Highlight ethical and sustainable investing practices",
    //         desc: "Aligning your investments with your values for a positive social and environmental impact."
    //     }
    // ]

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

    const [videoSrc, setVideoSrc] = useState("/MOBILE VERSION.mp4");

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 768) {
                // Mobile view
                setVideoSrc("/MOBILE VERSION.mp4"); // Update this path to your mobile-specific video
            } else {
                // Desktop/Tablet view
                setVideoSrc("/MOBILE VERSION.mp4");
            }
        };

        // Set video source on initial load
        handleResize();

        // Listen for window resize events
        window.addEventListener("resize", handleResize);

        // Clean up the event listener on component unmount
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const Skeleton = () => (
        <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
    );
    const services = [
        {
            title: "Financial Product Advising",
            description: "Guiding you towards the best investments aligned with your goals and risk tolerance.",
            header: <Skeleton />,
            icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
            image: '/Financial.png'
        },
        {
            title: "Credit & Loan Arrangement",
            description: "Securing the most favorable financing options for your needs.",
            header: <Skeleton />,
            icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
            image: '/loan.png'
        },
        {
            title: "Custody Arrangement",
            description: "Safeguarding your assets with secure and reliable custodians.",
            header: <Skeleton />,
            icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
            image: '/custody.png'
        },
        {
            title: "Deal Arrangement",
            description:
                "Facilitating investment opportunities that meet your financial objectives.",
            header: <Skeleton />,
            icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
            image: '/Deal.png'
        },
        {
            title: "Asset Management",
            description: "Building and managing a diversified portfolio for long-term growth.",
            header: <Skeleton />,
            icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
            image: '/Asset.png'

        },
        {
            title: "Emphasize personalized service",
            description: "Dedicated relationship managers who understand your unique needs and priorities.",
            header: <Skeleton />,
            icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
            image: '/Emphasize.png'
        },
        {
            title: "Highlight ethical and sustainable investing practices",
            description: "Aligning your investments with your values for a positive social and environmental impact.",
            header: <Skeleton />,
            icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
            image: '/Highlight.png'
        },
    ];



    return (
        <div className="max-w-screen">
            <Navbar />
            {/* <div className="bg-[url('https://alpencapital.com/assets/images/banner1.jpg')] bg-cover bg-center h-screen p-10 md:p-20 flex flex-col justify-center items-start"> */}
            {/* Background Video Section */}
            <div className="relative h-screen p-10 md:p-20 flex flex-col justify-center items-start overflow-hidden">
                <video
                    className="absolute inset-0 w-full h-full object-cover"
                    autoPlay
                    muted
                    playsInline
                    loop
                >
                    <source src={videoSrc} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

                <div className="relative z-10 text-center md:text-left">
                    <h1 className="text-transparent font-sf-pro-display text-xl sm:text-2xl md:text-3xl font-bold sm:my-2 mt-5 lg:w-8/12 md:w-6/12 tracking-wide bg-clip-text bg-gradient-to-r from-[#ba9e72] via-[#ccb48d] to-[#d1ba96]">
                        Navigating Your Financial Voyage With Distinction
                    </h1>
                    <h2 className="text-custom-dark-blue font-sf-pro-display font-bold text-lg sm:text-2xl font-base mt-2 md:w-6/12 tracking-wide">
                        Bespoke Wealth Management Solutions
                    </h2>
                    <p className="text-black font-sf-pro-display  text-sm sm:text-base mt-5 tracking-wide leading-4">
                        Preserving and growing your legacy, with a focus on your values.
                    </p>
                </div>
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
            <div className=" py-10 container">
                <div className="justify-center flex align-middle">
                    <h1 className="font-sf-pro-display text-3xl pb-5 font-bold leading-tight text-transparent  bg-clip-text bg-gradient-to-r from-[#ba9e72] via-[#ccb48d] to-[#d1ba96] sm:text-3xl lg:text-4xl">
                        Services
                    </h1>

                </div>
                {/* <div className="flex flex-col items-center justify-center gap-4 mt-5 px-5 ">
                    {service.map((service, index) => {
                        // const [ref, inView] = UseInView();
                        return (
                            <motion.div
                                // ref={ref}
                                key={index}
                                // initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50, y: 50 }}
                                // animate={inView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, x: index % 2 === 0 ? 50 : -50, y: 50 }}
                                // transition={{ duration: 0.8, ease: 'easeOut' }}
                                className="w-full max-w-sm  lg:max-w-2xl  rounded-lg px-4 py-2  shadow-sm hover:shadow-md transition-shadow duration-200"
                                style={{ backgroundImage: 'linear-gradient(110deg, #ba9e72, 55%, #ccb48d)' }}
                            >
                                <div>
                                    <h3 className="sm:text-base text-sm font-bold text-custom-dark-blue">{service.title}</h3>
                                    <h2 className="sm:text-base text-sm text-gray-950 mt-1">{service.desc}</h2>
                                </div>
                            </motion.div>
                        )
                    })}
                </div> */}
                <BentoGrid className="max-w-4xl mx-auto">
                    {services.map((service, i) => (
                        <BentoGridItem
                            key={i}
                            title={service.title}
                            description={service.description}
                            header={service.header}
                            icon={service.icon}
                            image={service.image}
                            className={i === 3 || i === 6 ? "md:col-span-2" : ""}
                        />
                    ))}
                </BentoGrid>
                {/* <div className="flex justify-center mt-10">
                    <button
                        className="md:col-start-2 inline-flex h-10 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#3d4957,45%,#1e2631,55%,#3d4957)] bg-[length:200%_100%] px-4 lg:px-6 font-medium text-background transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 whitespace-nowrap"
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
                </div> */}

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
