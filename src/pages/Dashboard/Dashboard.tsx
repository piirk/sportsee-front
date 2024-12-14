import { useParams } from 'react-router-dom'
import './Dashboard.scss'
import NavDashboard from '../../components/NavDashboard/NavDashboard'
import Card from '../../components/Card/Card'
import ActivityChart from '../../components/ActivityChart/ActivityChart'
import ObjectiveChart from '../../components/ObjectiveChart/ObjectiveChart'
import ScoreChart from '../../components/ScoreChart/ScoreChart'
import PerformanceChart from '../../components/PerformanceChart/PerformanceChart'
import KeyData from '../../components/KeyData/KeyData'
import Error from '../../components/Error/Error'
import { buttonList } from '../../config/navDashboardConfig'
import { gridAreaList } from '../../config/layoutConfig'
import { useEffect, useState } from 'react'
import { UserData } from '../../models/UserData'
import { getUserData } from '../../services/api'

type RouteParams = {
  userId: string
}

const Dashboard: React.FC = () => {
  const { userId } = useParams<RouteParams>()

  const [userData, setUserData] = useState<UserData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchUserData = async () => {
      setLoading(true)
      if (userId) {
        try {
          const userDataResponse = await getUserData(userId.toString())
          setUserData(new UserData(userDataResponse))
        } catch (error) {
          setLoading(false)
          setError((error as Error).message)
          console.error('Error loading user data:', error)
        } finally {
          setLoading(false)
        }
      } else {
        setLoading(false)
        setError('userId is undefined')
        console.error('Error: userId is undefined')
      }
    }

    fetchUserData()
  }, [userId])

  return (
    <div className="ss-dashboard">
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
          {loading && <h1>Chargement données utilisateur...</h1>}
          {error && <Error />}
          {userData && (
            <>
              <section className="ss-dashboard__content__header">
                <h1>
                  Bonjour{' '}
                  <span className="ss-dashboard__content__header__name">
                    {userData.getFirstName()}
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
                  <ActivityChart userId={userData.id} />
                </Card>
                <Card
                  gridArea={gridAreaList[1]}
                  background={{ backgroundColor: '#FF0000' }}
                  padding={{ padding: '0' }}
                >
                  <ObjectiveChart userId={userData.id} />
                </Card>
                <Card
                  gridArea={gridAreaList[2]}
                  background={{ backgroundColor: '#282D30' }}
                  padding={{ padding: '5px' }}
                >
                  <PerformanceChart userId={userData.id} />
                </Card>
                <Card gridArea={gridAreaList[3]}>
                  <ScoreChart score={userData.getDailyScore()} />
                </Card>
                <div
                  className="ss-dashboard__content__main__keydata"
                  style={gridAreaList[4]}
                >
                  {userData &&
                    Object.entries(userData.keyData).map(([key, value]) => (
                      <Card key={key} aspectRatio={{ aspectRatio: 'unset' }}>
                        <KeyData dataKey={key} value={value} />
                      </Card>
                    ))}
                </div>
              </section>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default Dashboard
