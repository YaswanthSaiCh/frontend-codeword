import React from "react";
import 'bootstrap/dist/css/bootstrap.css'
import styles from '../styles/Home.module.css'

const PasswordValidator = ({
    validity: { minLen, minChar, number, specialChar }
}) => {
    return (
        <div className={styles.alertField}>
            <p className="fw-bold mb-0">Password must contain:</p>
            <ul className="text-muted list-unstyled">
                <PasswordStrengthIndicatorItem
                    isValid={minLen}
                    text="Have at least 6 characters"
                />
                <PasswordStrengthIndicatorItem
                    isValid={minChar}
                    text="Have at least 1 alphabet"
                />
                <PasswordStrengthIndicatorItem
                    isValid={number}
                    text="Have at least 1 number"
                />
                <PasswordStrengthIndicatorItem
                    isValid={specialChar}
                    text="Have at least 1 special character"
                />
            </ul>
        </div>
    );
};

const PasswordStrengthIndicatorItem = ({ isValid, text }) => {
    const highlightClass = isValid
        ? "text-success"
        : isValid !== null
            ? "text-danger"
            : "";
    return <li className={highlightClass}>{text}</li>;
};

export default PasswordValidator;