import { Route, Routes } from "react-router-dom";
import AboutPage from "./components/pages/about";
import Advisory from "./components/pages/advisory";
import ContactPage from "./components/pages/contact";
import Cookies from "./components/pages/cookies";
import Disclaimer from "./components/pages/disclaimer";
import Ethosphere from "./components/pages/ethosphere";
import Faq from "./components/pages/faq";
import Home from "./components/pages/home";
import Iris from "./components/pages/iris";
import Press from "./components/pages/press";
import Privacy from "./components/pages/privacy";
import Prive from "./components/pages/prive";
import Stock from "./components/pages/stock";
import Terms from "./components/pages/terms";
import RootLayout from "./components/root-layout";
// import {Hnis} from "./components/pages/hnis";

const App = () => {
    return (
        <div className="min-h-screen   text-foreground  bg-black">
            <Routes>
                <Route element={<RootLayout />}>
                    <Route index element={<Home />} />
                    <Route path="faqs" element={<Faq />} />
                    <Route path="contact" element={<ContactPage />} />
                    <Route path="about" element={<AboutPage />} />
                    <Route path="advisory" element={<Advisory />} />
                    <Route path="press" element={<Press />} />
                    <Route path="privacy" element={<Privacy />} />
                    <Route path="terms" element={<Terms />} />
                    <Route path="disclaimer" element={<Disclaimer />} />
                    <Route path="cookies" element={<Cookies />} />
                    <Route path="stock" element={<Stock />} />
                    <Route path="iris" element={<Iris />} />
                    <Route path="ethosphere" element={<Ethosphere />} />
                    {/* <Route path="hnis" element={<Hnis />} /> */}
                </Route>
                <Route path="prive" element={<Prive />} />
            </Routes>
        </div>
    );
};

export default App;

