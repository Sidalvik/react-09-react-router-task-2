import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import './CloseButton.css';

function CloseButton(props) {
  const {linkTo, onClick} = props;

  return (
    <Link to={linkTo} className='close-btn' onClick={onClick}>&#9587;</Link>
  )
}

CloseButton.defaultProps = {
  linkTo: '/',
}

CloseButton.propTypes = {
    linkTo: PropTypes.string,
    onClick: PropTypes.func,
}

export default CloseButton
