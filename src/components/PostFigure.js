import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import CSSTransitionGroup from 'react-addons-css-transition-group';

import { mapStateToProps, mapDispatchToProps } from '../store';

const PostFigure = props => {
    const post = props.post;
    
    return (
        <figure className="grid-figure">
            <div className="grid-photo-wrap">
                <Link to={"/post/" + post.id}>
                    <img className="grid-photo" src={post.picture} alt={post.title} />
                </Link>

                <CSSTransitionGroup transitionName="like" transitionEnterTimeout={500} transitionLeaveTimeout={500}>
                    <span key={post.likes} className="likes-heart">{post.likes}</span>
                </CSSTransitionGroup>

                <figcaption>
                    <p>{post.title}</p>

                    <div className="control-buttons">
                        <button onClick={() => props.addLike(post.id)} className="likes">
                            ❤ {post.likes}
                        </button>
                        <Link to={"/post/" + post.id} className="button">✎ {post.comments.length}</Link>
                    </div>
                </figcaption>
                
            </div>
        </figure>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(PostFigure);