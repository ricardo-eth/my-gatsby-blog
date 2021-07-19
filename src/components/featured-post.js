import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

const FeaturedPosts = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(filter: { frontmatter: { featured: { eq: true } } }) {
        nodes {
          frontmatter {
            title
          }
          fields {
            slug
          }
        }
      }
    }
  `)
  const nodes = data.allMarkdownRemark.nodes
  console.log(data)
  return (
    nodes.length > 0 && (
      <aside>
        <h2>Featured posts</h2>
        <ul>
          {nodes.map(el => {
            return (
              <li key={el.fields.slug}>
                <Link to={el.fields.slug}>{el.frontmatter.title}</Link>
              </li>
            )
          })}
        </ul>
      </aside>
    )
  )
}

export default FeaturedPosts
