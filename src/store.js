import { createStore, bindActionCreators } from 'redux';

import * as actions from './actions';
import mainReducer from './reducers';

export default createStore(mainReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export const mapStateToProps = (state, ownProps) => {
    if (!ownProps.id) return state;

    const comments = state.comments.filter(comment => comment.postId === parseInt(ownProps.id));
    return {
        post: {
            ...state.posts.find(post => post.id === parseInt(ownProps.id)),
            comments
        }
    }
};

export const mapDispatchToProps = dispatch => {
    return {
        ...bindActionCreators({ ...actions }, dispatch) 
    }
};