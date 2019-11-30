import React from 'react'
import { connect } from 'react-redux';

import {
    mapDispatchToProps,
    mapStateToProps
} from '../store';

const Comments = props => {
    const comments = props.post.comments;

    const [author, setAuthor] = React.useState('');
    const [comment, setComment] = React.useState('');
    
    const submitComment = e => {
        e.preventDefault();
        if(!author || !comment) return alert("Error! Author or comment text isn't entered");
        props.addComment(author, comment, props.id);
        setAuthor('');
        setComment('');
    };

    return (
        <div className="comments">
            {comments && comments.map((comment, index) => {
                return(
                    <div className="comment" key={comment.text + index}>
                        <p>
                            <strong>{comment.author}</strong>
                            {comment.text}
                            <button className="remove-comment" onClick={() => props.removeComment(comment.id)}>x</button>    
                        </p>    
                    </div>
                )
            })}

            <form className="comment-form" onSubmit={e => submitComment(e)}>
                <input type="text" name="author" value={author} placeholder="author" onChange={e => setAuthor(e.target.value)} />
                <input type="text" name="comment" value={comment} placeholder="comment" onChange={e => setComment(e.target.value)} />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Comments);