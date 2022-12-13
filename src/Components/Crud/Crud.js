import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Posts from './Posts/Posts';
import Post from './Post/Post';
import NewPost from './NewPost/NewPost';
import useJsonFetch from '../../hooks/useJsonFetch';
import UrlsContext from '../../contexts/UrlsContext';
import Modal from '../Modal/Modal';
import Loader from '../Modal/Loader/Loader';
import ShowError from '../Modal/ShowError/ShowError';


function Crud(props) {
    const {urls} = useContext(UrlsContext);
    const [postsList, error, loading] = useJsonFetch(urls.remouteUrl);

    return (
        <Router>
            {loading && <Modal><Loader/></Modal>}
            {error && <Modal><ShowError text={error.message}/></Modal>}
            <Routes>
                <Route path='/' exact element={<Posts postsList={postsList}/>}/>
                <Route path='/posts/new' exact element={<NewPost/>}/>
                <Route path='/posts/:id' exact element={<Post/>}/>
            </Routes>
        </Router>
    )
}

Crud.propTypes = {
    props: PropTypes.any,
}

export default Crud
