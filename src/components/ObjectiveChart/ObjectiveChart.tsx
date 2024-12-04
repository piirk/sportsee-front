import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'

const sessions = [
  {
    day: 'L',
    sessionLength: 30,
  },
  {
    day: 'M',
    sessionLength: 40,
  },
  {
    day: 'M',
    sessionLength: 50,
  },
  {
    day: 'J',
    sessionLength: 30,
  },
  {
    day: 'V',
    sessionLength: 30,
  },
  {
    day: 'S',
    sessionLength: 50,
  },
  {
    day: 'D',
    sessionLength: 50,
  },
]

const CustomizedDot: React.FC<{
  cx?: number
  cy?: number
}> = (props) => {
  const { cx, cy } = props
  return (
    <svg x={cx! - 15} y={cy! - 15} width={30} height={30}>
      <circle cx="15" cy="15" r="13" fill="white" opacity="0.2" />
      <circle cx="15" cy="15" r="8" fill="white" />
    </svg>
  )
}

const LineChartComponent: React.FC = () => {
  const minY = Math.min(...sessions.map((session) => session.sessionLength))

  return (
    <ResponsiveContainer width="100%" height="70%">
      <LineChart data={sessions}>
        <XAxis
          dataKey="day"
          padding="no-gap"
          axisLine={false}
          tickLine={false}
        />
        <YAxis domain={[minY, 'dataMax']} hide />
        <Tooltip cursor={false} />
        <Line
          dot={false}
          type="monotone"
          dataKey="sessionLength"
          stroke="#8884d8"
          activeDot={<CustomizedDot />}
        />
      </LineChart>
    </ResponsiveContainer>
  )
}

export default LineChartComponent
