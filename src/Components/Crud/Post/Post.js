import React, { useState } from 'react';
import PropTypes from 'prop-types';
import EditPost from './EditPost/EditPost';
import ViewPost from './ViewPost/ViewPost';

function Post(props) {
    const [editable, setEditable] =useState(false);

  return (
    <>
        {editable ? <EditPost/> : <ViewPost onClick={() => setEditable(true)}/>}
    </>
  )
}

Post.propTypes = {
    props: PropTypes.any,
}

export default Post
