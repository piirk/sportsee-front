import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'

const sessions = [
  {
    day: 1,
    sessionLength: 30,
  },
  {
    day: 2,
    sessionLength: 40,
  },
  {
    day: 3,
    sessionLength: 50,
  },
  {
    day: 4,
    sessionLength: 30,
  },
  {
    day: 5,
    sessionLength: 30,
  },
  {
    day: 6,
    sessionLength: 50,
  },
  {
    day: 7,
    sessionLength: 50,
  },
]

const LineChartComponent: React.FC = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        data={sessions}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <XAxis dataKey="day" />

        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Line
          type="monotone"
          dataKey="sessionLength"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </ResponsiveContainer>
  )
}

export default LineChartComponent
