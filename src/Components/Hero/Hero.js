import styles from "./Hero.module.css";

import Search from "../../Components/Search/Search";

import HeroImage from "../../Images/Hero.svg";

const Hero = (props) => {
    return (
        <div className={styles.container}>
            <div className={styles.banner}>
                <li>
                    <div className={styles.banner_info}>
                        <img src={props.contactIcon} alt="Phone Number" />
                        <h3>{props.contactNo}</h3>
                    </div>
                    <div className={styles.banner_info}>
                        <a
                            href="mailto:info@freightstarts.com
"
                        >
                            <img src={props.emailIcon} alt="Mail" />
                            <h3>{props.email}</h3>
                        </a>
                    </div>
                </li>
                {/* <Search /> */}
            </div>
            <div className={styles.content_container}>
                <h1>Transport Cargo Everywhere</h1>
                <p>
                    100% guaranteed safe delievery with 30+ highly
                    modernized delivery vehicles
                </p>
            </div>
            <img src={HeroImage} alt="" />
        </div>
    );
};

export default Hero;
