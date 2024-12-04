import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
  Text,
} from 'recharts'

const data = [
  {
    subject: 'Math',
    A: 120,
    B: 110,
    fullMark: 150,
  },
  {
    subject: 'Chinese',
    A: 98,
    B: 130,
    fullMark: 150,
  },
  {
    subject: 'English',
    A: 86,
    B: 130,
    fullMark: 150,
  },
  {
    subject: 'Geography',
    A: 99,
    B: 100,
    fullMark: 150,
  },
  {
    subject: 'Physics',
    A: 85,
    B: 90,
    fullMark: 150,
  },
  {
    subject: 'History',
    A: 65,
    B: 85,
    fullMark: 150,
  },
]

const renderPolarAngleAxis = ({
  payload,
  x,
  y,
  cx,
  cy,
  ...rest
}: {
  payload: any
  x: number
  y: number
  cx: number
  cy: number
  rest: any
}) => {
  return (
    <Text
      {...rest}
      verticalAnchor="middle"
      // Applique un padding entre les labels et le centre
      y={y + (y - cy) / 20}
      x={x + (x - cx) / 20}
      fill="#ffffff"
      fontSize={12}
      fontWeight="500"
    >
      {payload.value}
    </Text>
  )
}

const RadarChartComponent: React.FC = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadarChart
        cx="50%"
        cy="50%"
        outerRadius="75%"
        data={data}
        margin={{ top: 0, right: 20, bottom: 0, left: 20 }}
      >
        <PolarGrid radialLines={false} />

        <PolarAngleAxis dataKey="subject" tick={renderPolarAngleAxis} />
        <Radar name="Mike" dataKey="A" fill="#FF0101B2" fillOpacity={0.7} />
      </RadarChart>
    </ResponsiveContainer>
  )
}

export default RadarChartComponent
