import React, { useState } from "react";

import Carousel from "react-bootstrap/Carousel";

import AcademicCard from "./academic-card";

const Experience = () => {
    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState(null);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
        setDirection(e.direction);
    };

    console.log(index);

    return (
        <Carousel
            activeIndex={index}
            direction={direction}
            onSelect={handleSelect}
            interval={false}
            nextIcon={null}
            prevIcon={null}
            indicators={false}
        >
            <Carousel.Item>
                <AcademicCard
                    experienceTitle={
                        <a
                            href="https://bulletin.engin.umich.edu/courses/eecs/#subnav-3"
                            className="experienceTitle"
                        >
                            EECS 477: Introduction to Algorithms (UMich)
                        </a>
                    }
                    positionName="Instructional Aide (Fall 2019)"
                    highlights="Algorithm design and analysis"
                >
                    EECS 477 is University of Michigan's upper-level, proof-based algorithms course. Topics in the course include amortized analysis, linear programming, randomized algorithms, and approximation algorithms.
                </AcademicCard>
            </Carousel.Item>
            <Carousel.Item>
                <AcademicCard
                    experienceTitle="University of Michigan Industrial and Operations Engineering"
                    positionName="Research Assistant (May 2017 - Jul 2018)"
                    highlights="C++, Julia, Python"
                >
                    Researched optimization problems related to optimal power flow (efficiently dispatching power to service loads in an electric grid). Specifically, compared optimal power flow models on congested networks, and impelemented a differential privacy model to produce realistic network datasets from existing data.
                </AcademicCard>
            </Carousel.Item>
            <Carousel.Item>
                <AcademicCard
                    experienceTitle={
                        <a
                            href="https://lsa.umich.edu/math/undergraduates/undergraduate-math-courses/200-level-math-courses.html"
                            className="experienceTitle"
                        >
                            Math 217: Linear Algebra (UMich)
                        </a>
                    }
                    positionName="Kiluk Proof Tutor (Fall 2018, Winter 2019)"
                >
                    MATH 217 is the first proof-based, rigorous course in the undergraduate mathematics curriculum. Kiluk Proof Tutors help students with writing proofs in clear and concise mathematical language.
                </AcademicCard>
            </Carousel.Item>
            <Carousel.Item>
                <AcademicCard
                    experienceTitle={
                        <a
                            href="https://eng100.engin.umich.edu/list/section-950/"
                            className="experienceTitle"
                        >
                            ENG100: Electronics for Atmospheric and Space Measurements (UMich)
                        </a>
                    }
                    positionName="Instructional Aide (Winter 2018)"
                    highlights="Arduino, Electronics, Printed Circuit Design"
                >
                    Students in ENG100 design and launch a high-altitude balloon payload to collect weather data. They program an Arduino to interface with sensors, design and solder a printed circuit board, and build the payload housing.
                </AcademicCard>
            </Carousel.Item>
            <Carousel.Item>
                <AcademicCard
                    experienceTitle={
                        <a
                            href="https://mdp.engin.umich.edu"
                            className="experienceTitle"
                        >
                            Multidisciplinary Design Program (UMich)
                        </a>
                    }
                    positionName="Undergraduate Researcher (Jan 2017 - Dec 2017)"
                >
                    Test
                </AcademicCard>
            </Carousel.Item>
        </Carousel>
    );
};

export default Experience;
