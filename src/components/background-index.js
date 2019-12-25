import React from "react";
import { graphql, StaticQuery } from "gatsby";
import styled from "styled-components";

import BackgroundImage from "gatsby-background-image";

const IndexBackground = ({ className }) => (
    <StaticQuery
        query={graphql`
            query {
                desktop: file(relativePath: { eq: "artechouse.jpg" }) {
                    childImageSharp {
                        fluid(quality: 100, maxWidth: 1920) {
                            ...GatsbyImageSharpFluid_withWebp
                        }
                    }
                }
            }
        `}
        render={data => {
            // Set ImageData.
            const imageData = data.desktop.childImageSharp.fluid;
            return (
                <BackgroundImage
                    Tag="section"
                    className={className}
                    fluid={imageData}
                    backgroundColor={`#040e18`}
                />
            );
        }}
    />
);

const StyledIndexBackground = styled(IndexBackground)`
    width: 100%;
    background-position: 50% 28.5%;
    background-repeat: repeat-y;
    background-size: cover;
    background-attachment: fixed;
    height: 75vh;
`;

export default StyledIndexBackground;
