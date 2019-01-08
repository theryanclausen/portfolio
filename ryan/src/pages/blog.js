import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/layout'
import styled from 'styled-components'

const BlogContainer = styled.div`
padding-top:50px;
  h2 {
    font-size: 26px;
    border-bottom: 1px solid white;
    margin-bottom: 25px;
  }
  div{
      display:flex;
      
      h3{
          display: inline-block;
          margin-right: 10px;
      }
      p{
          display: inline-block;
      }
  }
`

const BlogPage = ({ data }) => (
  <Layout>
    <BlogContainer>
      <h2>Latest Posts</h2>
      {data.allMarkdownRemark.edges.map(post => (
        <div key={post.node.id}>
          <Link to={post.node.frontmatter.path}>
            <h3>{post.node.frontmatter.title}</h3>
            <p>
              Posted by {post.node.frontmatter.author} on
              {post.node.frontmatter.date}
            </p>
          </Link>
        </div>
      ))}
    </BlogContainer>
  </Layout>
)

export const pageQuery = graphql`
  query BlogIndexQuery {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            path
            title
            date
            author
          }
        }
      }
    }
  }
`
export default BlogPage
