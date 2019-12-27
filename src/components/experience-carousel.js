import React, { useState } from "react";

import Carousel from "react-bootstrap/Carousel";

const ExperienceCarousel = ({ children }) => {
    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState(null);
    const [interval, setInterval] = useState(5000);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
        setDirection(e.direction);
        setInterval(false);
    };

    return (
        <Carousel
            activeIndex={index}
            direction={direction}
            onSelect={handleSelect}
            interval={interval}
            nextIcon={null}
            prevIcon={null}
            indicators={false}
        >
            {children}
        </Carousel>
    );
};

export default ExperienceCarousel;
