import {
  ResponsiveContainer,
  Bar,
  BarChart,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import { UserActivity } from '../../models/UserActivity'
import { getUserActivity } from '../../services/api'
import Error from '../Error/Error'
import { useEffect, useState } from 'react'
import './ActivityChart.scss'
import { UserActivitySession } from '../../models/UserActivitySession'

type ActivityChartProps = {
  userId: number
}

const CustomLegend: React.FC = () => {
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

const CustomTooltip: React.FC<{
  active?: boolean
  payload?: { value: number }[]
}> = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p className="custom-tooltip__item">{`${payload[0].value}kg`}</p>
        <p className="custom-tooltip__item">{`${payload[1].value}kCal`}</p>
      </div>
    )
  }

  return null
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

  const formattedData = userActivity.sessions.map(
    (session: UserActivitySession) => ({
      day: new Date(session.day).getDate(),
      kilogram: session.kilogram,
      calories: session.calories,
    }),
  )

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
          <YAxis
            yAxisId="right"
            orientation="right"
            domain={['dataMin - 1', 'dataMax']}
            tickSize={20}
            dataKey="kilogram"
            allowDecimals={false}
            tickLine={false}
            axisLine={false}
            tick={{ fill: '#9B9EAC' }}
          />
          <YAxis yAxisId="left" dataKey="calories" hide={true} />
          <CartesianGrid
            stroke="#DEDEDE"
            strokeDasharray="2 2"
            vertical={false}
          />
          <Tooltip content={<CustomTooltip />} />
          <XAxis
            dataKey="day"
            tickSize={20}
            unit=""
            tickLine={false}
            axisLine={{ stroke: '#DEDEDE' }}
            tick={{ fill: '#9B9EAC' }}
          />
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
