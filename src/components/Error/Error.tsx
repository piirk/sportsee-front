import './Error.scss'

const Error: React.FC = () => {
  return (
    <div className="ss-error">
      <h1 className="ss-error__404">404</h1>
      <p className="ss-error__message">
        La page que vous recherchez n'existe pas.
      </p>
    </div>
  )
}

export default Error
