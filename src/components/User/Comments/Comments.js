import React, { useContext, useState, useEffect } from 'react';
import { useForm } from "react-hook-form";
import { CommentContext, UserContext } from '../../../App';
import Login from '../Login/Login';
import { useParams } from 'react-router-dom';
import ShowingComments from '../ShowingComments/ShowingComments';
import { Button } from 'react-bootstrap';

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

    // console.log(comments.slice(0, 5))
    // console.log('dependency', dependency)
    console.log('view', view)
    const handleView = () => {
        setView(true);
    };

    const onSubmit = data => {
        const commentData = {
            name: user.name,
            photo: user.photo,
            comment: data.comment,
            blogId: id,
            date: date
        };
        const url = `http://localhost:5000/postComment`;
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
                }
            })
    };

    const deleteComment = (id) => {
        fetch(`http://localhost:5000/deleteComment/${id}`, {
            method: 'DELETE'
        });
        setDependency(id);
    };

    useEffect(() => {
        fetch('http://localhost:5000/comments')
            .then(res => res.json())
            .then(data => setCommentsArray(data))
    }, [dependency]);

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row d-flex justify-content-center align-items-center">
                    <div className="col-md-8 form-group">
                        <textarea name="comment" placeholder="Write Your Comment" type="form-control" required ref={register} className="form-control" />
                    </div>
                    <div className="col-md-2 form-group">
                        {
                            user.name ? <input type="submit" className="btn btn-danger" value="COMMENT" required /> : <Login />
                        }
                    </div>
                </div>
            </form>
            <div className="mt-5 mb-5"><div>
                <h1 className="mx-5 text-center">Total Comments are: {fullComments.length}</h1>
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