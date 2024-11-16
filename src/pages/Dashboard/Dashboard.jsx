import React, { useState, useEffect } from 'react'
import './Dashboard.scss'
import NavDashboard from '../../components/NavDashboard/NavDashboard'

import icon1 from '../../assets/icon1.svg'
import icon2 from '../../assets/icon2.svg'
import icon3 from '../../assets/icon3.svg'
import icon4 from '../../assets/icon4.svg'

const buttonList = [
  { icon: icon1, link: '/' },
  { icon: icon2, link: '/' },
  { icon: icon3, link: '/' },
  { icon: icon4, link: '/' },
]

const Dashboard = () => {
  const [data, setData] = useState(null)

  useEffect(() => {
    fetch('http://localhost:3000/user/18')
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error('Error:', error))
  }, [])

  console.log(data)

  return (
    <div className="ss-dashboard">
      <div className="ss-dashboard__sidebar">
        <div className="ss-dashboard__sidebar__nav-container">
          <NavDashboard buttonList={buttonList} />
        </div>
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
              {data && data.data.userInfos.firstName}
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
