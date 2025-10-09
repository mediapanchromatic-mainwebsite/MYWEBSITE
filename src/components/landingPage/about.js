import React from "react";
import Image from "next/image";
import styles from "./landing.module.scss";
import { Container, Row, Col } from "react-bootstrap";

const Aboutus = () => {
    return (
        <div className={` ${styles.aboutus}`}>
            <Container className="py-5 text-white">
                <Row className="h-100">
                    <Col
                        md={5}
                        sm={12}
                        className="d-flex flex-column align-items-md-start align-items-center justify-content-md-start justify-content-center"
                    >
                        <h1 className="clashDisplay">
                            WHO <span style={{ color: "#7033FF" }}>WE</span> ARE ?
                        </h1>
                        <p className="m-0 text-justify poppins">
                            Panchromatic Media is a creative media production house based in the heart of Saket, New Delhi, weaving powerful narratives for brands that matter. From high-impact brand films and advertisement shoots to engaging podcasts, legacy videos, and strategic social media content — we collaborate closely with corporate clients to bring their stories to life, one frame at a time.
                        </p>
                        {/* <Image 
                            src='/assets/images/landing_page/camera_stand.png'
                            height={291}
                            width={121}
                            alt="..."
                            className="img-fluid m-auto mt-4"
                        /> */}
                        <p className="m-0 text-justify poppins mt-4">
                            With a strong focus on authenticity and innovation, we don’t just create content — we curate perspectives. Our mission is to amplify the voice of every brand we work with, crafting compelling visual and digital experiences that leave a lasting impact on society.
                        </p>
                    </Col>
                    <Col
                        md={2}
                        sm={12}
                        className="d-flex align-items-center justify-content-center"
                    >
                        <Image
                            src="/assets/images/icons/brand_icon.svg"
                            width={232}
                            height={232}
                            alt="panchromatic media"
                            className={`img-fluid opacity-0 ${styles.brandLogo}`}
                        />
                    </Col>
                    <Col
                        md={5}
                        sm={12}
                        className="d-flex  flex-column align-items-start justify-content-end"
                    >
                        <div className={styles.cameraManImage}>
                            <Image 
                                src='/assets/images/landing_page/camera_man.png'
                                height={260}
                                width={229}
                                alt="..."
                                className={`img-fluid`}
                            />
                        </div>
                        <h1 className="clashDisplay">
                            BEHIND THE <span style={{ color: "#7033FF" }}>BRAND</span> ?
                        </h1>
                        <p className="poppins">
                            Born from a shared dream to tell stories that matter, Panchromatic Media exists to help brands find their voice and make it heard with purpose. We aim to turn your vision into something deeply human — stories that connect, inspire, and leave a mark. Because behind every brand, there’s a heartbeat — and we listen.
                        </p>
                    </Col>
                </Row>           
            </Container>
        </div>
    );
};

export default Aboutus;
