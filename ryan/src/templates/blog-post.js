import React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'
import styled from 'styled-components'

const BlogPostContainer = styled.div`
  padding-top: 50px;
  text-shadow: 4px 4px 17px #0a2e40, -4px -4px 17px #0a2e40;
  .above-line {
    border-bottom: 1px solid white;
    margin-bottom: 35px;
    
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: baseline;
    
    h2 {
      
      font-size: 26px;
      display: inline-block;
      padding-bottom: 8px;
    }
    p {
      display: inline-block;
      font-style: italic;
      
    }
  }
  .post-text{
    font-size: 22px;
    p{
      margin: 0 auto 20px;
      width:85%;
      line-height: 1.5;
    }
    
  }
`

const Template = ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <BlogPostContainer>
        <div className="above-line">
          <h2>{post.frontmatter.title}</h2>
          <p>
            Posted by {post.frontmatter.author} on {post.frontmatter.date}
          </p>
        </div>

        <div className='post-text' dangerouslySetInnerHTML={{ __html: post.html }} />
      </BlogPostContainer>
    </Layout>
  )
}

export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        author
        date
      }
    }
  }
`

export default Template
