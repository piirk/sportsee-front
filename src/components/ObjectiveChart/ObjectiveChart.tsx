import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'
import './ObjectiveChart.scss'

const sessions = [
  { day: 'L', sessionLength: 30 },
  { day: 'M', sessionLength: 40 },
  { day: 'M', sessionLength: 50 },
  { day: 'J', sessionLength: 30 },
  { day: 'V', sessionLength: 30 },
  { day: 'S', sessionLength: 50 },
  { day: 'D', sessionLength: 50 },
]

const CustomizedDot: React.FC<{ cx?: number; cy?: number }> = ({ cx, cy }) => {
  return (
    <svg x={cx! - 15} y={cy! - 15} width={30} height={30}>
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

const ObjectiveChart: React.FC = () => {
  const minY = Math.min(...sessions.map((session) => session.sessionLength))

  return (
    <div className="ss-objective-chart">
      <h2 className="ss-objective-chart__title">Durée moyenne des sessions</h2>
      <div className="ss-objective-chart__container">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={sessions}
            margin={{ top: 10, right: 0, bottom: 10, left: 0 }}
          >
            <defs>
              <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#FFFFFF" stopOpacity={0.3} />
                <stop offset="100%" stopColor="#FFFFFF" stopOpacity={1} />
              </linearGradient>
            </defs>
            <XAxis
              dataKey="day"
              padding="no-gap"
              axisLine={false}
              tickLine={false}
              tick={(props) => <CustomTick {...props} />}
            />
            <YAxis domain={[minY, 'dataMax']} hide />
            <Tooltip cursor={false} />
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
