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

// Table de traduction des `kind`
const kindTranslations: Record<string, string> = {
  cardio: 'Cardio',
  energy: 'Énergie',
  endurance: 'Endurance',
  strength: 'Force',
  speed: 'Vitesse',
  intensity: 'Intensité',
}

const RadarChartComponent: React.FC = () => {
  // Récupère les données de performance via l'API - todo: remplacer par les données de l'utilisateur
  const data: UserPerformance = {
    userId: 1,
    kind: {
      1: 'cardio',
      2: 'energy',
      3: 'endurance',
      4: 'strength',
      5: 'speed',
      6: 'intensity',
    },
    data: [
      { value: 80, kind: 1 },
      { value: 90, kind: 2 },
      { value: 70, kind: 3 },
      { value: 60, kind: 4 },
      { value: 80, kind: 5 },
      { value: 85, kind: 6 },
    ],
  }

  const formattedData = data.data.map((item) => {
    const subject =
      kindTranslations[data.kind[item.kind]] || data.kind[item.kind]
    return {
      subject,
      A: item.value,
      fullMark: 100,
    }
  })

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
