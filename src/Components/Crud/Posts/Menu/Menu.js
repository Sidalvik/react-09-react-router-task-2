import React from 'react';
import PropTypes from 'prop-types';
import './Menu.css';
import Button from '../../Button/Button';

function Menu(props) {
  return (
    <div className='menu'>
      <Button type='link' linkTo='/posts/new' color='blue'>Создать пост</Button>
    </div>
  )
}

Menu.propTypes = {
    props: PropTypes.any,
}

export default Menu
