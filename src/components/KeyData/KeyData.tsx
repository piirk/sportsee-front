import { keyDataConfig } from '../../config/keyDataConfig'
import './KeyData.scss'

type KeyDataProps = {
  dataKey: string
  value: number
}

const KeyData: React.FC<KeyDataProps> = ({ dataKey, value }) => {
  const config = keyDataConfig[dataKey]

  if (!config) {
    console.warn(`Pas de configuration trouvée pour : ${dataKey}`)
    return null
  }

  return (
    <figure className="ss-keydata">
      <div
        className="ss-keydata__icon-container"
        style={{ backgroundColor: config.bgColor }}
      >
        <img
          src={config.icon}
          alt={config.title}
          className="ss-keydata__icon"
        />
      </div>
      <figcaption className="ss-keydata__content">
        <h2 className="ss-keydata__value">
          {value}
          {config.unit}
        </h2>
        <h3 className="ss-keydata__title">{config.title}</h3>
      </figcaption>
    </figure>
  )
}

export default KeyData
