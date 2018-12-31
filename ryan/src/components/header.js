import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import styled, { keyframes } from 'styled-components'
import { twitterPathD, linkedinPathD, githubPathD } from '../images/svgs'
//import {posed} from 'react-pose'

const inFromLeft = keyframes`
0%{
  opacity:0;
  transform: translateX(-100%);
  border-bottom: 0 solid yellow;

}

34%{
  opacity:.001;
  
}


55%{
  opacity:1;
  transform: translateX(0);
  
}
65%{
  border-bottom: 0 solid yellow;
}

100%{
  border-bottom: 3px solid yellow;
}
`
const inFromRight = keyframes`
   0%{
     opacity: 0;
     transform:translateX(100vw);
   }
   64%{
     opacity:0;
   }
   85%{
     opacity:1;
   }
   100%{
     font-style:bold;
     transform: translateX(0);
   }
 `
const drawLines = keyframes`
 0%{
    
    stroke-dashoffset:100%;
 }
  30%{
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
  .header-container {
    position: relative;
    margin: 0 auto;
    max-width: 980px;
    h1 {
      font-family: 'Rock Salt', cursive;
      font-size: 36px;
      width: 100%;
      padding: 15px 5px;
      border-bottom: 3px solid yellow;
      margin-top: 14px;
      animation: ${inFromLeft} 2s;
    }
    h3 {
      font-style: italic;
      margin: 10px 125px;
      font-size: 28px;
      color: orange;
      animation: ${inFromRight} 2s;
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
      .path {
        stroke-dasharray:100%;
        animation: ${drawLines} 4s ease-out;
      }
    }
  }
`

const Header = ({ siteTitle, siteSubTitle }) => {
  return (
    <StyledHeader>
      <div className="header-container">
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
