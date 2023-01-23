import React from 'react';
import PropTypes from 'prop-types';
import PostCard from '../../PostCard/PostCard';
import CloseButton from '../../CloseButton/CloseButton';
import Button from '../../Button/Button';

function ViewPost(props) {
  const {post, editPost, deletePost : deletingPost} = props;
  return (
    <article className='post-card-wrap'>
        <CloseButton/>
        <PostCard post={post}/>

      <div className="btn-bar">
        <Button color='blue' onClick={editPost}>Изменить</Button>
        <Button color='red'  onClick={() => deletingPost(post.id)}>Удалить</Button>
      </div>
    </article>   
  )
}

ViewPost.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    content: PropTypes.string.isRequired,
    created: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    avatar: PropTypes.string,
    author: PropTypes.string,
  }),
  editPost: PropTypes.func.isRequired,
  viewPost: PropTypes.func.isRequired,
  deletePost: PropTypes.func.isRequired,


}

export default ViewPost
