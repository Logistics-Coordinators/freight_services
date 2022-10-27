import styles from "./Services.module.css";
import Form from "../../Components/Form/Form";

const Services = () => {
    return (
        <div id="Services" className={styles.container}>
            <h1>Avail Services</h1>
            <Form
                inputVal1="Location"
                inputVal2="Destination"
                inputVal3="CargoSize"
                inputVal4="Email"
                inputVal5="ContactNumber"
                title="Details"
                buttonVal="Get a quote"
            />
        </div>
    );
};

export default Services;
