import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

function Button(props) {
  const {type, color, text, onClick: handleClick}  = props;

  return (
    <button type={type} className={color + '-btn btn'} onClick={handleClick}>{text}</button>
  )
}

Button.defaultProps = {
  type: 'button',
  color: 'blue',
  text: 'Кнопка',
  onClick: () => console.log(`Нажата кнопка: "${this.text}"`),
}

Button.propTypes = {
    type: PropTypes.oneOf(['button', 'submit', 'reset', 'menu']),
    color: PropTypes.oneOf(['blue', 'red']),
    text: PropTypes.string,
    onClick: PropTypes.func,
}

export default Button
