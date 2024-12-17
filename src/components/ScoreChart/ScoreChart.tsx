import { RadialBarChart, RadialBar, ResponsiveContainer } from 'recharts'
import './ScoreChart.scss'

type ScoreChartProps = {
  score: number
}

const ScoreChart: React.FC<ScoreChartProps> = ({ score }) => {
  return (
    <div className="ss-radial-bar-chart">
      <h2 className="ss-radial-bar-chart__title">Score</h2>
      <div className="ss-radial-bar-chart__text">
        <p>
          <span className="ss-radial-bar-chart__text__value">
            {score * 100}%
          </span>
          <br />
          de votre objectif
        </p>
      </div>

      <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart
          cx="50%"
          cy="50%"
          innerRadius="75%"
          outerRadius="75%"
          barSize={100}
          startAngle={180}
          endAngle={-180}
          data={score ? [{ value: score }] : []}
          margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
        >
          <RadialBar
            dataKey="value"
            fill="#ffffff"
            data={[{ value: 1 }]}
            isAnimationActive={false}
          />
          <RadialBar
            maxBarSize={20}
            cornerRadius={20}
            dataKey="value"
            fill="#ff0000"
          />
        </RadialBarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default ScoreChart
