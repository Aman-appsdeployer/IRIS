import { useEffect } from "react";


const Hnis = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    

    const hnis = [
        {
            title: "Robo-Advisory Platform",
            desc: "A user-friendly platform that creates personalized investment plans based on your risk profile and goals."
        },
        {
            title: "Curated Investment Options",
            desc: "Access to a wide range of ethically screened stocks, ETFs, and mutual funds."
        },
        {
            title: "Expert Guidance",
            desc: "Support from qualified investment advisors whenever you need it."
        },
        {
            title: "Affordable Fees",
            desc: "Transparent and competitive pricing structure."
        },
        {
            title: "Highlight the benefits of easy investing",
            desc: "Simple account setup, automated investing, and convenient mobile app access."
        }
    ]
    return (
        <div className="">
            <div className="flex-col flex md:flex-row  px-10">
                <div className="w-full md:w-2/6 flex flex-col justify-center">
                    <h1 className="text-xl text-center pb-2 font-bold leading-tight text-transparent  bg-clip-text bg-gradient-to-r from-[#ba9e72] via-[#ccb48d] to-[#d1ba96] sm:text-4xl lg:text-3xl">
                        Road to becoming HNI's
                    </h1>
                    <h2 className="text-xl text-secondary text-center pb-2 font-medium ">
                        Aspire. Achieve. Your wealth journey starts now.
                    </h2>
                    <p className="text-base text-center text-secondary pb-2 font-medium">
                        Smart investing made simple, for a brighter tomorrow.
                    </p>
                </div>
                <div className="relative  flex flex-row w-full md:w-4/6">
                    <div className="container-snap flex flex-col h-full overflow-y-auto scro px-2 py-10">
                        {hnis.map((item, index) => (
                            <div key={index} className="my-2 px-4 rounded-lg py-2  shadow-sm hover:shadow-md transition-shadow duration-200 "
                            style={{ backgroundImage: 'linear-gradient(110deg, #3d4957, 55%, #4a5663)' }}>
                                <h2 className="text-sm font-semibold text-card-heading">{item.title}</h2>
                                <p className="text-slate-300 mt-1 text-sm">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                    {/* <div className="bg-[url('https://alpencapital.com/assets/images/scale_img.png')] bg-contain bg-center h-full w-20 bg-repeat-y" />
            <div className="absolute w-full h-20 top-0 bg-gradient-to-b from-background to-transparent" />
            <div className="absolute w-full h-20 bottom-0 bg-gradient-to-b from-transparent to-background" /> */}
                </div>
            </div>
        </div>
    );
};

export default Hnis;
