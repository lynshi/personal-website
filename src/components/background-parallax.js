import React from 'react';
import {Parallax, ParallaxLayer} from 'react-spring/renderprops-addons'
import { useStaticQuery, graphql } from "gatsby"

const image = useStaticQuery(graphql`
    query {
    placeholderImage: file(relativePath: { eq: "artechouse.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 300) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`)

class BackgroundParallax extends React.Component {
    render() {        
        return (
            <Parallax ref={ref => (this.parallax = ref)} pages={1}>
                <ParallaxLayer offset={1.3} speed={-0.3} style={{ pointerEvents: 'none' }}>
                <img src={image.placeholderImage.childImageSharp.fluid.src} style={{ width: '15%', marginLeft: '70%' }} />
                </ParallaxLayer>
            </Parallax>
        )
    }
}

export default BackgroundParallax;