import React from "react";
import styles from './landing.module.scss'
import Image from "next/image";

const WorkProgress = () => {
        const processArray = [
        {
            img: "process_1.svg",
            heading: "PRE-PRODUCTION",
            description: [
                "Conceptualisation",
                "Scripting",
                "Storyboarding & Visual Moodboards",
            ],
        },
        {
            img: "process_2.svg",
            heading: "PRODUCTION",
            description: [
                "On-Site Filming",
                "Direction & Creative Supervision",
                "Lighting & Set Design",
            ],
        },
        {
            img: "process_3.svg",
            heading: "POST-PRODUCTION",
            description: [
                "Video Editing & Sound Design",
                "Motion Graphics & Animation",
                "Social Media Marketing",
            ],
        },
    ];
    return (
        <div className=" clashDisplay">
            <div className="welcomeWork text-secondary text-center d-flex flex-column align-items-center justify-content-center ">
                <div className={styles.sectionHeader}>
                    Welcome to the
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
                    WORK process
                </div>
                <div className="my-4 w-75 clashDisplay">
                    Welcome to the creative journey at Panchromatic Media — where vision meets precision. We begin by understanding your goals, then craft bold ideas through thoughtful strategy, turning imagination into purposeful impact.
                </div>
                <div className="d-flex mt-5 align-items-md-start align-items-center justify-content-md-between justify-content-center w-100 flex-wrap clashDisplay">
                    {processArray?.map((items, index) => (
                        <div key={index?.toString()}>
                            {/* <div className="iconWrapper"> */}
                            <Image
                                src={`/assets/images/process/${items?.img}`}
                                width={60}
                                height={60}
                                alt="panchromatic media"
                                className="iconWrapper"
                            />
                            {/* </div> */}
                            <h4 className="pt-4 mb-2 process-subHeading text-light clashDisplay">{items?.heading}</h4>
                            <div className="clashDisplay">
                                {items?.description?.map((item, index) => (
                                    <div key={index?.toString()}> {item}</div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className={`${styles.arrowImageWrapper} m-auto `}>
                <Image
                    src="/assets/images/icons/arrow_down.png"
                    height={97}
                    width={90}
                    alt="..."
                    className={`${styles.arrowImage} img-fluid`}
                />
            </div>
        </div>
    )
}

export default WorkProgress;