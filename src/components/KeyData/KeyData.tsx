type KeyDataProps = {
  title: string
  value: number
}

const KeyData: React.FC<KeyDataProps> = ({ title, value }) => {
  console.log(value)
  return (
    <div>
      <h2>
        {value}
        {title === 'calorieCount' ? 'kCal' : 'g'}
      </h2>
      <h3>{title}</h3>
    </div>
  )
}

export default KeyData
