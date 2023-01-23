import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

function Button(props) {
  const {color, onClick: handleClick, type}  = props;

  return (
      <button type={type || 'button'} className={color + '-btn btn'} onClick={handleClick}>{props.children}</button>
  )
}

Button.defaultProps = {
  color: 'blue',
}

Button.propTypes = {
    color: PropTypes.oneOf(['blue', 'red']),
    onClick: PropTypes.func,
    type: PropTypes.oneOf(['button', 'submit', 'reset']),
}

export default Button
