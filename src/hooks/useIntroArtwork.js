import { graphql, useStaticQuery } from "gatsby"

export default function() {
  const data = (useStaticQuery(graphql`
    query GetImage {
      allFile(filter: {relativeDirectory: {}, name: {eq: "g2_dk_artwork"}}) {
        edges {
          node {
            id
            relativeDirectory
            childImageSharp {
              fluid(maxWidth: 2000, quality: 95) {
                srcWebp
                srcSetWebp
              }
            }
            name
          }
        }
      }
    }
  `)).allFile.edges[0].node.childImageSharp.fluid;

  return data;
}
