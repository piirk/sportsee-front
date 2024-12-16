import {
  ResponsiveContainer,
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import { UserActivity } from '../../models/UserActivity'
import { getUserActivity } from '../../services/api'
import Error from '../Error/Error'
import { useEffect, useState } from 'react'
import './ActivityChart.scss'

type ActivityChartProps = {
  userId: number
}

const CustomLegend = () => {
  return (
    <div className="custom-legend">
      <span className="custom-legend__title">Activité quotidienne</span>
      <div className="custom-legend__items">
        <span className="custom-legend__item">
          <span
            className="custom-legend__item--color"
            style={{ backgroundColor: '#282D30' }}
          ></span>
          Poids (kg)
        </span>
        <span className="custom-legend__item">
          <span
            className="custom-legend__item--color"
            style={{ backgroundColor: '#E60000' }}
          ></span>
          Calories brûlées (kCal)
        </span>
      </div>
    </div>
  )
}

const ActivityChart: React.FC<ActivityChartProps> = ({ userId }) => {
  const [userActivity, setUserActivity] = useState<UserActivity | null>(null)

  useEffect(() => {
    const fetchUserActivity = async () => {
      try {
        const userActivityResponse = await getUserActivity(userId.toString())
        setUserActivity(new UserActivity(userActivityResponse))
      } catch (error) {
        console.error('Error loading user activity:', error)
      }
    }

    fetchUserActivity()
  }, [userId])

  if (!userActivity) {
    return (
      <Error
        code={999}
        message="Impossible de charger les données d'activité"
      />
    )
  }

  const formattedData = userActivity.sessions.map((session) => ({
    day: new Date(session.day).getDate(),
    kilogram: session.kilogram,
    calories: session.calories,
  }))

  return (
    <>
      <CustomLegend />
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          barCategoryGap={60}
          barGap={8}
          barSize={7}
          data={formattedData}
        >
          <XAxis dataKey="day" tickSize={20} unit="" tickLine={false} />
          <YAxis
            yAxisId="right"
            orientation="right"
            domain={['dataMin - 1', 'dataMax + 1']}
            tickSize={20}
            dataKey="kilogram"
            allowDecimals={false}
            tickLine={false}
            axisLine={false}
          />
          <YAxis yAxisId="left" dataKey="calories" hide={true} />
          <Tooltip />
          <CartesianGrid strokeDasharray="2 2" vertical={false} />
          <Bar
            yAxisId="right"
            dataKey="kilogram"
            name="Poids (kg)"
            unit="kg"
            fill="#282D30"
            radius={[10, 10, 0, 0]}
          />
          <Bar
            yAxisId="left"
            dataKey="calories"
            name="Calories brûlées (kCal)"
            unit="kCal"
            fill="#E60000"
            radius={[10, 10, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </>
  )
}

export default ActivityChart
