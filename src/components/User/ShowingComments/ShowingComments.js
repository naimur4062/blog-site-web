import React from 'react';
import './ShowingComments.css';

const ShowingComments = ({ showingComment }) => {
    const { name, photo, comment, date, _id } = showingComment;
    console.log(_id)

    const deleteComment = (id) => {
        console.log(id)
        fetch(`http://localhost:5000/delete/${id}`, {
            method: 'DELETE'
        });
        alert('Delete is ongoing')
    }

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
                <button className="delete" onClick={() => deleteComment(_id)}>Delete</button>
            </div>
        </div>
    );
};

export default ShowingComments;