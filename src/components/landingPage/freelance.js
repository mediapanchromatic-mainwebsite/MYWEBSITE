import React, { useRef } from "react"
import styles from "./landing.module.scss";
import { Container } from "react-bootstrap";
import ImageCollage from "@/components/landingPage/imageCollage"

const Freelance = () => {

    return (
        <div className={` clashDisplay ${styles.freelance}`}>
            <Container className={styles.content}>
                {/* Weaving Visual Narratives, One Frame at a Time <br/>
                helping Members & businesses <br/> achieve their vision in media and design. */}


                Crafting compelling visual stories that resonate deeply, we transform moments into cinematic experiences—blending creativity, emotion, and precision, one frame at a time, to bring every narrative vividly to life.
            </Container>
            <Container>
                <ImageCollage />
            </Container>
        </div>
    );
};

export default Freelance;
