import React from 'react'
import styled from 'styled-components'
// import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'

const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
  height: 80vh;
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;

    div {
      width: 48%;
      h1 {
        font-size: 96px;
        text-align: center;
        text-shadow: 6px 6px 17px #0a2e40, -6px -6px 17px #0a2e40;
      }
      p{
        text-shadow: 2px 2px 7px #0a2e40, -2px -2px 12px #0a2e40;
      }
    }
  }
`
class IndexPage extends React.Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    return (
      <Layout>
        <SEO
          title="Home"
          keywords={[
            `gatsby`,
            `application`,
            `react`,
            'Ryan Clausen',
            'Clausen',
            'fullstack',
            'full-stack',
            'developer',
            'dev',
            'lambda',
            'lambda school',
          ]}
        />
        <Container>
          <header>
            <div className="title-block">
              <h1>Ryan Clausen</h1>
            </div>
            <div className='text-block'>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
                asperiores, animi quo, nisi sunt explicabo suscipit libero ipsa
                reprehenderit sed saepe, deserunt obcaecati eveniet eligendi.
                Ipsam quasi eveniet deserunt nostrum?
              </p>
            </div>
          </header>
        </Container>
      </Layout>
    )
  }
}
export default IndexPage
