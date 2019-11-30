export const addPost = (title, imageUrl) => {
    return {
        type: 'ADD_POST',
        title,
        imageUrl
    }
}

export const addLike = id => {
    return {
        type: 'ADD_LIKE_TO_POST',
        id: parseInt(id)
    }
}

export const addComment = (author, text, id) => {
    return {
        type: 'ADD_COMMENT',
        author,
        text,
        id: parseInt(id)
    }
}

export const removeComment = id => {
    return {
        type: 'REMOVE_COMMENT',
        id: parseInt(id)
    }
}