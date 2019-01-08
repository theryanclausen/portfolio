import React from 'react'
import Layout from '../components/layout';
import { graphql } from 'gatsby';


 const Template = ({data}) => {
    const post = data.markdownRemark
  return (
    <Layout>
        <h2>{post.frontmatter.title}</h2>
        <p>Posted by {post.frontmatter.author} on {post.frontmatter.date}</p>
        <div dangerouslySetInnerHTML={{__html:post.html}}/>

    </Layout>
  )
}

export const postQuery= graphql`
    query BlogPostByPath($path: String!){
        markdownRemark(frontmatter: { path: {eq: $path}}){
            html
            frontmatter{
                path
                title
                author
                date
            }
            
        }
    }
`


export default Template