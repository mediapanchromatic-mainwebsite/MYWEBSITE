import React from "react";
import styles from './landing.module.scss'
import Image from "next/image";
import Accordion from '@/components/accordion'
import About from '@/components/landingPage/about'
import Marquee from "@/components/landingPage/marquee";
import MarqueeRight from "@/components/landingPage/marqueeRight";
import Services from "@/components/landingPage/services"
import Featured from "@/components/landingPage/featured";
import Freelance from "@/components/landingPage/freelance";
import { Container } from "react-bootstrap";
import ContactUs from "@/components/landingPage/contactUs";
import FooterHome from '@/components/layout/footerHome'
import Footer from '@/components/layout/footer'
import ReactPlayer from 'react-player/lazy'
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import WorkProgress from '@/components/landingPage/workProgress'
import ImageCollage from "@/components/landingPage/imageCollage"

const ImageScroller = () => {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 3000,
        cssEase: "linear"
    };
    const partners = [
        "Bribooks_logo.png",
        "elia png logo.png",
        "HB_LOGO-04.png.avif",
        "icode-logo-03.png.webp",
        "Icon-04.png",
        "inter_loop.png",
        "logo Flags.png",
        "Logo v.png",
        "NRSM_Logo.png",
        "raftaar logo png.png",
        "WhatsApp-Image-2021-08-12-at-6.png"
    ];

    const marqueeLeft = [
        {
            desc: '“Working with Panchromatic Media has been an absolute game-changer for Bribooks. From our brand walkthroughs and animated explainers to event videos and product launch teasers, they brought every story to life with exceptional clarity, creativity, and emotion. Their ability to understand our vision and translate it into high-impact visuals has helped us connect deeply with our audience. Truly a team that delivers beyond expectations.”',
            owner: "— Founder, Bribooks",
            logo: "/assets/images/testimonial/Bribooks_logo.png"
        },
        {
            desc: '“Panchromatic Media has been a creative powerhouse in helping us bring our road safety curriculum to life. Their work on our 2D and 3D animated videos has not only elevated the learning experience for school children but also added clarity and emotional depth to important lessons. From scripting to final delivery, their team has been deeply collaborative, consistent, and quality-driven. A dependable partner in every frame.”',
            owner: "— Founder, NRSM",
            logo: "/assets/images/testimonial/NRSM_Logo.png"
        },
        {
            desc: '“Partnering with Panchromatic Media for our 100th client milestone video was one of the best decisions we made. They understood the essence of Interloop and translated it into a visually powerful narrative that truly celebrated our journey. The storytelling, cinematography, and attention to detail were top-notch. It wasn’t just a video—it was a reflection of who we are as a brand. Grateful for their creative partnership.”',
            owner: "— Founder, Interloop",
            logo: "/assets/images/testimonial/inter_loop.png"
        },
    ]
    const marqueeRight = [
        {
            desc: '“Working with Panchromatic Media was a refreshing experience. Their team brought a unique blend of style, spontaneity, and storytelling to our campaign—perfectly capturing the spirit of our people and brand. The Vogue-style Q&A format they executed felt fresh, engaging, and truly human. It gave our global team a chance to shine through a new lens. Quick, creative, and on-point—exactly what we needed.”',
            owner: "— Founder, Hasslebae",
            logo: "/assets/images/testimonial/HB_LOGO-04.png.avif"
        },
        {
            desc: '“Panchromatic Media brought our vision to life with incredible precision and creativity. From our brand walkthrough to product launch teasers and animations, every piece of content reflected the energy and innovation behind ICode. Their team understood our messaging, our audience, and our goals—and turned that into visual stories that not only looked great but drove real engagement. A fantastic creative partner to have in our journey.”',
            owner: "— Head of Sales, ICode",
            logo: "/assets/images/testimonial/icode-logo-03.png.webp"
        },
        {
            desc: '“As a communication partner, it’s rare to find a production team that truly elevates the creative vision you set for your clients. The walkthrough video created for Saveer was nothing short of impressive—visually immersive, thoughtfully structured, and emotionally resonant. It captured the brand’s essence perfectly and added significant value to the narrative we had envisioned for them.”',
            owner: "— Founder, Flag Communication",
            logo: "/assets/images/testimonial/logo Flags.png"
        }
    ]
    return (
        <div 
            // className={styles.imageAnimation}
        >
            <div className={styles.bannerImage + " " + styles.image1}>
                <ReactPlayer
                    url={"/assets/images/videos/Brand Video.mp4"}
                    controls={false}
                    playing
                    muted
                    loop
                    width={"100%"}
                    height={"100vh"}
                    className="bannerReactPlayer"
                />
            </div>
            {/* <div className={styles.image5}> */}
                <About />
                <div className={` clashDisplay pb-5 ${styles.marqueeSection}`}>
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
                </div> 
                </div>
               <div className="slider-container ">
                    <Slider {...settings} className="d-flex align-items-center">
                        {partners.map((items, index) =>
                            <div className={styles.imageService} key={index}>
                                <Image
                                    src={`/assets/images/testimonial/${items}`}
                                    width={200}
                                    height={200}
                                    alt="panchromatic media"
                                    className={styles.image}
                                />
                            </div>
                        )}
                    </Slider>
                </div>

                <Featured />
                <WorkProgress />
                <Services />
                <Marquee partners={partners}>
                    {marqueeLeft.map((items, index) =>
                        <div className={styles.marquee__item} key={index}>
                            <div className={`d-flex align-items-between rounded justify-content-between flex-column text-light me-3 ${styles.card}`}>
                                <div className={styles.cardWrapper}>
                                    <div className={styles.rightCutBox} />
                                    <div className={styles.leftCutBox} />
                                    <div className={styles.overlay}></div>
                                    <p className={`${styles.description} text-justify text-capitalize`}>
                                        {items.desc}
                                    </p>
                                    <div className={styles.cardName}>
                                        <h6 className="text-light text-uppercase">{items.owner}</h6>
                                        {/* <small className="text-secondary">CMO at HubSpot</small> */}
                                    </div>
                                    <div className="d-flex mt-4 align-items-center justify-content-start w-100">
                                        <Image
                                            src={items.logo}
                                            width={180}
                                            height={80}
                                            alt="panchromatic media"
                                            className={` `}
                                            style={{ objectFit: "contain" }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </Marquee>
                <MarqueeRight partners={partners}>
                    {marqueeRight.map((items, index) =>
                        <div className={styles.marquee__item} key={index}>
                            <div className={`d-flex align-items-between rounded text-light justify-content-between flex-column me-3 ${styles.card}`}>
                                <div className={styles.cardWrapper}>
                                    <div className={styles.rightCutBox} />
                                    <div className={styles.overlay}></div>
                                    <div className={styles.leftCutBox} />
                                    <p className={`${styles.description} text-justify text-capitalize`}>
                                        {items.desc}
                                    </p>
                                    <div className={styles.cardName}>
                                        <h6 className="text-light text-uppercase">{items.owner}</h6>
                                        {/* <small className="text-secondary">CMO at HubSpot</small> */}
                                    </div>
                                    <div className="d-flex mt-4 align-items-center justify-content-start w-100">
                                        <Image
                                            src={items.logo}
                                            width={180}
                                            height={80}
                                            alt="panchromatic media"
                                            className={` `}
                                            style={{ objectFit: "contain" }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </MarqueeRight>
                <Freelance />
                <Container className="text-light" style={{paddingTop:"80vh"}}>
                    <ImageCollage />
                    <Accordion />
                    <ContactUs />
                    <Footer />
                </Container>
            </div>
        // </div>
    )
}

export default ImageScroller;
