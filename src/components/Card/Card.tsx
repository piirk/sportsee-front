import React from 'react'
import './Card.scss'

type CardProps = {
  children: React.ReactNode
  gridArea?: React.CSSProperties
  background?: React.CSSProperties
}

const Card: React.FC<CardProps> = ({ children, gridArea, background }) => {
  return (
    <div className="ss-card" style={{ ...gridArea, ...background }}>
      {children}
    </div>
  )
}

export default Card
