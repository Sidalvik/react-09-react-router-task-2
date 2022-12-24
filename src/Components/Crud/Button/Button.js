import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Button.css';

function Button(props) {
  const {type, linkTo, color, onClick: handleClick}  = props;

  return (
    <>
      {(type === 'button') && <button type={type} className={color + '-btn btn'} onClick={handleClick}>{props.children}</button>}
      {(type === 'link') && <Link to={linkTo} className={color + '-btn btn'} onClick={handleClick}>{props.children}</Link>}
    </>
  )
}

Button.defaultProps = {
  type: 'button',
  linkTo: '/',
  color: 'blue',
}

Button.propTypes = {
    type: PropTypes.oneOf(['button', 'link']),
    color: PropTypes.oneOf(['blue', 'red']),
    linkTo: PropTypes.string,
    onClick: PropTypes.func,
}

export default Button
