import { Footer } from "../footer";
import { Navbar } from "../navbar";
// import { useNavigate } from "react-router-dom";
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import { useEffect } from "react";
// import { motion } from 'framer-motion';
// import UseInView from "../ui/UseInView";
// import video from '../../assets/images/waves 3.mp4'
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
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";

const Prive = () => {

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

            <div className=" py-10 container">
                <div className="justify-center flex align-middle">
                    <h1 className="font-sf-pro-display text-3xl pb-5 font-bold leading-tight text-transparent  bg-clip-text bg-gradient-to-r from-[#ba9e72] via-[#ccb48d] to-[#d1ba96] sm:text-3xl lg:text-4xl">
                        Services
                    </h1>

                </div>

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

            <Footer />
        </div>

    )
}

export default Prive
