import {createContext} from 'react';

const PostsContext = createContext({
    urls: {remouteUrl: process.env.REACT_APP_POSTS_URL},
});

export default PostsContext;