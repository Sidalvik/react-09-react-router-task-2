import React from 'react';
import PropTypes from 'prop-types';
import './Page404.css';
import {Link} from 'react-router-dom';

function Page404(props) {

  return (
    <div className='page-404'>
        <h2>Это страница 404</h2>
        <p>Страницы по адресу "{window.location.href }" не существует</p>
        <p><Link to='/' className='blue-btn btn'>Вернуться на главную страницу...</Link></p>
    </div>
  )
}

Page404.propTypes = {
  props: PropTypes.any,
}

export default Page404
