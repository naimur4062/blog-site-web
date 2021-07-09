import React, { useContext } from 'react';
import { AdminContext, UserContext } from '../../../App';

const Reply = ({ replyDetails, handleReplyDelete }) => {
    const { replierName, replierEmail, replierPhoto, reply, date, _id } = replyDetails;
    const [isAdmin, setIsAdmin] = useContext(AdminContext);
    const [user, setUser] = useContext(UserContext);
    const currentUser = user.email;

    return (
        <div>
            {/* <p>all custom css are applying in showingComment.css file</p> */}
            <div className="reply-showing d-flex ml-3 mt-3">
                <img src={replierPhoto} alt="" />
                <div className="reply-details">
                    <p><span className="name">{replierName}</span> <br /> {reply}</p>
                </div>
            </div>
            <div className="d-flex reply-function">
                <p>{new Date(date).toLocaleString().split(',')[0]}</p>
                {
                    isAdmin === true || currentUser === replierEmail ?
                        <p onClick={() => handleReplyDelete(_id)} className="delete">Delete</p> : null
                }
            </div>
        </div>
    );
};

export default Reply;