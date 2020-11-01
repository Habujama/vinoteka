import React, { FC } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const Hero: FC = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "hero.png" }) {
        childImageSharp {
          fluid(maxHeight: 235) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <div className="pt-8 shadow-sm">
      <Img
        loading="lazy"
        style={{ maxHeight: '235px' }}
        imgStyle={{ objectFit: 'contain' }}
        fluid={data.placeholderImage.childImageSharp.fluid}
      />
    </div>
  )
}

export default Hero
