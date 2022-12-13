import React from 'react'
import PropTypes from 'prop-types'

function ShowError(props) {
  const {text} = props;
  return (
    <div className='error'>
      <p className='error-logo'>&#9888;</p>
      <p className='error-text'>{text}</p>
    </div>
  )
}

ShowError.defaultProps = {
  text: 'Ошибка! Возникла неизвестная ошибка.',
}

ShowError.propTypes = {
  text: PropTypes.string,
}

export default ShowError
