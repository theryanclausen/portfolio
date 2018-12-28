import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import { twitterPathD, linkedinPathD, githubPathD } from '../images/svgs'

const StyledHeader = styled.header`
  background: #0a2e40;
  position: fixed;
  width: 100vw;
  .header-container {
    position: relative;
    margin: 0 auto;
    max-width: 980px;
    h1 {
      font-family: 'Rock Salt', cursive;
      font-size: 36px;
      width: 100%;
      border-bottom: 3px solid yellow;
      padding: 15px 5px;
      margin-top: 14px;
    }
    h3 {
      font-style: italic;
      margin: 10px 125px;
      font-size: 28px;
      color: orange;

    }
    .icon-container {
      position: absolute;
      top: 0;
      right: 0;
      .icon {
        width: 24px;
        fill-opacity: 0;
        stroke: orange;
        stroke-width: 2px;
        stroke-linecap: 'round';
        stroke-linejoin: 'round';
        margin: 0 5px;
        cursor: pointer;
      }
    }
  }
`

const Header = ({ siteTitle, siteSubTitle }) => {
  return (
    <StyledHeader>
      <div className="header-container">
        <div className="icon-container">
          <a href="https://github.com/theryanclausen" target='_blank'>
            <svg className="github icon" xmlns="http://www.w3.org/2000/svg">
              <path d={githubPathD} />
            </svg>
          </a>
          <a href="https://twitter.com/theryanclausen" target='_blank'>
          <svg className="twitter icon" xmlns="http://www.w3.org/2000/svg">
            <path d={twitterPathD} />
          </svg>
          </a>
          <a href="https://www.linkedin.com/in/ryan-clausen-6285b816b/" target='_blank'>
          <svg className="linkedin icon" xmlns="http://www.w3.org/2000/svg">
            <path d={linkedinPathD} />
            <rect x="2" y="9" width="4" height="12" />
            <circle cx="4" cy="4" r="2" />
          </svg>
          </a>
        </div>
        <h1>
          <Link to="/">{siteTitle}</Link>
        </h1>

        <h3>{siteSubTitle}</h3>
      </div>
    </StyledHeader>
  )
}
Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
