import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import './Dashboard.scss'
import NavDashboard from '../../components/NavDashboard/NavDashboard'
import Card from '../../components/Card/Card'
import LineChartComponent from '../../components/LineChart/LineChart'
import RadialBarChartComponent from '../../components/RadialBarChart/RadialBarChart'
import RadarChartComponent from '../../components/RadarChart/RadarChart'
import { getUserData } from '../../services/api'
import { UserData } from '../../types/user'

import icon1 from '../../assets/icon1.svg'
import icon2 from '../../assets/icon2.svg'
import icon3 from '../../assets/icon3.svg'
import icon4 from '../../assets/icon4.svg'

const buttonList = [
  { icon: icon1, link: '#' },
  { icon: icon2, link: '#' },
  { icon: icon3, link: '#' },
  { icon: icon4, link: '#' },
]

const gridAreaList = [
  { gridArea: '1 / 1 / 2 / 4' },
  { gridArea: '2 / 1 / 3 / 2' },
  { gridArea: '2 / 2 / 3 / 3' },
  { gridArea: '2 / 3 / 3 / 4' },
  { gridArea: '1 / 4 / 3 / 5' },
]

type RouteParams = {
  userId: string
}

const Dashboard: React.FC = () => {
  const [user, setUser] = useState<UserData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const { userId } = useParams<RouteParams>()

  useEffect(() => {
    if (!userId) {
      console.error('userId is missing from the URL')
      return
    }
    const getUserInfo = async () => {
      try {
        setLoading(true)
        const userData = await getUserData(userId)
        setUser(userData)
      } catch (error) {
        setError((error as Error).message)
      } finally {
        setLoading(false)
      }
    }
    getUserInfo()
  }, [userId])

  return (
    <div className="ss-dashboard">
      {loading && <h1>Chargement données utilisateur...</h1>}
      {error && <h1>Erreur : {error}</h1>}
      {user && user.data && user.data.userInfos && (
        <>
          <div className="ss-dashboard__sidebar">
            <NavDashboard buttonList={buttonList} />
            <footer className="ss-dashboard__sidebar__footer">
              <span className="ss-dashboard__sidebar__footer__copyright">
                Copyright SportSee {new Date().getFullYear()}
              </span>
            </footer>
          </div>
          <div className="ss-dashboard__content">
            <div className="ss-dashboard__content-wrap">
              <section className="ss-dashboard__content__header">
                <h1>
                  Bonjour{' '}
                  <span className="ss-dashboard__content__header__name">
                    {user && user.data.userInfos.firstName}
                  </span>
                </h1>
                <p>Félicitations ! Vous avez explosé vos objectifs hier 👏</p>
              </section>
              <section className="ss-dashboard__content__main">
                <Card
                  gridArea={gridAreaList[0]}
                  aspectRatio={{ aspectRatio: '167/64' }}
                >
                  <h2>Activité quotidienne</h2>
                </Card>
                <Card
                  gridArea={gridAreaList[1]}
                  background={{ backgroundColor: '#FF0000' }}
                  padding={{ padding: '0' }}
                >
                  <LineChartComponent />
                </Card>
                <Card
                  gridArea={gridAreaList[2]}
                  background={{ backgroundColor: '#282D30' }}
                  padding={{ padding: '5px' }}
                >
                  <RadarChartComponent />
                </Card>
                <Card gridArea={gridAreaList[3]}>
                  <RadialBarChartComponent />
                </Card>
                <div style={gridAreaList[4]}></div>
              </section>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default Dashboard
