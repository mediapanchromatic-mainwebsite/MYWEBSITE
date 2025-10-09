import React from "react";
import Image from "next/image";
import styles from "./landing.module.scss";
import { Container, Row, Col } from "react-bootstrap";

const Marquee = ({children, partners, type=""}) => {
    return (
        <div className={` clashDisplay ${styles.marqueeSection}`}>
            {type == "partners" ? 
                <div className={`${styles.header} clashDisplay`}>
                    OUR TRUSTED PARTNERS
                    <div className={styles.imageIcon}>
                        <Image 
                            src="/assets/images/icons/partner_icon.png"
                            height={128}
                            width={132}
                            alt="..."
                            className="img-fluid"
                        />
                    </div>
                </div> : 
                <div className={styles.clientHeader}>
                    <Image
                        src="/assets/images/icons/client_icon.png"
                        height={124}
                        width={153}
                        className={`img-fluid ${styles.clientIcon}`}
                        alt="..."
                    />
                    <div className={` ${styles.sectionHeaderMarque}`}>
                        Testimonials from our
                        <div className={styles.textGap}>
                            <div className={styles.sectionHeaderImage}>
                                <Image
                                    src="/assets/images/icons/zig-zag.png"
                                    height={20}
                                    width={125}
                                    className={styles.headerImage}
                                    alt="..."
                                />
                            </div>
                        </div>
                        Trusted clients
                    </div>
                </div>
            }
            <section className={` d-flex align-items-center justify-content-center ${styles.enableAnimation}`}>
                <div className={styles.leftSideOverlay}></div>
                <div className={styles.marquee}>
                    <ul className={styles.marquee__content}>
                        {children}
                    </ul>

                    <ul aria-hidden="true" className={styles.marquee__content}>
                        {children}
                    </ul>
                </div>
                <div className={styles.rightSideOverlay}></div>
            </section>
        </div>
    );
};

export default Marquee;
