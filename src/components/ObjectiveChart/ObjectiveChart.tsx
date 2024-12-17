import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Rectangle,
} from 'recharts'
import './ObjectiveChart.scss'
import { UserSessions } from '../../models/UserSessions'
import { useEffect, useState } from 'react'
import { getUserSessions } from '../../services/api'
import Error from '../Error/Error'

const CustomizedDot: React.FC<{
  cx?: number
  cy?: number
}> = ({ cx, cy }) => {
  return (
    <svg
      className="ss-objective-chart__dot"
      x={cx! - 15}
      y={cy! - 15}
      width={30}
      height={30}
    >
      <circle cx="15" cy="15" r="13" fill="white" opacity="0.2" />
      <circle cx="15" cy="15" r="8" fill="white" />
    </svg>
  )
}

const CustomTick: React.FC<{
  x: number
  y: number
  payload: { value: string }
}> = ({ x, y, payload }) => (
  <text
    x={x}
    y={y + 16}
    textAnchor="middle"
    fill="white"
    fontSize={12}
    fontWeight={500}
    opacity={0.5}
  >
    {payload.value}
  </text>
)

const CustomTooltip: React.FC<{
  active?: boolean
  payload?: { value: number }[]
}> = ({ active, payload }) => {
  if (active && payload && payload.length > 0) {
    return (
      <div
        style={{
          backgroundColor: 'white',
          padding: '10px',
          border: '1px solid #ccc',
          color: 'black',
          fontWeight: 'bold',
        }}
      >
        <p>{`${payload[0].value} min`}</p>
      </div>
    )
  }
  return null
}

const CustomCursor: React.FC<{
  points?: { x: number; y: number }[]
  width?: number
}> = ({ points, width }: any) => {
  const { x } = points[0]
  return (
    <Rectangle
      fill="rgba(0, 0, 0, 0.1)"
      x={x}
      y={-1}
      width={width}
      height={500}
    />
  )
}

// table des jours
const days = ['L', 'M', 'M', 'J', 'V', 'S', 'D']

type ObjectiveChartProps = {
  userId: number
}

const ObjectiveChart: React.FC<ObjectiveChartProps> = ({ userId }) => {
  const [userSessions, setUserSessions] = useState<UserSessions | null>(null)

  useEffect(() => {
    const fetchUserSessions = async () => {
      try {
        const userSessionsResponse = await getUserSessions(userId.toString())
        setUserSessions(new UserSessions(userSessionsResponse))
      } catch (error) {
        console.error('Error loading user sessions:', error)
      }
    }

    fetchUserSessions()
  }, [userId])

  if (!userSessions) {
    return (
      <Error
        code={999}
        message="Impossible de charger les données de sessions"
        iconBlack={true}
      />
    )
  }

  const formattedData = userSessions.sessions.map((item) => {
    const labelledDay = days[item.day - 1]
    return {
      day: labelledDay,
      sessionLength: item.sessionLength,
    }
  })

  const minY = Math.min(
    ...formattedData.map((session) => session.sessionLength),
  )

  return (
    <div className="ss-objective-chart">
      <div className="ss-objective-chart__container">
        <h2 className="ss-objective-chart__title">
          Durée moyenne des
          <br />
          sessions
        </h2>
        <div className="ss-objective-chart__dot-overlay"></div>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={formattedData}
            margin={{ top: 70, right: 0, bottom: 10, left: 0 }}
          >
            <defs>
              <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#FFFFFF" stopOpacity={0.3} />
                <stop offset="100%" stopColor="#FFFFFF" stopOpacity={1} />
              </linearGradient>
            </defs>
            <XAxis
              dataKey="day"
              padding={{ left: 10, right: 10 }}
              axisLine={false}
              tickLine={false}
              tick={(props) => <CustomTick {...props} />}
            />
            <YAxis domain={[minY, 'dataMax']} hide />
            <Tooltip cursor={<CustomCursor />} content={<CustomTooltip />} />
            <Line
              dot={false}
              type="monotone"
              dataKey="sessionLength"
              stroke="url(#lineGradient)"
              strokeWidth={4}
              activeDot={<CustomizedDot />}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default ObjectiveChart
