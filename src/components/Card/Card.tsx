import React from 'react'
import './Card.scss'

type CardProps = {
  children: React.ReactNode
  gridArea?: React.CSSProperties
  background?: React.CSSProperties
  padding?: React.CSSProperties
  aspectRatio?: React.CSSProperties
}

const Card: React.FC<CardProps> = ({
  children,
  gridArea,
  background,
  padding,
  aspectRatio = { aspectRatio: '1 / 1' },
}) => {
  return (
    <div
      className="ss-card"
      style={{ ...gridArea, ...background, ...padding, ...aspectRatio }}
    >
      {children}
    </div>
  )
}

export default Card
