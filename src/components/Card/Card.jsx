import React from 'react'
import PropTypes from 'prop-types'
import './Card.scss'

const Card = ({ children, style }) => {
  return (
    <div className="ss-card" style={style ? style : {}}>
      {children}
    </div>
  )
}

Card.propTypes = {
  children: PropTypes.node.isRequired,
  gridAreaValue: PropTypes.object,
}

export default Card
