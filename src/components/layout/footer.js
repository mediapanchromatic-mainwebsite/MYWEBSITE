import Image from "next/image";
import React, { useState, useEffect } from "react";
import { Container, Stack } from "react-bootstrap";

const Footer = () => {

    return (
        <div className=" clashDisplay footer-box m-auto mt-5">
            <div className="footer-containt text-light" >
                <h2 style={{fontSize:"calc(22px + 2rem)"}}>GET IN TOUCH</h2>
                <Stack direction="horizontal" className="mt-3 ps-3" gap={3}>
                    <a 
                        href="https://www.instagram.com/panchromaticmedia/?igsh=MXhvNnZjaHQyM2Rydg%3D%3D#" 
                        target="_blank" 
                        className="flip-animate text-light"
                    >
                        <Image
                            src="/assets/images/icons/insta.svg"
                            width={32}
                            height={32}
                            alt="panchromatic"
                            className=" bg-white rounded-2"
                        />
                    </a>
                    <a 
                        href=" https://youtube.com/@panchromaticmedia?si=jLzefFRTenISwdJs" 
                        target="_blank" 
                        className="flip-animate text-light "
                    >
                        <Image
                            src="/assets/images/icons/youtube_icons.svg"
                            width={44}
                            height={38}
                            alt="panchromatic"
                            // className="bg-danger rounded-2"
                        />
                    </a>
                    <a 
                        href="https://www.linkedin.com/company/panchromatic-media/" 
                        target="_blank" 
                        className="flip-animate text-light"
                    >
                        <Image
                            src="/assets/images/icons/linked_icon.svg"
                            width={38}
                            height={35}
                            alt="panchromatic"
                            // className="bg-primary p-1 rounded-2"
                        />
                    </a>
                </Stack>
                <div className="d-flex flex-column justify-content-end align-items-end">
                    <a href="tel:+917014630937" target="_blank" className="flip-animate text-light">
                        <span data-hover="+91 - 7014630937" className="hover-text-tab">
                            +91 - 7014630937
                        </span>
                    </a>
                    <span className="pt-2">Saket, Delhi 110030</span>
                    <span className="pt-2 tab-hover">
                        <a href="mailto:info@panchromaticmedia.com" target="_blank" className="flip-animate text-light">
                            <span data-hover="info@panchromaticmedia.com" className="hover-text-tab">
                                info@panchromaticmedia.com
                            </span>
                        </a>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Footer;