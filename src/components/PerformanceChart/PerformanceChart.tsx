import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
  Text,
} from 'recharts'
import { UserPerformance } from '../../types/user'

const renderPolarAngleAxis = ({
  payload,
  x,
  y,
  cx,
  cy,
  ...rest
}: {
  payload: {
    coordinate: number
    value: string
    index: number
    offset: number
  }
  x: number
  y: number
  cx: number
  cy: number
} & {
  textAnchor: 'end' | 'middle' | 'start' | 'inherit'
  orientation: string
  radius: number
  className: string
  stroke?: string
  fill?: string
  index: number
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

type PerformanceChartProps = {
  data: UserPerformance
}

const RadarChartComponent: React.FC<PerformanceChartProps> = ({ data }) => {
  const formattedData = data.data.map((item) => ({
    subject: data.kind[item.kind],
    A: item.value,
    fullMark: 100,
  }))

  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadarChart
        cx="50%"
        cy="50%"
        outerRadius="75%"
        data={formattedData}
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
