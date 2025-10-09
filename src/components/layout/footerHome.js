import Image from "next/image";
import React, { useState, useEffect } from "react";
import { Container, Stack } from "react-bootstrap";

const Footer = () => {

    return (
        <div className=" hfull p-5">
            <Container className="d-flex align-items-end justify-content-center text-light">
                <div className="footer-box-home p-5">
                    <div className="d-flex justify-content-between align-items-center">
                        <div style={{maxWidth: "40vw"}}>
                            <h2 className="footer-home-title pb-4">GET IN TOUCH</h2>
                        </div>
                        <div style={{fontSize: 24}}>
                            H.Q. <span className="ps-3">Saket, Delhi 110030</span> <br/>
                            p. <span className="ps-5">
                                    <a href="tel:+917014630937" target="_blank" className="flip-animate text-light">
                                        <span data-hover="+91 - 7014630937" className="hover-text-tab">
                                            +91 - 7014630937
                                        </span>
                                    </a>
                                </span> <br/>
                            e. <span className="ps-5 tab-hover">
                                <a href="mailto:info@panchromaticmedia.com" target="_blank" className="flip-animate text-light">
                                    <span data-hover="info@panchromaticmedia.com" className="hover-text-tab">
                                        info@panchromaticmedia.com
                                    </span>
                                </a>
                            </span>
                        </div>
                    </div>
                    <div className="footer-home-tabs d-flex justify-content-between w-100 py-4">
                        <div></div>
                        <div className="" style={{width:"27vw"}}>
                            <div className="tab-hover">
                                <a href="" className="flip-animate text-light">
                                    <span data-hover="Home" className="hover-text-tab">
                                        Home
                                    </span>
                                </a>
                            </div>
                            <div className="tab-hover">
                                <a href="" className="flip-animate text-light">
                                    <span data-hover="About Us" className="hover-text-tab">
                                        About Us
                                    </span>
                                </a>
                            </div>
                             <div className="tab-hover">
                                <a href="" className="flip-animate text-light">
                                    <span data-hover="Featured Works" className="hover-text-tab">
                                        Featured Works
                                    </span>
                                </a>
                            </div>
                            <div className="tab-hover">
                                <a href="" className="flip-animate text-light">
                                    <span data-hover="Clients" className="hover-text-tab">
                                        Clients
                                    </span>
                                </a>
                            </div>
                            <div className="tab-hover">
                                <a href="" className="flip-animate text-light">
                                    <span data-hover="FAQ" className="hover-text-tab">
                                        FAQ
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <Stack direction="horizontal" className="mt-4" gap={2}>
                        <Image
                            src="/assets/images/icons/instagram.svg"
                            width={32}
                            height={25}
                            alt="panchromatic"
                        />
                        <Image
                            src="/assets/images/icons/facebook.svg"
                            width={32}
                            height={25}
                            alt="panchromatic"
                        />
                        <Image
                            src="/assets/images/icons/linkedin.svg"
                            width={32}
                            height={25}
                            alt="panchromatic"
                        />
                    </Stack>
                    <div className="d-flex flex-column justify-content-end align-items-end">
                        <p>123 456 7789 10</p>
                        <p>007 popie, New City, USA</p>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Footer;