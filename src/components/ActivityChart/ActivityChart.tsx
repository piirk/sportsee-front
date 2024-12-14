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
import { useEffect, useState } from 'react'
import { getUserActivity } from '../../services/api'

type ActivityChartProps = {
  userId: number
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
    return null
  }

  const formattedData = userActivity.sessions.map((session) => ({
    day: new Date(session.day).getDate(),
    kilogram: session.kilogram,
    calories: session.calories,
  }))

  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart barCategoryGap={60} barGap={8} barSize={7} data={formattedData}>
        <Legend iconType="circle" verticalAlign="top" />
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
          fill="steelblue"
          name="Poids (kg)"
          unit="kg"
          radius={[10, 10, 0, 0]}
        />
        <Bar
          yAxisId="left"
          dataKey="calories"
          name="Calories brûlées (kCal)"
          unit="kCal"
          radius={[10, 10, 0, 0]}
        />
      </BarChart>
    </ResponsiveContainer>
  )
}

export default ActivityChart
