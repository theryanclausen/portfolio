import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

import Header from './footer'
import './layout.css'

const Container = styled.main`
  background: linear-gradient(lightblue 0%, white 20%);
  min-height:100vh;
  .wrapper{
    max-width: 960px;
  margin: 0 auto;
  }
`

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            subtitle
          }
        }
      }
    `}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} siteSubTitle={data.site.siteMetadata.subtitle}/>
        <Container>
          <div className='wrapper'>
          {children}</div>
        </Container>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
