import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

export const queryFragment = graphql`
  fragment queryFragment on File {
    childImageSharp {
      gatsbyImageData(width: 300, quality: 100, layout: CONSTRAINED)
    }
  }
`;

const Image = () => {
  const query = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "artechouse.jpg" }) {
        ...queryFragment
      }
    }
  `);

  return (
    <GatsbyImage
      image={query.placeholderImage.childImageSharp.gatsbyImageData}
    />
  );
};

export { Image };
