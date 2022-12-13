import React, { useState,  useContext } from 'react';
import PropTypes from 'prop-types';
import './NewPost.css';
import CloseButton from '../CloseButton/CloseButton';
import Button from '../Button/Button';
import useStorage from '../../../hooks/useStorage';
import UrlsContext from '../../../contexts/UrlsContext';
import Modal from '../../Modal/Modal';
import Loader from '../../Modal/Loader/Loader';
import ShowError from '../../Modal/ShowError/ShowError';

function NewPost(props) {
  const {resetPostList} = props;
  const {urls} = useContext(UrlsContext);
  const [formStorage, setFormStorage] = useStorage(sessionStorage, 'formNewPost', true);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (event) => {
    setFormStorage({[event.currentTarget.name]: event.currentTarget.value});
  }

  const handlePost = function() {
    if (formStorage?.length < 1) return;

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({
        id: 0,
        content: formStorage.content,
      }),
    }

    setIsLoading(true);
    (async () => {
      try {
        const response = await fetch(urls.remouteUrl, options);
  
        if (response.ok) {
          setFormStorage('');
          resetPostList();
        } else {
          setError(new Error(response.statusText));
        }
        
      } catch (error) {
        setError(error);
        setTimeout(() => setError(null), 10 * 1000);
      } finally {
        setIsLoading(false);
      }
    })();
  }

  return (
    <>
      {isLoading && <Modal><Loader/></Modal>}
      {error && <Modal><ShowError text={error}/></Modal>}
      <form  className='post-card-wrap'>
        <CloseButton/>
        <div className="title">
          <p>Новый пост...</p>
        </div>
        <div className="post-body">
          <textarea onChange={handleChange} name='content' maxLength='250' value={formStorage ? formStorage['content'] : ''}></textarea>
        </div>
        <div className="btn-bar">
          <Button color='blue' text='Опубликовать' onClick={handlePost}/>
        </div>
      </form>
    </>
  )
}

NewPost.propTypes = {
  resetPostList: PropTypes.func,
}

export default NewPost
