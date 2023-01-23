import React from 'react';
import PropTypes from 'prop-types';
import './NewPost.css';
import CloseButton from '../CloseButton/CloseButton';
import Button from '../Button/Button';

function NewPost(props) {
  const {form, onChange: handleChange, publicPost} = props;
  const contentName = 'content';

  return (
    <>
      <form  className='post-card-wrap'>
        <CloseButton/>
        <div className="title">
          <p>Новый пост...</p>
        </div>
        <div className="post-body">
          <textarea onChange={handleChange} name={contentName} maxLength='250' value={form ? form[contentName] : ''}></textarea>
        </div>
        <div className="btn-bar">
          <Button color='blue' onClick={publicPost}>Опубликовать</Button>
        </div>
      </form>
    </>
  )
}

NewPost.propTypes = {
  form: PropTypes.shape(),
  onChange: PropTypes.func,
  publicPost: PropTypes.func,
}

export default NewPost
