import "./App.css";

import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import AboutCard from "./Components/AboutCard/AboutCard";
import Services from "./Components/Services/Services";
import Footer from "./Components/Footer/Footer";
import About from "./Components/About/About";

import contactIcon from "./Images/phone.svg";
import emailIcon from "./Images/mail.svg";

import CompanyLogo from "./Images/fsl_logo_nav.png"; //Company Logo

function App() {
    const contactNo = "647-273-2025"; //Company Contact Number
    const email = "info@freightstarts.com"; // Company Email Address
    return (
        <div className="App">
            <Navbar Logo={CompanyLogo} />
            <Hero
                contactNo={contactNo}
                email={email}
                contactIcon={contactIcon}
                emailIcon={emailIcon}
            />
            <About />
            <AboutCard />
            <Services />
            <Footer
                contactNo={contactNo}
                email={email}
                contactIcon={contactIcon}
                emailIcon={emailIcon}
                Logo={CompanyLogo}
            />
        </div>
    );
}

export default App;
