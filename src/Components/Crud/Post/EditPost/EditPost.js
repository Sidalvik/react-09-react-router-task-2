import React from 'react';
import PropTypes from 'prop-types';
import CloseButton from '../../CloseButton/CloseButton';
import Button from '../../Button/Button';

function EditPost(props) {
  const {post, form, onChange: handleChange, publicPost, viewPost} = props;
  const contentName='content';

  const handleSave = () => {
    if (!form || !form[contentName] || (post[contentName] === form[contentName])) return;
    publicPost(post.id);
    viewPost();
  }

  return (
    <form className='post-card-wrap'>
        <CloseButton linkTo={`/posts/${post.id}`} onClick={viewPost} />
      <div className="title">
        <p>Редактировать публикацию</p>
      </div>
      <div className="post-body">
        <textarea onChange={handleChange} name={contentName} maxLength='250' value={form ? form[contentName] : ''}></textarea>
      </div>
      <div className="btn-bar">
        <Button color='blue' onClick={handleSave}>Сохранить</Button>
      </div>
    </form>
  )
}

EditPost.propTypes = {
    post: PropTypes.shape({
      id: PropTypes.number.isRequired,
      content: PropTypes.string.isRequired,
    }),
    form: PropTypes.shape({
      content: PropTypes.string,
    }),
    setForm: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    publicPost: PropTypes.func.isRequired,
    editPost: PropTypes.func.isRequired,
    viewPost: PropTypes.func.isRequired,
}

export default EditPost
