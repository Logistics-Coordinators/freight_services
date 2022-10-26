import styles from "./About.module.css";

import Cards from "../../Components/Cards/Cards";

import AboutImage1 from "../../Images/AboutImg1.png";
import AboutImage2 from "../../Images/AboutImg2.jpg";
import AboutImage3 from "../../Images/AboutImg3.jpg";

const aboutContent = [
    {
        url: { AboutImage1 },
        title: "TRUCKING SERVICES",
        desc: "We offer a wide range of services through North America: FTL, LTL, Expedited, Team, Refrigerated",
        id: 0,
    },
    {
        url: { AboutImage2 },
        title: "EXPEDITED LOADS",
        desc: "We understand that things happen, you may need to move a Rush load. Not to worry, we have you covered. FSL assets are available to handle any type of shipment. Give us a call, we will work with you.",
        id: 1,
    },
    {
        url: { AboutImage3 },
        title: "INTERMODAL SERVICES",
        desc: "Pulling containers out of CP or CN, give us a call. We can handle any container sizes.",
        id: 2,
    },
];

const About = () => {
    return (
        <div className={styles.container}>
            {aboutContent.map((items) => (
                <Cards
                    url={items.url.AboutImage1}
                    title={items.title}
                    desc={items.desc}
                    key={items.id}
                />
            ))}
        </div>
    );
};

export default About;
