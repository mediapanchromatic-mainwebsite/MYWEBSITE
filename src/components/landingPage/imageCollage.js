import React, { useRef } from "react"
import styles from "./landing.module.scss";
import { Container } from "react-bootstrap";
import Image from "next/image";

const ImageCollage = () => {

    return (
        <div className={` clashDisplay ${styles.imageCollage}`}>
            <div className="d-flex justify-content-between align-items-start">
                <Image
                    src="/assets/images/image_section/church.JPG"
                    height={410}
                    width={273}
                    alt="..."
                    className="img-fluid"
                    style={{marginTop:"3rem"}}
                />
                <div className={styles.centerImage}>
                    <Image
                        src="/assets/images/image_section/1.JPG"
                        height={455}
                        width={303}
                        alt="..."
                        className="img-fluid"
                        style={{marginTop:"10rem"}}
                    />
                    
                </div>
                <Image
                    src="/assets/images/image_section/singer.JPG"
                    height={357}
                    width={238}
                    alt="..."
                    className="img-fluid h-auto"
                    style={{marginTop:"-6rem"}}
                />

            </div>
            <div className="d-flex justify-content-between align-items-start">
                <Image
                    src="/assets/images/image_section/3.JPG"
                    height={357}
                    width={238}
                    alt="..."
                    className="img-fluid h-auto"
                    style={{marginTop:"6rem"}}
                />
                <Image
                    src="/assets/images/image_section/gate.JPG"
                    height={455}
                    width={253}
                    alt="..."
                    className={`${styles.overlapImage} img-fluid`}
                    style={{marginTop:"12rem"}}
                />

            </div>
        </div>
    );
};

export default ImageCollage;
