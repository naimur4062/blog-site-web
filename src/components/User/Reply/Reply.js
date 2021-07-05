import React from 'react';

const Reply = ({ replyDetails }) => {
    const { replierName, replierPhoto, reply, date } = replyDetails;
    return (
        <div>
            {/* <p>all custom css are applying in showingComment.css file</p> */}
            <div className="reply-showing d-flex ml-3 mt-3">
                <img src={replierPhoto} alt="" />
                <div className="comment-details">
                    <p><span className="name">{replierName}</span> <br /> {reply}</p>
                </div>
            </div>
            <div className="d-flex reply-function">
                <p>{new Date(date).toLocaleString().split(',')[0]}</p>
                <p className="delete">Delete</p>
            </div>
        </div>
    );
};

export default Reply;