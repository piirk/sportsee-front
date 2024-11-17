import React from 'react'
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

export default Card
