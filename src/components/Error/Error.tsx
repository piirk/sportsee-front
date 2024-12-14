import './Error.scss'
import errorIcon from '../../assets/error.svg'

interface ErrorProps {
  code?: number
  message?: string
}

const Error: React.FC<ErrorProps> = ({
  code = 404,
  message = "La page que vous recherchez n'existe pas.",
}) => {
  if (code !== 999) {
    return (
      <div className="ss-error">
        <h1 className="ss-error__code">{code}</h1>
        <p className="ss-error__message">{message}</p>
      </div>
    )
  } else {
    return (
      <div className="ss-error">
        <img className="ss-error__icon" src={errorIcon} alt="Erreur" />
        <p className="ss-error__message--small">{message}</p>
      </div>
    )
  }
}

export default Error
