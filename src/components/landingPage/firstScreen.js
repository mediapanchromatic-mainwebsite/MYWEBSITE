import React from "react";
import Image from "next/image";
import styles from './landing.module.scss'

const FirstScreen = () => {
    return (
        <div className={styles.firstScreen}>
            <Image
                src='/assets/images/landing_page/first_screen.png'
                height={994}
                width={1491}
                className="img-fluid"
                role="button"
                alt="..."
            />
        </div>
    )
}

export default FirstScreen;