import React from 'react';
import PropTypes from 'prop-types';
import PostCard from '../../PostCard/PostCard';
import './ItemPost.css';



function ItemPost(props) {
  const {post} = props;

  return (
    <article className='item-post post-card-wrap' role='button'>
        <PostCard post={post}/>
        <div className="btn-bar">
            
        </div>
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
