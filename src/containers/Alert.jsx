const Alert = ({ text, color }) => {
  return (
    <div className={`alert-container ${color}`}>
      <p className='alert-text'>{text}</p>
    </div>
  )
}

export default Alert
