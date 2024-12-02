import './NavDashboard.scss'
import ButtonNavDashboard from '../ButtonNavDashboard/ButtonNavDashboard'

type NavDashboardProps = {
  buttonList: { icon: string; link: string }[]
}

const NavDashboard: React.FC<NavDashboardProps> = ({ buttonList }) => {
  return (
    <nav className="ss-nav-dashboard">
      {buttonList.map((button, index) => (
        <ButtonNavDashboard key={index} icon={button.icon} link={button.link} />
      ))}
    </nav>
  )
}

export default NavDashboard
