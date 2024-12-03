import React from 'react'
import './Card.scss'

type CardProps = {
  children: React.ReactNode
  gridArea?: React.CSSProperties
  background?: React.CSSProperties
  padding?: React.CSSProperties
}

const Card: React.FC<CardProps> = ({
  children,
  gridArea,
  background,
  padding,
}) => {
  return (
    <div className="ss-card" style={{ ...gridArea, ...background, ...padding }}>
      {children}
    </div>
  )
}

export default Card
