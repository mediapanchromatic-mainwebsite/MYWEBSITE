import React from "react";
import Image from "next/image";
import styles from "./landing.module.scss";
import { Container, Row, Col } from "react-bootstrap";

const Marquee = ({children, partners}) => {
    return (
        <div className={` relative clashDisplay d-flex align-items-center justify-content-center pt-2 ${styles.marqueeSection}`}>
            <section className={styles.enableAnimation}>
                <div className={styles.leftSideOverlay}></div>
                <div className={styles.marquee}>
                    <ul className={styles.marquee__content__right}>
                        {children}
                    </ul>

                    <ul aria-hidden="true" className={styles.marquee__content__right}>
                        {children}
                    </ul>
                </div>
                <div className={styles.rightSideOverlay}></div>
            </section>
        </div>
    );
};

export default Marquee;
