import Footer from "../components/Footer";
import Header from "../components/Header";
import BecomeOurPremPartner from "../components/contentBlocks/BecomeOurPremiumPartner";
import Contact from "../components/contentBlocks/ContactUs";


export const ContactUs = () => { // page 5
    return (
        <section>
            <Header />
            <Contact />
            <BecomeOurPremPartner />
            <Footer />
        </section>
    );
};