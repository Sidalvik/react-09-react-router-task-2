import {createContext} from 'react';

const UrlsContext = createContext({
    urls: {remouteUrl: process.env.REACT_APP_POSTS_URL},
});

export default UrlsContext;