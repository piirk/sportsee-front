import { UserActivity } from '../../models/UserActivity'

type ActivityChartProps = {
  data: UserActivity
}

const ActivityChart: React.FC<ActivityChartProps> = ({ data }) => {
  return (
    <div>
      <h2>Activité quotidienne</h2>
    </div>
  )
}

export default ActivityChart
