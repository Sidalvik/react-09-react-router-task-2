import React from 'react';
import PropTypes from 'prop-types';
import './ItemPost.css';
import PostCard from '../../PostCard/PostCard';

function ItemPost(props) {
  const {post} = props;

  return (
    <article className='item-post post-card-wrap' role='button'>
        <PostCard post={post}/>
    </article>
  )
}

ItemPost.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    content: PropTypes.string.isRequired,
    created: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    avatar: PropTypes.string,
    author: PropTypes.string,
  }),
}

export default ItemPost
