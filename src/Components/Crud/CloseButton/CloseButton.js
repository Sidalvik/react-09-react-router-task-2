import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import './CloseButton.css';

function CloseButton(props) {
  const {linkTo} = props;
  return (
    <Link to={linkTo} className='close-btn'>&#9587;</Link>
  )
}

CloseButton.defaultProps = {
  linkTo: '/',
}

CloseButton.propTypes = {
    linkTo: PropTypes.string,
}

export default CloseButton
