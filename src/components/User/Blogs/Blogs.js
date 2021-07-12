import React, { useState, useEffect } from 'react';
import { Spinner } from 'react-bootstrap';
import Blog from './Blog';

const Blogs = () => {
    const [blogsArray, setBlogsArray] = useState([]);
    const currentPath = window.location.pathname.replace(/\//g, "");
    const blogTopic = currentPath.replace(/\%20/g, " ");
    const blogs = blogsArray.filter((blog) => { return blog.topic === blogTopic }).reverse();
    const [search, setSearch] = useState('');

    useEffect(() => {
        fetch('http://localhost:5000/searchBlogs?search=' + search)
            .then(res => res.json())
            .then(data => setBlogsArray(data))
    }, [search]);

    const handleSearch = event => {
        setSearch(event.target.value);
        event.target.value = '';
    };

    return (
        <>
            {
                blogsArray.length ?
                    <>
                        {
                            blogs.length ?
                                <div className="container">
                                    <h1 style={{ color: 'grey' }} className="text-center py-5">Blogs about {blogTopic.toUpperCase()}</h1>
                                    <div className="form-inline d-flex justify-content-center">
                                        <div className="input-group col-md-6 mb-2">
                                            <input onBlur={handleSearch} type="text" className="form-control" placeholder="Search by Title" />
                                        </div>
                                        <button type="button" className="btn btn-primary mb-2">Search</button>
                                    </div>
                                    <div className="row mt-5">
                                        {
                                            blogs.map(blog => <Blog key={blog?._id} blog={blog} />)
                                        }
                                    </div>
                                </div>
                                :
                                <h1 style={{ color: 'grey' }} className="text-center mt-5 pt-5">Sorry, Blogs are not available.</h1>
                        }
                    </>
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

export default Blogs;