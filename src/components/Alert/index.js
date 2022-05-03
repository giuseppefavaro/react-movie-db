import { useEffect } from "react";
import styles from "./styles.module.scss";

const Alert = (props) => {

    const visible = props.visible || false;
    const content = props.content || "";
    const timeout = props.timeout || 3000;
    const color = props.color || "";



    useEffect(() => {
        if (visible === true) {
            setTimeout(() => props.timeoutCallback(), timeout);
        }    
    // eslint-disable-next-line
    },[visible])


    const classes = [
        styles.Alert,
        visible ? styles.visible : "",
        color === "alertColorBlue" ? styles.alertColorBlue : "",
        color === "alertColorGreen" ? styles.alertColorGreen : ""
    ]

    return (
        <div className={classes.join(" ")}>
            <p>{content}</p>
        </div>
    )
}

export default Alert;