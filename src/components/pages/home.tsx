// import { Announcement } from "../announcement";
import ContactForm from "../contact-form";
// import Exclusives from "../exclusives";
// import { Features } from "../features";
import Hero_ from "../hero_";
// import Hero from "../hero";
import News from "../news";
import RegulatoryTieups from "../regulatory-tieups";
import Hero from "../ui/hero";

const Home = () => {
    return (
        <div className="overflow-x-hidden">
            {/* <Announcement /> */}
            <Hero />
            {/* <Hero/> */}
            <Hero_/>
            {/* <Features /> */}
            <RegulatoryTieups />
            {/* <Video /> */}
            {/* <Screening /> */}
            {/* <Press /> */}
            {/* <Download /> */}
            {/* <Portfolio /> */}
            {/* <Exclusives /> */}
            <News />
            <ContactForm />
        </div>
    );
};

export default Home;
