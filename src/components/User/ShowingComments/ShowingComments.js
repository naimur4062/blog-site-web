import React, { useContext, useEffect, useState } from 'react';
import Reply from '../Reply/Reply';
import { useForm } from 'react-hook-form';
import './ShowingComments.css';
import { AdminContext, LoginContext, UserContext } from '../../../App';
import { Button } from 'react-bootstrap';
import Login from '../Login/Login';

const ShowingComments = ({ showingComment, deleteComment }) => {
    const replyDate = new Date();
    const { register, handleSubmit } = useForm();
    const [user, setUser] = useContext(UserContext);
    const currentUser = user.email;
    const { name, email, photo, comment, date, _id } = showingComment;
    const [reply, setReply] = useState(false);
    const [isAdmin, setIsAdmin] = useContext(AdminContext);

    // reply post function
    const onSubmit = (data) => {
        const replyData = {
            commentId: _id,
            commenter: name,
            replierName: user.name,
            replierEmail: user.email,
            replierPhoto: user.photo,
            reply: data.reply,
            date: replyDate
        };
        const url = `http://localhost:5000/postReply`;
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(replyData)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                setReply(false)
            });
    };

    const replyBoxOpen = () => {
        setReply(true);
    };

    //reply showing codes
    const [replyData, setReplyData] = useState([]);
    const replyDetails = replyData.filter((reply) => { return reply.commentId === _id });
    const num1 = replyDetails.length - 3;
    const num2 = replyDetails.length;
    const cutReplyDetails = replyDetails.slice(num1, num2);
    const [view, setView] = useState(false);

    useEffect(() => {
        fetch('http://localhost:5000/allReplies')
            .then(res => res.json())
            .then(data => setReplyData(data))
    }, [reply])

    const handleReplyDelete = (id) => {
        console.log('handleReplyDelete', id)
        fetch(`http://localhost:5000/deleteReply/${id}`, {
            method: 'DELETE'
        })
            .then(res => {
                if (res) {
                    console.log('delete successful');
                    setReply(id);
                };
            });
    };

    const handleView = () => {
        setView(true);
    };

    return (
        <div>
            {/* <p>Comment showing ui code</p> */}
            <div className="comment-showing d-flex mt-3">
                <img src={photo} alt="" />
                <div className="comment-details">
                    <p><span className="name">{name}</span> <br /> {comment}</p>
                </div>
            </div>
            <div className="d-flex comment-function">
                <p>{new Date(date).toLocaleString().split(',')[0]}</p>
                <p onClick={replyBoxOpen} className="reply">Reply</p>
                {
                    isAdmin === true || currentUser === email ?
                        <p className="delete" onClick={() => deleteComment(_id)}>Delete</p> : null
                }
            </div>
            {/* <p>Replies showing ui code</p> */}
            <div style={{ marginLeft: '100px', borderLeft: '1px solid grey' }} >
                <div className="ml-3 mb-3">
                    {
                        view === false && replyDetails.length > 3 && <Button onClick={() => handleView()}>Click to view {replyDetails.length - 3} more replies</Button>
                    }
                </div>
                <div className="show-replies mb-3">
                    {
                        view === false && replyDetails.length > 3 ? cutReplyDetails.map(reply => <Reply key={reply._id} replyDetails={reply} handleReplyDelete={handleReplyDelete} />)
                            :
                            replyDetails.map(reply => <Reply key={reply._id} replyDetails={reply} handleReplyDelete={handleReplyDelete} />)
                    }
                </div>
            </div>
            <div className="reply-box">
                {reply === true && <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="row d-flex justify-content-center align-items-center">
                        <div className="col-md-7 form-group">
                            <textarea name="reply" placeholder="Write Your Comment" type="form-control" required ref={register} className="form-control" />
                        </div>
                        <div className="col-md-2 form-group">
                            {
                                currentUser ? <input type="submit" className="btn btn-primary" value="Reply" required /> : <Login />
                            }
                        </div>
                    </div>
                </form>}
            </div>
        </div>
    );
};

export default ShowingComments;