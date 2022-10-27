import styles from "./About.module.css";

const About = () => {
    return (
        <div id="About" className={styles.container}>
            <h1>About</h1>
            <p>
                FSL is a Canadian transportation and logistics company. We offer
                customized solutions to streamline and simplify the movement of
                cargo across North America. With modern equipment and state of
                the art preventative maintenance our drivers get to their
                destination safely and on time. Our success is driven by our
                commitment to our customers. We provide consistent and reliable
                up-to-date communications; all of our units are equipped with
                GPS, we can provide accurate location when updates are provided.
                Our account representatives are available 24hrs a day 365 days
                of the year. From Hot loads and Special (white glove) Loads to
                Refrigerated/Frozen loads and Dry Freight of all kinds, FSL has
                the expertise to handle cargo from any point in the United
                States and Canada. We are C-TPAT/PIP certified, your cargo is
                managed safely and secured. We have 24 hours fenced security
                yard equipped with video surveillance.
            </p>
        </div>
    );
};

export default About;
