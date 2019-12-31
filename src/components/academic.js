import React from "react";

import Carousel from "react-bootstrap/Carousel";

import ExperienceCarousel from "./experience-carousel";
import AcademicCard from "./academic-card";

const Academic = () => (
    <ExperienceCarousel>
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
                highlights="Design and analysis of algorithms"
            >
                EECS 477 is University of Michigan's upper-level, proof-based
                algorithms course. Topics in the course include amortized
                analysis, linear programming, randomized algorithms, and
                approximation algorithms.
            </AcademicCard>
        </Carousel.Item>
        <Carousel.Item>
            <AcademicCard
                experienceTitle={
                    <a
                        href="https://ioe.engin.umich.edu/"
                        className="experienceTitle"
                    >
                        University of Michigan Industrial and Operations
                        Engineering
                    </a>
                }
                positionName="Research Assistant (May 2017 - Jul 2018)"
                highlights="C++, Julia, Python"
            >
                Researched optimization problems related to optimal power flow.
                Specifically,{" "}
                <a
                    href="https://arxiv.org/pdf/1807.05460.pdf"
                    className="experienceCardLink"
                >
                    compared optimal power flow models on congested networks
                </a>
                , and implemented a{" "}
                <a
                    href="https://ieeexplore.ieee.org/abstract/document/8854890"
                    className="experienceCardLink"
                >
                    differential privacy model
                </a>{" "}
                to produce realistic test networks from existing datasets.
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
                MATH 217 is the first proof-based, rigorous course in the
                undergraduate mathematics curriculum. Kiluk Proof Tutors tutor
                students on how to write proofs in clear and concise
                mathematical language.
            </AcademicCard>
        </Carousel.Item>
        <Carousel.Item>
            <AcademicCard
                experienceTitle={
                    <a
                        href="https://eng100.engin.umich.edu/list/section-950/"
                        className="experienceTitle"
                    >
                        ENG100: Electronics for Atmospheric and Space
                        Measurements (UMich)
                    </a>
                }
                positionName="Instructional Aide (Winter 2018)"
                highlights="Arduino, Electronics, Printed Circuit Board Design"
            >
                Students in ENG100 design and launch a high-altitude balloon
                payload to collect weather data. They program an Arduino to
                interface with sensors, design and solder a printed circuit
                board, and build the payload housing.
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
                highlights="Python"
            >
                Developed a{" "}
                <a
                    href="https://events.esd.org/wp-content/uploads/2018/08/A-Two-Stage-Deep-Learning-Approach-for-Can-Intrusion-Detection.pdf"
                    className="experienceCardLink"
                >
                    deep-learning-based intrusion detection system
                </a>{" "}
                for the automotive CAN bus.
            </AcademicCard>
        </Carousel.Item>
    </ExperienceCarousel>
);

export default Academic;
