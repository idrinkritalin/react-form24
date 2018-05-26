import React from 'react'
import Logo from 'react-icons/lib/md/speaker-notes'
import PropTypes from 'prop-types'

const Header = (props) => (
  <header>
    <h1><Logo/>{props.title}</h1>
  </header>
)

Header.propTypes = {
  title: PropTypes.string.isRequired
}

export default Header
