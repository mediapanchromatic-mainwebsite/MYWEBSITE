import Image from "next/image";
import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";

const Header = () => {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
      const intervalId = setInterval(() => {
        setCurrentTime(new Date());
      }, 1000);
  
      return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="">
            <Container className="d-flex justify-content-between align-items-center py-3">
                <div className="text-secondary clashDisplay fs-5">
                    LOCAL/<span className="text-white">{currentTime.toLocaleTimeString()}</span>
                </div>
                <div className='contact_btn rounded-pill text-center '>
                    <span className="contact_text">CONTACT NOW</span>
                </div>
            </Container>
        </div>
    )
}

export default Header;