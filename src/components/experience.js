import React, { useState } from "react";

import Carousel from "react-bootstrap/Carousel";

import ExperienceCard from "./experience-card";

const Experience = () => {
    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState(null);
    const [interval, setInterval] = useState(5000);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
        setDirection(e.direction);
        setInterval(false);
    };

    console.log(index);

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
            <Carousel.Item>
                <ExperienceCard
                    companyName="Capital One"
                    positionName="Software Engineer Intern (Jun 2019 - Aug 2019)"
                    highlights="AWS Lambda, Go, PostgreSQL, Python, React"
                >
                    Designed and prototyped machine learning classifier to
                    identify malicious JavaScript. Additionally built a
                    dashboard web application to consume and display
                    cybersecurity data.
                </ExperienceCard>
            </Carousel.Item>
            <Carousel.Item>
                <ExperienceCard
                    companyName={
                        <a
                            href="http://www.umtri.umich.edu/"
                            className="experienceTitle"
                        >
                            University of Michigan Transportation Research
                            Institute
                        </a>
                    }
                    positionName="Assistant in Research (Sep 2018 - Dec 2018)"
                    highlights="Python"
                >
                    Implemented a machine learning intrusion detection system
                    for the automotive CAN bus.
                </ExperienceCard>
            </Carousel.Item>
            <Carousel.Item>
                <ExperienceCard
                    companyName={
                        <a
                            href="https://www.tomesoftware.com/"
                            className="experienceTitle"
                        >
                            Tome
                        </a>
                    }
                    positionName={
                        <a
                            href="https://cfe.umich.edu/techlab-mcity/"
                            className="experiencePosition"
                            highlights="JavaScript, Python"
                        >
                            TechLab at Mcity Intern
                        </a>
                    }
                >
                    Built proof-of-concept products related to bicyclist safety,
                    including an IoT device for detecting bicyclists on roads
                    and a machine learning model to identify road sections
                    dangerous for bicyclists.
                </ExperienceCard>
            </Carousel.Item>
        </Carousel>
    );
};

export default Experience;
