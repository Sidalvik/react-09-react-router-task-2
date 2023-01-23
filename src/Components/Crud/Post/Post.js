import React, { useState, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import PostsContext from '../../../contexts/PostsContext';
import EditPost from './EditPost/EditPost';
import ViewPost from './ViewPost/ViewPost';
import Page404 from '../Page404/Page404';

function Post(props) {
    const {setForm} = props;
    const [editable, setEditable] = useState(false);
    const {postsState} = useContext(PostsContext);
    const {postId} = useParams();

    const checkIdReg = /^\d{1,255}$/i;
    const thisPost = checkIdReg.test(postId) ? postsState.postsList.find((item)=> +item?.id === +postId) : null;
    
    const newProps = {
      ...props,
      post: thisPost,
      editPost: () => setEditable(true),
      viewPost: () => setEditable(false),
    };

    useEffect(() => {
      setForm({...thisPost});
    },[thisPost, setForm, postsState]);

    if (!thisPost) {
      return <Page404/>
    } 

  return (
    <>
        {!editable && <ViewPost {...newProps} />}
        {editable && <EditPost {...newProps} />}
    </>
  )
}

Post.propTypes = {
  setForm: PropTypes.func.isRequired,
  onChange: PropTypes.func,
  publicPost: PropTypes.func,
  deletePost: PropTypes.func,
}

export default Post
