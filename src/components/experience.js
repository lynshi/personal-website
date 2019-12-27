import React, { useState } from "react";

import Carousel from "react-bootstrap/Carousel";

import ExperienceCard from "./experience-card"

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
                <ExperienceCard companyName="Capital One" positionName="Software Engineer Intern">
                    Test
                </ExperienceCard>
            </Carousel.Item>
            <Carousel.Item>
                <ExperienceCard companyName="University of Michigan Transportation Research Institute" positionName="Assistant in Research">
                    Test
                </ExperienceCard>
            </Carousel.Item>
        </Carousel>
    );
};

export default Experience;
