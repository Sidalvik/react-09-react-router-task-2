import React from 'react';
import PropTypes from 'prop-types';

function Loader(props) {
  return (
    <div className='loader'>
        <div className="loader-circle"></div>
        <p>Загрузка...</p>
    </div>
  )
}

Loader.propTypes = {
    props: PropTypes.any,
}

export default Loader
