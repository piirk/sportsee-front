import { RadialBarChart, RadialBar, ResponsiveContainer } from 'recharts'
import './ScoreChart.scss'

const data = [{ name: 'score', value: 0.12, fill: '#ff0000' }]

const RadialBarChartComponent: React.FC = () => {
  return (
    <div className="ss-radial-bar-chart">
      {/* Cercle blanc central */}
      <div className="ss-radial-bar-chart__circle">
        {/* Texte centré */}
        <div className="ss-radial-bar-chart__circle__text">
          <p>
            <span className="ss-radial-bar-chart__circle__text__value">
              {data[0].value * 100}%
            </span>
            <br />
            de votre objectif
          </p>
        </div>
      </div>

      {/* Graphique RadialBar au-dessus du cercle blanc */}
      <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart
          cx="50%"
          cy="50%"
          innerRadius="100%"
          outerRadius="100%"
          barSize={10}
          startAngle={180}
          endAngle={180 - 360 * data[0].value}
          data={data}
        >
          <RadialBar cornerRadius={20} dataKey="value" />
        </RadialBarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default RadialBarChartComponent
