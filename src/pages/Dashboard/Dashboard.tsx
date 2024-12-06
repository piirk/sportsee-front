import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import './Dashboard.scss'
import NavDashboard from '../../components/NavDashboard/NavDashboard'
import Card from '../../components/Card/Card'
import ObjectiveChart from '../../components/ObjectiveChart/ObjectiveChart'
import ScoreChart from '../../components/ScoreChart/ScoreChart'
import PerformanceChart from '../../components/PerformanceChart/PerformanceChart'
import { User } from '../../models/User'
import { UserService } from '../../services/UserService'

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
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const { userId } = useParams<RouteParams>()

  useEffect(() => {
    if (!userId) {
      console.error('userId is missing from the URL')
      return
    }

    const userService = new UserService()

    // Load user data
    const loadUser = async () => {
      try {
        setLoading(true)
        await userService.loadUser(userId)
        const loadedUser = userService.getUser()

        if (loadedUser) {
          setUser(loadedUser)
        } else {
          setError('Failed to load user data')
        }
      } catch (error) {
        setError('Error loading user data')
        console.error(error)
      } finally {
        setLoading(false)
      }
    }

    loadUser()
  }, [userId])

  console.log(user)

  return (
    <div className="ss-dashboard">
      {loading && <h1>Chargement données utilisateur...</h1>}
      {error && <h1>Erreur : {error}</h1>}
      {user && (
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
                    {user && user.getFirstName()}
                  </span>
                </h1>
                {true ? (
                  <p>Félicitations ! Vous avez explosé vos objectifs hier 👏</p>
                ) : (
                  <p>Continuez comme ça, vous êtes sur la bonne voie ! 💪</p>
                )}
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
                  <ObjectiveChart />
                </Card>
                <Card
                  gridArea={gridAreaList[2]}
                  background={{ backgroundColor: '#282D30' }}
                  padding={{ padding: '5px' }}
                >
                  <PerformanceChart data={user.getPerformance()} />
                </Card>
                <Card gridArea={gridAreaList[3]}>
                  <ScoreChart score={user.getDailyScore()} />
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
