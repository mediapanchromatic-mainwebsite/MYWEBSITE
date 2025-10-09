import Image from "next/image";
import React, { useState } from "react";
import { Container } from "react-bootstrap";
import styles from '@/components/landingPage/landing.module.scss'
import ReactPlayer from 'react-player/lazy'

const Featured = () => {
    const [show, setShow] = useState(false)
    const [videoLink, setVideoLink] = useState("")
    return (
        <div className={` clashDisplay ${styles.featured}`}>
            <div className="text-center" >
                {/* <Image
                    src="/assets/images/icons/feature_icon.png"
                    height={80}
                    width={420}
                    className="img-fluid"
                    alt="..."
                /> */}
                <div className={styles.sectionHeader}>
                    FEATURED
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
                    WORK
                </div>
            </div>
            <Container className={`d-flex justify-content-center mt-5 gap-5 w-100 flex-wrap clashDisplay`}>
                <div
                    className={styles.featuredImageWrapper}
                    onClick={() => (setVideoLink("/assets/images/videos/Video-2-FINAL.mp4"), setShow(true))}
                    role="button"
                    tabIndex={0}
                >
                    <Image 
                        src={"/assets/images/featured/trucksup.png"}
                        height={360}
                        width={640}
                        alt="..."
                        // className=" cover"
                    />
                    <div className={styles.noise} />
                    <div className={styles.featuredDescription}>
                        <div className={styles.text}>
                            <h2 className="">Trucksup</h2>
                            <p className="poppins">
                                This 2D animation walkthrough shows how the app makes cargo handling fast, simple, and efficient.
                            </p>
                        </div>
                    </div>
                </div>
                <div
                    className={styles.featuredImageWrapper}
                    onClick={() => (setVideoLink("/assets/images/videos/nyaf_teaser.mp4"), setShow(true))}
                    role="button"
                    tabIndex={0}
                >
                    <Image 
                        src={"/assets/images/featured/bribooks.png"}
                        height={360}
                        width={640}
                        alt="..."
                        // className=" cover"
                    />
                    <div className={styles.noise} />
                    <div className={styles.featuredDescription}>
                        <div className={styles.text}>
                            <h2 className="">BriBooks </h2>
                            <p className="poppins">
                                We present the launch teaser for the National Young Authors’ Fair, a celebration of young storytellers across India. 
                            </p>
                        </div>
                    </div>
                </div>
                <div
                    className={styles.featuredImageWrapper}
                    onClick={() => (setVideoLink("/assets/images/videos/road_safety.mp4"), setShow(true))}
                    role="button"
                    tabIndex={0}
                >
                    <Image 
                        src={"/assets/images/featured/Nrsm.png"}
                        height={360}
                        width={640}
                        alt="..."
                        // className=" cover"
                    />
                    <div className={styles.noise} />
                    <div className={styles.featuredDescription}>
                        <div className={styles.text}>
                            <h2 className="">National Road Safety Mission</h2>
                            <p className="poppins">
                                This motion graphics intro video inspires kids to follow traffic rules and help save lives on the road.
                            </p>
                        </div>
                    </div>
                </div>
                <div
                    className={styles.featuredImageWrapper}
                    onClick={() => (setVideoLink("/assets/images/videos/SA1.mp4"), setShow(true))}
                    role="button"
                    tabIndex={0}
                >
                    <Image 
                        src={"/assets/images/featured/honda.png"}
                        height={360}
                        width={640}
                        alt="..."
                        // className=" cover"
                    />
                    <div className={styles.noise} />
                    <div className={styles.featuredDescription}>
                        <div className={styles.text}>
                            <h2 className="">Honda</h2>
                            <p className="poppins">
                                3D animation video for Honda to promote essential road safety rules. These engaging visuals aim to educate viewers of all ages on safe and responsible behavior on the road.
                            </p>
                        </div>
                    </div>
                </div>
            </Container>
            {show && <div className={styles.videoPlayer}>
                <div className={styles.videoWrapper}>
                    <ReactPlayer
                        url={videoLink}
                        controls
                        playing
                        loop
                        mute
                        height="100%"
                        width="100%"
                    />
                </div>
                <div className={styles.close}>
                    <Image
                        src={"/assets/images/icons/cross.svg"}
                        height={45}
                        width={45} 
                        alt="..."
                        onClick={() => (setShow(false), setVideoLink(""))}
                    />
                </div>
            </div>}
        </div>
    )
}

export default Featured;