import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'


const StyledHeader = styled.header`
  background: red;
  position: fixed;
  width: 100vw;
  .header-wrapper{
    margin: 0 auto;
    max-width: 960px;
  }
`

const Header = ({ siteTitle, siteSubTitle }) => {
  return (
    <StyledHeader>
<div className="header-wrapper">
          <h1>
            <Link
              to="/"
            >
              {siteTitle}
            </Link>
          </h1>

          <h3>
            {siteSubTitle}
          </h3>
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
