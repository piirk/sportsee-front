import './Error.scss'
import errorIcon from '../../assets/error.svg'

interface ErrorProps {
  code?: number
  message?: string
  iconBlack?: boolean
  textWhite?: boolean
}

const Error: React.FC<ErrorProps> = ({
  code = 404,
  message = "La page que vous recherchez n'existe pas.",
  iconBlack = false,
  textWhite = false,
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
        <img
          className={`ss-error__icon ${iconBlack ? 'ss-error__icon--black' : ''}`}
          src={errorIcon}
          alt="Erreur"
        />
        <p
          className={`ss-error__message--small ${textWhite ? 'ss-error__message--small--white' : ''}`}
        >
          {message}
        </p>
      </div>
    )
  }
}

export default Error
