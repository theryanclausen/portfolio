import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import styled, { keyframes } from 'styled-components'
import { twitterPathD, linkedinPathD, githubPathD } from '../images/svgs'
//import {posed} from 'react-pose'


const drawLines = keyframes`
 0%{
    
    stroke-dashoffset:100%;
 }


  100%{
    stroke-dashoffset:0%;

  }
 `

const StyledHeader = styled.header`
  background: #0a2e40;
  position: fixed;
  bottom:0;
  width: 100vw;
  height:32px;
  z-index:5;
  .header-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
    max-width: 900px;
    .links{
      
      display:flex;
      justify-content: flex-start;
      align-items:start;
      
      a{
        color:orange;
        font-family: 'Aleo', serif;
        margin-right:5px;
        &:hover{
          color:white;
          transition: 500ms;
        }
      }
    }
    .icon-container {
      display: flex;
      align-items: center;
      margin-right:20px;
      
      .icon {
        max-height:24px;
        max-width: 24px;
        fill-opacity: 0;
        stroke: orange;
        stroke-width: 2px;
        stroke-linecap: 'round';
        stroke-linejoin: 'round';
        margin: 5px;
        cursor: pointer;
        &:hover {
          fill-opacity: 1;
        }
      }
      .github {
        &:hover {
          stroke: white;
          fill: black;
        }
      }
      .twitter {
        &:hover {
          stroke: #1da1f2;
          fill: #1da1f2;
        }
      }
      .linkedin {
        stroke-width: 1px;

        &:hover {
          stroke: #0077b5;
          fill: white;
        }
      }

    }
  }
`

const Header = () => {
  return (
    <StyledHeader>
      <div className="header-container">
      <div className='links'>
        <Link to='/'>Home</Link>
        <Link to='/'>Experience</Link>
        <Link to='/'>Projects</Link>
        <Link to='/'>About</Link>
        <Link to='/'>Blog</Link>
      </div>
        <div className="icon-container">
          <a
            href="https://github.com/theryanclausen"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg className="github icon" xmlns="http://www.w3.org/2000/svg">
              <path className="path" d={githubPathD} />
            </svg>
          </a>
          <a
            href="https://twitter.com/theryanclausen"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg className="twitter icon" xmlns="http://www.w3.org/2000/svg">
              <path className="path" d={twitterPathD} />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/ryan-clausen-6285b816b/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg className="linkedin icon" xmlns="http://www.w3.org/2000/svg">
              <path className="path" d={linkedinPathD} />
              <rect className="path" x="2" y="9" width="4" height="12" />
              <circle className="path" cx="4" cy="4" r="2" />
            </svg>
          </a>
        </div>

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
