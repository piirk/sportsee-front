import './Card.scss'

type CardProps = {
  children: React.ReactNode
  style?: React.CSSProperties
}

const Card: React.FC<CardProps> = ({ children, style }) => {
  return (
    <div className="ss-card" style={style ? style : {}}>
      {children}
    </div>
  )
}

export default Card
