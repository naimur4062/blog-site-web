import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import deleteImg from '../../../images/delete.png';
import './DeleteBlogs.css';

const DeleteBlogs = () => {
    const [blogsArray, setBlogsArray] = useState([]);
    const pathname = window.location.pathname;
    const currentPath = pathname.replace(/\/delete%20/g, "");
    const blogTopic = currentPath.replace(/\%20/g, " ");
    const [dependency, setDependency] = useState(null);
    const blogs = blogsArray.filter((blog) => { return blog.topic === blogTopic }).reverse();
    // comments
    const [commentsArray, setCommentsArray] = useState([]);
    const comments = commentsArray.filter((comments) => { return comments.blogId === blogs[0]?._id });

    useEffect(() => {
        fetch('http://localhost:5000/comments')
            .then(res => res.json())
            .then(data => setCommentsArray(data))
    }, []);

    useEffect(() => {
        fetch('http://localhost:5000/blogs')
            .then(res => res.json())
            .then(data => setBlogsArray(data))
    }, [dependency]);

    const deleteBlog = (id) => {
        fetch(`http://localhost:5000/delete/${id}`, {
            method: 'DELETE'
        })
            .then(res => {
                if (res) {
                    setDependency(id);
                    // delete post & comment
                    fetch(`http://localhost:5000/deletePostComment/${id}`, {
                        method: 'DELETE'
                    })
                        .then(res => {
                            if (res) {
                                // delete post, comment & reply
                                for (let i = 0; i < comments.length; i++) {
                                    const comment = comments[i];
                                    fetch(`http://localhost:5000/deletePostCommentReply/${comment._id}`, {
                                        method: 'DELETE'
                                    })
                                        .then(res => {
                                            if (res) {
                                                console.log('blog comment reply delete success')
                                            }
                                        })
                                };
                            };
                        });
                };
            });
    };


    return (
        <>
            {
                blogsArray.length ?
                    <div style={{ height: '100vh' }} className="container-fluid" >
                        <h1 className="text-center mt-5">Delete {blogTopic} Blogs</h1>
                        <div className="d-flex justify-content-center align-items-center mt-5">
                            <div className="container blog mb-3 p-4" style={{ background: 'lightblue', borderRadius: '8px' }}>
                                <div className="row pt-3 ps-3 d-flex justify-content-between blog-heading text-center">
                                    <p className="col-md-6">Blog Title</p>
                                    <p className="col-md-4">Delete This</p>
                                </div>
                                {
                                    blogs.length ?
                                        <div className="row text-center d-flex justify-content-between">
                                            <div className="col-md-6 mt-4 title">
                                                {
                                                    blogs.map(blog => <p>{blog.title}</p>)
                                                }
                                            </div>
                                            <div className="col-md-4 mt-2 delete-button d-flex justify-content-center align-items-center">
                                                {
                                                    blogs.map(blog => <img src={deleteImg} alt="..." onClick={() => deleteBlog(blog._id)} />)
                                                }
                                            </div>
                                        </div>
                                        :
                                        <h1 className="text-center mt-5 text-white">Nothing to Delete</h1>
                                }
                            </div>
                        </div>
                    </div>
                    :
                    <div className="d-flex justify-content-center align-items-center mt-5 pt-5">
                        <Spinner animation="grow" variant="primary" />
                        <Spinner animation="grow" variant="secondary" />
                        <Spinner animation="grow" variant="success" />
                        <Spinner animation="grow" variant="danger" />
                        <Spinner animation="grow" variant="warning" />
                        <Spinner animation="grow" variant="info" />
                        <Spinner animation="grow" variant="dark" />
                    </div>
            }
        </>
    );
};

export default DeleteBlogs;