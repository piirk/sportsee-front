import React from 'react'
import './Dashboard.scss'
import NavDashboard from '../../components/NavDashboard/NavDashboard'

const Dashboard = () => {
  return (
    <div className="ss-dashboard">
      <div className="ss-dashboard__sidebar">
        <NavDashboard />
        <footer className="ss-dashboard__sidebar__footer">
          <span className="ss-dashboard__sidebar__footer__copyright">
            Copyright SportSee 2020
          </span>
        </footer>
      </div>
      <div className="ss-dashboard__content">
        <section className="ss-dashboard__content__header">
          <h1>
            Bonjour{' '}
            <span className="ss-dashboard__content__header__name">
              {'Thomas'}
            </span>
          </h1>
          <p>Félicitations ! Vous avez explosé vos objectifs hier 👏</p>
        </section>
        <section className="ss-dashboard__main">
          <div className="ss-dashboard__main__card">
            <h2>Activité quotidienne</h2>
          </div>
          <div className="ss-dashboard__main__card"></div>
        </section>
      </div>
    </div>
  )
}

export default Dashboard
