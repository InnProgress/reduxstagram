import React from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router';

import PostFigure from './PostFigure';
import Comments from './Comments';

const SinglePost = () => {
    const id = useParams().id;

    return (
        <div className="single-photo">
            <PostFigure id={id} />
            <Comments id={id} />
        </div>
    );
};

export default connect()(SinglePost);