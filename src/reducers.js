import posts from './data/posts';
import comments from './data/comments';
import { combineReducers } from 'redux';

const initialState = {
  posts,
  comments
};

let lastPostId = posts[posts.length - 1].id || 0;
let lastCommentId = comments[comments.length - 1].id || 0;

const postsReducer = (state = initialState.posts, action) => {
  switch (action.type) {
    case "ADD_POST": {
      lastPostId++;
      return [
        ...state,
        {
          id: lastPostId,
          title: action.title,
          imageUrl: action.imageUrl,
          likes: 0
        }
      ];
    }
    case "ADD_LIKE_TO_POST": {
      const mutatedArray = [...state];
      const index = mutatedArray.findIndex(obj => obj.id === action.id);
      mutatedArray[index].likes++;
      return mutatedArray;
    }
    default:
      return state;
  }
}

const commentsReducer = (state = initialState.comments, action) => {
    switch(action.type) {
        case 'ADD_COMMENT': {
          lastCommentId ++;
          return [
            ...state,
            {
              id: lastCommentId,
              postId: action.id,
              author: action.author,
              text: action.text
            }
          ];
        }
        case 'REMOVE_COMMENT': {
          const newArray = [...state];
          const index = state.findIndex(comment => comment.id === action.id);
          newArray.splice(index, 1);
          return newArray;
        }
        default:
          return state;
    }
}

export default combineReducers({ posts: postsReducer, comments: commentsReducer });