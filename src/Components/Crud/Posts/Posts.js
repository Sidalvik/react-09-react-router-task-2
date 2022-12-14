import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ItemPost from './ItemPost/ItemPost';
import Menu from './Menu/Menu';
import './Posts.css';

function Posts(props) {
  const {postsList} = props;
  const list = postsList && postsList?.map((item) => <Link to={`/posts/${item.id}`} key={item.id}><ItemPost post={item}/></Link>)?.reverse();

    return (
      <div className='posts'>
        <Menu/>
        {list}
      </div>
    )
}

Posts.propTypes = {
  postsList: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    content: PropTypes.string.isRequired,
    created: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    avatar: PropTypes.string,
    author: PropTypes.string,
  })),
}

export default Posts
