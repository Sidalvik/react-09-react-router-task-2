import React from 'react';
import PropTypes from 'prop-types';
import './Page404.css';
import Button from '../Button/Button';

function Page404(props) {

  return (
    <div className='page-404'>
        <h2>Это страница 404</h2>
        <p>Страницы по адресу "{window.location.href }" не существует</p>
        <p><Button type='link' linkTo='/'>Вернуться на главную страницу...</Button></p>
    </div>
  )
}

Page404.propTypes = {
  props: PropTypes.any,
}

export default Page404
