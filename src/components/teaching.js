import React, { useState } from "react";

import Carousel from "react-bootstrap/Carousel";

import TeachingCard from "./teaching-card"

const Experience = () => {
    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState(null);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
        setDirection(e.direction);
    };

    console.log(index);

    return (
        <Carousel activeIndex={index} direction={direction} onSelect={handleSelect} interval={false} nextIcon={null} prevIcon={null}>
            <Carousel.Item>
                <TeachingCard courseName="EECS 477 (UMich)" positionName="Instructional Aide">
                    Test
                </TeachingCard>
            </Carousel.Item>
        </Carousel>
    );
};

export default Experience;
