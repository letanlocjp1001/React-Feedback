import React from 'react'
import PropTypes from 'prop-types'

function Header() {
  return (
    <header>
      <div className='container'>
        <h2>Feedback</h2>
      </div>
    </header>
  )
}

Header.propTypes = { text: PropTypes.string }

export default Header
