import styles from "./Navbar.module.css";
import Logo from "../../Images/Logo.png";
const Navbar = (props) => {
    return (
        <div className={styles.container}>
            <img src={props.Logo} alt="Logo" />
            <div className={styles.link_list}>
                <ul>
                    <li>
                        <a href="#Services">Services</a>{" "}
                    </li>
                    <li>
                        <a href="#About">About</a>{" "}
                    </li>
                    <li>
                        <a href="#Contact">Contact</a>{" "}
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
