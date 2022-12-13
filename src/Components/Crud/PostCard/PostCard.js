import React from 'react';
import PropTypes from 'prop-types';
import './PostCard.css';

function PostCard(props) {
  const {post} = props;

  return (
    <div className='post-card'>
      <div className='post-card__title'>
        <div className='avatar-box'>
          <img className='avatar' src={post.avatar || '/logo.svg'} alt="avatar" />
        </div>
        <div>
          <div className="author-name">{post.author || 'Аноним'}</div>
          <time >{post?.created && (new Date(post?.created).toLocaleDateString('ru', {year: 'numeric', month: 'long', day: 'numeric'}))}</time>
        </div>
      </div>
      <div className="post-card__body">
        <p>{post.content}</p>
      </div>
    </div>
  )
}


PostCard.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    content: PropTypes.string.isRequired,
    created: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    avatar: PropTypes.string,
    author: PropTypes.string,
  }),
}

export default PostCard
