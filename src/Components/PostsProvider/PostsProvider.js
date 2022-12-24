import React, { useState } from 'react';
import PropTypes from 'prop-types';
import PostsContext from '../../contexts/PostsContext';

function PostsProvider(props) {
    const [urls, ] = useState({
        remouteUrl: process.env.REACT_APP_POSTS_URL,
    });
    const [postsList, setPostsList] = useState([]);

    const posts = {
        urls,
        postsState: {
            postsList,
            setPostsList,
        },
    }
    return (
        <PostsContext.Provider value={posts}>
            {props.children}
        </PostsContext.Provider>
    )
}

PostsProvider.propTypes = {
    props: PropTypes.any,
}

export default PostsProvider
