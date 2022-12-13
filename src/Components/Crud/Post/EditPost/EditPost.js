import React from 'react';
import PropTypes from 'prop-types';
import PostCard from '../../PostCard/PostCard';
import CloseButton from '../../CloseButton/CloseButton';
// import {Link} from 'react-router-dom';

function EditPost(props) {

  return (
    <article className='post-card-wrap'>
      <div className="title-bar">
        <p>Редактировать публикацию</p>
        <CloseButton/>
      </div>
      <PostCard/>
    </article>
  )
}

EditPost.propTypes = {
    props: PropTypes.any,
}

export default EditPost
