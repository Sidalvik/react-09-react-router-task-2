import React, { useState } from 'react';
import PropTypes from 'prop-types';
import UrlsContext from '../../contexts/UrlsContext';

function UrlsProvider(props) {
    const [urls, setUrls] = useState({
        remouteUrl: process.env.REACT_APP_POSTS_URL,
    });

    return (
        <UrlsContext.Provider value={{urls}} setUrls={setUrls}>
            {props.children}
        </UrlsContext.Provider>
    )
}

UrlsProvider.propTypes = {
    props: PropTypes.any,
}

export default UrlsProvider
