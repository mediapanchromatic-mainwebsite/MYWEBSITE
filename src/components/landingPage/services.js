import React, { useRef } from "react";
import useIsVisible from "@/hooks/useIsVisible";
import Image from "next/image";
import styles from "./landing.module.scss";
import { Container, Row, Col } from "react-bootstrap";

const Services = () => {
    const targetParagraph = useRef();
    const targetParagraphVisible = useIsVisible(targetParagraph);

    const styling = {
        dynamicBackground: {
            transition: 'transform 2s',
            transform: targetParagraphVisible ? 'translateX(0%)' : 'translateX(-90%)'
        }
    };

    return (
        <div className={` clashDisplay ${styles.services}`}>
            <Container className="pb-5 text-white">
                <div className={styles.title}>
                    <div className={`pt-0 ${styles.sectionHeader}`}>
                        our 
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
                        Services
                        <div className={styles.wave}>
                            <Image
                                src="/assets/images/icons/rocket-line.png"
                                height={155}
                                width={325}
                                // className={` img-fluid`}
                                alt="..."
                            />
                        </div>
                        <div className={styles.waveRocket}>
                            <Image
                                src="/assets/images/icons/rocket.png"
                                height={59}
                                width={95}
                                // className={` img-fluid`}
                                alt="..."
                            />
                        </div>
                    </div>

                    {/* <div className={styles.kiteImg}>
                        <Image
                            src="/assets/images/icons/rocket-line.png"
                            height={155}
                            width={325}
                            // className={` img-fluid`}
                            alt="..."
                        />
                    </div> */}
                </div>
                <div
                    className="d-flex align-items-center justify-content-between pb-1"
                    ref={targetParagraph}
                >
                    <h3 className="text-uppercase">Video Production </h3>
                    <div className={styles.serviceWrapper}>
                        <div className={styles.serviceImageWrapper0}>
                            <div className={styles.noise} />
                            <Image
                                src="/assets/images/services/production.png"
                                width={590}
                                height={161}
                                alt="the panchromatic media"
                                className={` ${styles.serviceImage}`}
                            // style={{ ...styling.dynamicBackground }}
                            />
                        </div>

                    </div>
                </div>
                <div style={{height:"12px", width: "12px", borderRadius:"50%", background:"#7033FF", transform:"translate(-50%, 50%)"}}></div>
                <div style={{ width: "100%", height: "2px", background: "#7033FF", marginBottom: "0.5rem" }}></div>
                <div
                    className="d-flex align-items-center justify-content-between pb-1"
                    ref={targetParagraph}
                >
                    <h3 className="text-uppercase">2D/3D Animation </h3>
                    <div className={styles.serviceWrapper}>
                        <div className={styles.serviceImageWrapper1}>
                            <div className={styles.noise} />
                            <Image
                                src="/assets/images/services/anim.png"
                                width={590}
                                height={161}
                                alt="the panchromatic media"
                                className={` ${styles.serviceImage}`}
                            // style={{ ...styling.dynamicBackground }}
                            />
                        </div>

                    </div>
                </div>
                <div style={{height:"12px", width: "12px", borderRadius:"50%", background:"#7033FF", transform:"translate(-50%, 50%)"}}></div>
                <div style={{ width: "100%", height: "2px", background: "#7033FF", marginBottom: "0.5rem" }}></div>
                <div
                    className="d-flex align-items-center justify-content-between pb-1"
                    ref={targetParagraph}
                >
                    <h3 className="text-uppercase">Brand Identity </h3>
                    <div className={styles.serviceWrapper}>
                        <div className={styles.serviceImageWrapper2}>
                            <div className={styles.noise} />
                            <Image
                                src="/assets/images/services/brands.png"
                                width={590}
                                height={161}
                                alt="the panchromatic media"
                                className={` ${styles.serviceImage}`}
                            // style={{ ...styling.dynamicBackground }}
                            />
                        </div>

                    </div>
                </div>
                <div style={{height:"12px", width: "12px", borderRadius:"50%", background:"#7033FF", transform:"translate(-50%, 50%)"}}></div>
                <div style={{ width: "100%", height: "2px", background: "#7033FF", marginBottom: "0.5rem" }}></div>
                <div
                    className="d-flex align-items-center justify-content-between pb-1"
                    ref={targetParagraph}
                >
                    <h3 className="text-uppercase">AudioCraft</h3>
                    <div className={styles.serviceWrapper}>
                        <div className={styles.serviceImageWrapper3}>
                            <div className={styles.noise} />
                            <Image
                                src="/assets/images/services/audio_file.png"
                                width={590}
                                height={161}
                                alt="the panchromatic media"
                                className={` ${styles.serviceImage}`}
                            // style={{ ...styling.dynamicBackground }}
                            />
                        </div>

                    </div>
                </div>
                <div style={{height:"12px", width: "12px", borderRadius:"50%", background:"#7033FF", transform:"translate(-50%, 50%)"}}></div>
                <div style={{ width: "100%", height: "2px", background: "#7033FF", marginBottom: "0.5rem" }}></div>
                <div
                    className="d-flex align-items-center justify-content-between pb-1"
                    ref={targetParagraph}
                >
                    <h3 className="text-uppercase">Web Architecture</h3>
                    <div className={styles.serviceWrapper}>
                        <div className={styles.serviceImageWrapper4}>
                            <div className={styles.noise} />
                            <Image
                                src="/assets/images/services/web_dev.png"
                                width={590}
                                height={161}
                                alt="the panchromatic media"
                                className={` ${styles.serviceImage}`}
                            // style={{ ...styling.dynamicBackground }}
                            />
                        </div>

                    </div>
                </div>
                <div style={{height:"12px", width: "12px", borderRadius:"50%", background:"#7033FF", transform:"translate(-50%, 50%)"}}></div>
                <div style={{ width: "100%", height: "2px", background: "#7033FF" }}></div>
            </Container>
        </div>
    );
};

export default Services;
