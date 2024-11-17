import React from 'react'
import PropTypes from 'prop-types'
import './Card.scss'

const Card = ({ children, gridAreaValue }) => {
  return (
    <div
      className="ss-card"
      style={gridAreaValue ? { gridArea: gridAreaValue } : {}}
    >
      {children}
    </div>
  )
}

Card.propTypes = {
  children: PropTypes.node.isRequired,
  gridAreaValue: PropTypes.string,
}

export default Card
