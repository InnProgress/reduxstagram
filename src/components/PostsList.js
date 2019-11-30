import React from 'react';
import { connect } from 'react-redux';

import { mapStateToProps } from '../store';

import PostFigure from './PostFigure';

const PostsList = store => {    
    return (
        <div className="photo-grid">
            {store.posts && store.posts.map(post => <PostFigure key={post.id} id={post.id} />)}
        </div>
    );
};

export default connect(mapStateToProps)(PostsList);