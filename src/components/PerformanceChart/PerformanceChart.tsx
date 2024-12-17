import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
  Text,
} from 'recharts'
import { UserPerformance } from '../../models/UserPerformance'
import { useEffect, useState } from 'react'
import { getUserPerformance } from '../../services/api'
import Error from '../Error/Error'
import {
  kindTranslations,
  specificOrder,
} from '../../config/performanceChartConfig'

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
}): JSX.Element => (
  <Text
    {...rest}
    verticalAnchor="middle"
    // Applique un padding entre les labels et le centre
    y={y + (y - cy) / 100}
    x={x + (x - cx) / 100}
    fill="#ffffff"
    fontSize={12}
    fontWeight="500"
  >
    {payload.value}
  </Text>
)

type PerformanceChartProps = {
  userId: number
}

const PerformanceChart: React.FC<PerformanceChartProps> = ({ userId }) => {
  const [userPerformance, setUserPerformance] =
    useState<UserPerformance | null>(null)

  useEffect(() => {
    const fetchUserPerformance = async () => {
      try {
        const userPerformanceResponse = await getUserPerformance(
          userId.toString(),
        )
        setUserPerformance(new UserPerformance(userPerformanceResponse))
      } catch (error) {
        console.error('Error loading user performance:', error)
      }
    }

    fetchUserPerformance()
  }, [userId])

  if (!userPerformance) {
    return (
      <Error
        code={999}
        message="Impossible de charger les données de performance"
        textWhite={true}
      />
    )
  }

  const formattedData = userPerformance.data
    .map((item) => {
      const subject = kindTranslations[userPerformance.getKindName(item.kind)]
      return {
        subject,
        A: item.value,
        fullMark: 100,
      }
    })
    .sort(
      (a, b) =>
        specificOrder.indexOf(a.subject) - specificOrder.indexOf(b.subject),
    )

  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadarChart
        cx="50%"
        cy="50%"
        outerRadius="70%"
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

export default PerformanceChart
