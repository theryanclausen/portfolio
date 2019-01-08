import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import Layout from '../components/layout'
//import Image from '../components/image'
import SEO from '../components/seo'

const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  header {
    display: flex;
    justify-content: space-between;
    padding-bottom: 235px;
    a {
      color: darkred;
      text-shadow: 2px 2px 2px yellow, -2px -2px 2px yellow;
      &:hover {
        color: white;
        transition: 500ms;
        text-shadow: 2px 2px 12px #0a2e40, -2px -2px 12px #0a2e40;
      }
    }
    div {
      width: 48%;

      h1 {
        font-size: 96px;
        text-align: center;
        text-shadow: 6px 6px 19px #0a2e40, -6px -6px 19px #0a2e40;
        line-height: 1.5;
      }
    }
    .text-block {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      p {
        font-size: 22px;
        line-height: 1.5;
        text-shadow: 2px 2px 12px #0a2e40, -2px -2px 12px #0a2e40;
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
            <div className="text-block">
              <p>
                Hey everybody, my name is Ryan and I am a fullstack developer. I
                am currently a student at{' '}
                <a href="https://lambdaschool.com">Lambda School</a>, but I also
                like to learn new technologies and build neat things on my own.
              </p>
              <p>
                Currently I am working on a month long group project to create a
                family scheduling app. Check out my <Link to="blog">blog</Link>{' '}
                to see how things are going.
              </p>
            </div>
          </header>
        </Container>
      </Layout>
    )
  }
}
export default IndexPage
