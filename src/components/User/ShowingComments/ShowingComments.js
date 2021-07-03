import React from 'react';
import './ShowingComments.css';

const ShowingComments = ({ showingComment, deleteComment }) => {
    const { name, photo, comment, date, _id } = showingComment;

    return (
        <div>
            <div className="comment-showing d-flex mt-3">
                <img src={photo} alt="" />
                <div className="comment-details">
                    <p><span className="name">{name}</span> <br /> {comment}</p>
                </div>
            </div>
            <div className="d-flex comment-function">
                <p>{new Date(date).toLocaleString().split(',')[0]}</p>
                <p>Replay</p>
                <p className="delete" onClick={() => deleteComment(_id)}>Delete</p>
            </div>
        </div>
    );
};

export default ShowingComments;