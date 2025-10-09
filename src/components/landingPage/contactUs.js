import React, { useRef } from "react"
import styles from "./landing.module.scss";
import { Button, Container } from "react-bootstrap";
import ImageCollage from "@/components/landingPage/imageCollage"
import Image from "next/image";

const ContactUs = () => {

    return (
        <div className={` clashDisplay ${styles.contactUs}`}>
            <div className={styles.contactContainer}>
                <div className={styles.header}>
                    <div>Let’s Work</div>
                    <div className={styles.constactUsAnim}>
                        <div className={styles.contactHeaderImage}>
                            <Image
                                src="/assets/images/icons/zig-zag.png"
                                height={20}
                                width={125}
                                className={styles.headerImage}
                                alt="..."
                            />
                        </div>
                    </div>
                    <div style={{ marginTop: "-2rem" }}> Together</div>
                </div>

                <div className={styles.contactusSection}>
                    <div className="d-flex justify-content-between  text-secondary fs-2" style={{ marginTop: "5rem" }}>
                        <div className="tab-hover">
                            <a 
                                href="https://www.linkedin.com/company/panchromatic-media/" 
                                className="flip-animate text-light"
                                target="_blank"
                            >
                                <span data-hover="LinkedIn" className="hover-text-tab text-secondary">
                                    LinkedIn
                                </span>
                            </a>
                        </div>
                        <div className="tab-hover">
                            <a  
                                href="https://www.instagram.com/panchromaticmedia?igsh=MXhvNnZjaHQyM2Rydg=="
                                className="flip-animate text-light"
                                target="_blank"
                            >
                                <span data-hover="Instagram" className="hover-text-tab text-secondary">
                                    Instagram
                                </span>
                            </a>
                        </div>
                    </div>
                    {/* <div className="d-flex justify-content-between  text-secondary fs-2"  style={{marginTop: "5rem"}}>
                        <div>Dribble</div>
                        <div>LinkedIn</div>
                    </div> */}
                    <div className="d-flex justify-content-center text-secondary fs-2" style={{ marginTop: "5rem" }}>
                        <div className="tab-hover">
                            <a 
                                href=" https://youtube.com/@panchromaticmedia?si=jLzefFRTenISwdJs" 
                                className="flip-animate text-light"
                                target="_blank"
                            >
                                <span data-hover="YouTube" className="hover-text-tab text-secondary">
                                    YouTube
                                </span>
                            </a>
                        </div>
                    </div>

                    <div className={styles.contactBtn}>
                        <Button className={styles.button}>Contact Now</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
