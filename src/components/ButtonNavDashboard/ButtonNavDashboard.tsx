import { Link } from 'react-router-dom'
import './ButtonNavDashboard.scss'

type ButtonNavDashboardProps = {
  icon: string
  link: string
}

const ButtonNavDashboard: React.FC<ButtonNavDashboardProps> = ({
  icon,
  link,
}) => {
  return (
    <Link to={link}>
      <button className="ss-button-nav-dashboard">
        <img src={icon} alt="icon" />
      </button>
    </Link>
  )
}

export default ButtonNavDashboard
