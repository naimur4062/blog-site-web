import React, { useContext, useState, useEffect } from 'react';
import { useForm } from "react-hook-form";
import { UserContext } from '../../../App';
import Login from '../Login/Login';
import { useParams } from 'react-router-dom';
import ShowingComments from '../ShowingComments/ShowingComments';

const Comments = () => {
    const { register, handleSubmit } = useForm();
    const [user, setUser] = useContext(UserContext);
    const { id } = useParams();
    const [commentsArray, setCommentsArray] = useState([]);
    const beforeReverse = commentsArray.filter((comments) => { return comments.blogId === id });
    const comments = beforeReverse.reverse();
    const [commentSuccess, setCommentSuccess] = useState(false);
    const date = new Date();

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
                    setCommentSuccess(true)
                }
            })
    };

    useEffect(() => {
        fetch('http://localhost:5000/comments')
            .then(res => res.json())
            .then(data => setCommentsArray(data))
    }, [commentSuccess]);

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
            <div className="mt-5">
                {
                    comments.map(showingComment => <ShowingComments key={showingComment._id} showingComment={showingComment} />)
                }
            </div>
        </div >
    );
};

export default Comments;