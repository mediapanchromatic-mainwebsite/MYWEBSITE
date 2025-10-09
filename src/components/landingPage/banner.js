import React from "react";
import styles from './landing.module.scss'
import Image from "next/image";
import { Container } from "react-bootstrap";

const Banner = () => {
    return (
        <div className={`poppins ${styles.banner} pb-2`}>
            <div className="relative">
                <div className={`${styles.container}`}>
                    {/* <div className={`${styles.title} clashDisplay`}>
                        PANCHROMATIC 
                    </div> */}
                    <div className={`${styles.title} d-flex w-100 text-center justify-content-center fs-1 clashDisplay`}>
                        <div className={styles.panc}></div>
                        <div className={styles.panchromaticP + " " + styles.title}>P</div>
                        <div className={styles.panchromaticA + " " + styles.title}>A</div>
                        <div className={styles.panchromaticN + " " + styles.title}>N</div>
                        <div className={styles.panchromaticC + " " + styles.title}>C</div>
                        <div className={styles.panchromaticH + " " + styles.title}>H</div>
                        <div className={styles.panchromaticR + " " + styles.title}>R</div>
                        <div className={styles.panchromaticO + " " + styles.title}>O</div>
                        <div className={styles.panchromaticM + " " + styles.title}>M</div>
                        <div className={styles.panchromaticAA + " " + styles.title}>A</div>
                        <div className={styles.panchromaticT + " " + styles.title}>T</div>
                        <div className={styles.panchromaticI + " " + styles.title}>I</div>
                        <div className={styles.panchromaticCC + " " + styles.title}>C</div>
                        <div className={styles.panc}></div>
                    </div>
                    <div className={`${styles.subTitle} clashDisplay`}>
                        MEDIA 
                    </div>
                    {/* <div className={`${styles.subTitle} cinzel`}>
                        Media
                    </div> */}
                    <Container >
                        <div className="d-flex justify-content-around my-3">
                            <div className="text-center">
                                <Image
                                    src='/assets/images/icons/location.svg'
                                    height={35}
                                    width={30}
                                    alt="..."
                                    className="img-fluid"
                                />
                                <div className="mt-3 fs-12 mt-1 text-uppercase clashDisplay">
                                    Based out of India
                                </div>
                            </div>
                            <div className="text-center">
                                <Image
                                    src='/assets/images/icons/globe.png'
                                    height={35}
                                    width={35}
                                    alt="..."
                                    className="img-fluid"
                                />
                                <div className="mt-1 fs-12 mt-3 text-uppercase clashDisplay">
                                    Available All Around
                                </div>
                            </div>
                            <div className="text-center">
                                <Image
                                    src='/assets/images/icons/camera.svg'
                                    height={35}
                                    width={35}
                                    alt="..."
                                    className="img-fluid"
                                />
                                <div className="mt-3 text-uppercase clashDisplay fs-12 mt-1">
                                    Expertise in Digital Media
                                </div>
                            </div>
                        </div>
                    </Container>
                </div>
            </div>
        </div>
    )
}

export default Banner