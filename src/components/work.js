import React from "react";

import Carousel from "react-bootstrap/Carousel"

import ExperienceCarousel from "./experience-carousel";
import WorkCard from "./work-card";

const Work = () => (
    <ExperienceCarousel>
        <Carousel.Item>
            <WorkCard
                companyName={
                    <a
                        href="https://www.microsoft.com/en-us/"
                        className="experienceTitle"
                    >
                        Microsoft
                    </a>
                }
                positionName="Software Engineer (February 2020 - present)"
                highlights="Go, Python"
            >
                Building services for <a 
                    href="https://azure.microsoft.com/en-us/solutions/confidential-compute/"
                    className="experienceCardLink"
                >
                Azure confidential computing</a>.
            </WorkCard>
        </Carousel.Item>
        <Carousel.Item>
            <WorkCard
                companyName={
                    <a
                        href="https://www.capitalone.com/"
                        className="experienceTitle"
                    >
                        Capital One
                    </a>
                }
                positionName="Software Engineer Intern (Jun 2019 - Aug 2019)"
                highlights="AWS Lambda, Go, PostgreSQL, Python, React"
            >
                Designed and prototyped a machine learning classifier to
                identify malicious JavaScript. Additionally, built a dashboard
                web application to consume and display cybersecurity data.
            </WorkCard>
        </Carousel.Item>
        <Carousel.Item>
            <WorkCard
                companyName={
                    <a
                        href="http://www.umtri.umich.edu/"
                        className="experienceTitle"
                    >
                        University of Michigan Transportation Research Institute
                    </a>
                }
                positionName="Assistant in Research (Sep 2018 - Dec 2018)"
                highlights="Python"
            >
                Implemented a machine learning intrusion detection system for
                the automotive CAN bus.
            </WorkCard>
        </Carousel.Item>
        <Carousel.Item>
            <WorkCard
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
                highlights="JavaScript, Python"
            >
                Built proof-of-concept products related to bicyclist safety,
                including an IoT device for detecting bicyclists on roads and a
                machine learning model to identify road sections dangerous for
                bicyclists.
            </WorkCard>
        </Carousel.Item>
    </ExperienceCarousel>
);

export default Work;
