import { graphql, useStaticQuery } from "gatsby"

export default function() {
  const data = (useStaticQuery(graphql`
    query GetImages {
      allFile(filter: {relativeDirectory: {eq: "footer"}}) {
        edges {
          node {
            id
            relativeDirectory
            childImageSharp {
              full: fluid(maxWidth: 2000, quality: 95) {
                srcWebp
                srcSetWebp
              }
              preview: fluid(maxWidth: 900, quality: 95) {
                srcWebp
                srcSetWebp
              }
            }
          }
        }
      }
    }
  `)).allFile.edges.map(i => i.node.childImageSharp);

  return data;
}
