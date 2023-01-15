import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PostsContext from '../../contexts/PostsContext';
import useStorage from '../../hooks/useStorage';
import Posts from './Posts/Posts';
import Post from './Post/Post';
import NewPost from './NewPost/NewPost';
import Modal from '../Modal/Modal';
import Loader from '../Modal/Loader/Loader';
import ShowError from '../Modal/ShowError/ShowError';
import Page404 from './Page404/Page404';


function Crud(props) {
    const {postsState} = useContext(PostsContext);
    const {postsList, setPostsList} = postsState;
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(null);
    const [formNewPost, setFormNewPost] = useStorage(sessionStorage, 'formNewPost', true);
    const [formEditPost, setFormEditPost] = useStorage(sessionStorage, 'formEditPost', true);
    const [, setAbort] = useState(null);
    
    const remouteUrl = process.env.REACT_APP_POSTS_URL;
    const postFetch = async (url, options, afterOK, afterError, afterFinally) => {
        try {
            setIsLoading(true);
            const response = await fetch(url, options);
    
            if (response.ok) {
                try {
                    const data = await response.json();
                    (typeof afterOK === 'function') && afterOK(data);
                } catch (error) {
                    (typeof afterOK === 'function') && afterOK();
                }
            } else {
                const error = new Error(response.statusText)
                setIsError(error);
                setTimeout(() => setIsError(null), 10 * 1000);
                (typeof afterError === 'function') && afterError(error);
            }
            
        } catch (error) {
            if (error.name !== 'AbortError') {
                setIsError(error);
                setTimeout(() => setIsError(null), 10 * 1000);
            }
            (typeof afterError === 'function') && afterError(error);
        } finally {
            setIsLoading(false);
            (typeof afterFinally === 'function') && afterFinally();
        }
    };  //  postFetch

    const getPostslist = () => {
        const controller = new AbortController();

        setAbort((prevAbort) => {
            prevAbort && prevAbort.abort();
            return controller;
        });

        postFetch(remouteUrl, {signal: controller.signal}, (data) => setPostsList(data));
    };  //  getPostslist

    const handleChange = (event, setForm) => {
        setForm({[event.currentTarget.name]: event.currentTarget.value});
    };  //  handleChange

    const handleChangeNewPost = (event) => {
        handleChange(event, setFormNewPost);
    };  //  handleChangeNewPost
    
    const handleChangeEditPost = (event) => {
        handleChange(event, setFormEditPost);
    };  //  handleChangeEditPost

    const postingNewPost = () => {
        if (!(formNewPost?.content?.length > 0) ) return;
        const options = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json;charset=utf-8',
          },
          body: JSON.stringify({
            id: 0,
            content: formNewPost.content,
          }),
        };

        postFetch(remouteUrl, options, () => {
            setFormNewPost({content: ''});
            getPostslist();
        });
    };  //  postingNewPost

    const postingEditPost = (id) => {
        if (!(formEditPost?.content?.length > 0)) return;
        const options = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json;charset=utf-8',
          },
          body: JSON.stringify({
            id: id,
            content: formEditPost.content,
          }),
        };

        postFetch(remouteUrl, options, () => {
            setFormEditPost({content: ''});
            getPostslist();
        });
    };  //  postingEditPost

    const deletingPost = (id) => {
        if (!(id > 0)) return;
        const options = {
            method: 'DELETE',
          };

        postFetch(`${remouteUrl}/${id}`, options, null, null, getPostslist);
    };  //  deletingPost

    useEffect( getPostslist, [remouteUrl, setPostsList]); //  useEffect
    
    const newPostProps = {
        form: formNewPost,
        setForm: setFormNewPost,
        onChange: handleChangeNewPost,
        publicPost: postingNewPost,
    };
    
    const editPostProps = {
        form: formEditPost,
        setForm: setFormEditPost,
        onChange: handleChangeEditPost,
        publicPost: postingEditPost,
        deletePost: deletingPost,
    }

    return (
        <Router>
            <Routes>
                <Route path='/' exact element={<Posts postsList={postsList}/>}/>
                <Route path='/posts/new' exact element={<NewPost   {...newPostProps}/>}/>
                <Route path='/posts/:postId' element={<Post {...editPostProps}/>}/>
                <Route path='*' element={<Page404/>}/>
            </Routes>
        {isLoading && <Modal><Loader/></Modal>}
        {isError && <Modal><ShowError text={isError.message}/></Modal>}
        </Router>
    )
}

Crud.propTypes = {
    props: PropTypes.any,
}

export default Crud
