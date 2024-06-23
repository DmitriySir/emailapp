import React from "react";
import styles from "./Header.module.css"
import Divider from '@mui/material/Divider';


export const Header = () => {

    return (
        <>
            <div className={styles.header__wrapper}>
                <h3 className={styles.header__title}>Change your private information</h3>
                <p className={styles.header__text}>Please read <a href="https://www.google.ru/">our terms</a> of use to be informed how we manage your private data.</p>
            </div>
            <Divider variant="middle" />
        </>
    )

}