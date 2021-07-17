import React, { useContext, useState, useEffect } from 'react';
import { useForm } from "react-hook-form";
import { UserContext } from '../../../App';
import Login from '../Login/Login';
import { useParams } from 'react-router-dom';
import ShowingComments from '../ShowingComments/ShowingComments';
import { Button } from 'react-bootstrap';
import './Comments.css';

const Comments = () => {
    const date = new Date();
    const { id } = useParams();
    const { register, handleSubmit } = useForm();
    const [user, setUser] = useContext(UserContext);
    const [commentsArray, setCommentsArray] = useState([]);
    const beforeReverse = commentsArray.filter((comments) => { return comments.blogId === id });
    const fullComments = beforeReverse.reverse();
    const cutComments = fullComments.slice(0, 5);
    const [dependency, setDependency] = useState(null);
    const [view, setView] = useState(false);

    const handleView = () => {
        setView(true);
    };

    const onSubmit = data => {
        const commentData = {
            name: user.name,
            email: user.email,
            photo: user.photo,
            comment: data.comment,
            blogId: id,
            date: date
        };
        console.log('commentData', commentData)
        const url = `https://evening-plains-64607.herokuapp.com/postComment`;
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(commentData)
        })
            .then(res => {
                if (res) {
                    setDependency(true);
                    setDependency(false);
                    document.getElementById('commentInput').value = '';
                };
            });
    };

    const deleteComment = (id) => {
        fetch(`https://evening-plains-64607.herokuapp.com/deleteComment/${id}`, {
            method: 'DELETE'
        })
            .then(res => {
                if (res) {
                    setDependency(id);
                    fetch(`https://evening-plains-64607.herokuapp.com/deleteCommentWithReplies/${id}`, {
                        method: 'DELETE'
                    });
                };
            });
    };

    useEffect(() => {
        fetch('https://evening-plains-64607.herokuapp.com/comments')
            .then(res => res.json())
            .then(data => setCommentsArray(data))
    }, [dependency]);

    return (
        <div style={{ overflowX: 'hidden' }}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row d-flex justify-content-center align-items-center">
                    <div className="col-md-8 form-group">
                        <textarea id="commentInput" name="comment" placeholder="Write Your Comment" type="form-control" required ref={register} className="form-control" />
                    </div>
                    <div className="col-md-2 form-group">
                        {
                            user.name ? <input type="submit" className="btn btn-primary" value="COMMENT" required /> : <Login />
                        }
                    </div>
                </div>
            </form>
            <div className="mt-5 mb-5">
                <div className="heading">
                    <h1 className="mx-5 mb-5 text-center">Total Comments are: {fullComments.length}</h1>
                </div>
                {
                    view === true ?
                        <div>
                            {
                                fullComments.map(showingComment => <ShowingComments deleteComment={deleteComment} key={showingComment._id} showingComment={showingComment} />)
                            }
                        </div>
                        :
                        <div>
                            {
                                cutComments.map(showingComment => <ShowingComments deleteComment={deleteComment} key={showingComment._id} showingComment={showingComment} />)
                            }
                        </div>
                }
                <div className="text-center">
                    {
                        view === false && fullComments.length > 5 && <Button onClick={() => handleView()}>Click to view {fullComments.length - 5} more comments</Button>
                    }
                </div>
            </div>
        </div >
    );
};

export default Comments;