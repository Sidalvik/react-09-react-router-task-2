import React from 'react';
import PropTypes from 'prop-types';
import './Menu.css';
import { Link } from 'react-router-dom';

function Menu(props) {
  return (
    <div className='menu'>
      <Link to='/posts/new' className='blue-btn btn'>Создать пост</Link>
    </div>
  )
}

Menu.propTypes = {
    props: PropTypes.any,
}

export default Menu
