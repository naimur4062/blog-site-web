import React, { useState, useEffect } from 'react';
import { Spinner } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import Blog from './Blog';

const Blogs = () => {
    const { register, handleSubmit } = useForm();
    const [loading, setLoading] = useState([]);
    const [blogsArray, setBlogsArray] = useState([]);
    const currentPath = window.location.pathname.replace(/\//g, "");
    const blogTopic = currentPath.replace(/\%20/g, " ");
    let blogs = blogsArray.filter((blog) => { return blog.topic === blogTopic }).reverse();
    const [search, setSearch] = useState('');

    useEffect(() => {
        fetch('https://evening-plains-64607.herokuapp.com/blogs')
            .then(res => res.json())
            .then(data => {
                setLoading(data);
                setBlogsArray(data);
            })
    }, [window.location.pathname]);

    useEffect(() => {
        fetch(`https://evening-plains-64607.herokuapp.com/searchBlogs?search=${search}`)
            .then(res => res.json())
            .then(data => setBlogsArray(data))
    }, [search]);

    const onSubmit = data => {
        setSearch(data.search);
        document.getElementById('searchInput').value = '';
    };

    return (
        <>
            {
                loading.length ?
                    <div className="container">
                        <h1 style={{ color: 'grey' }} className="text-center py-5">Blogs about {blogTopic.toUpperCase()}</h1>
                        <form onSubmit={handleSubmit(onSubmit)} className="form-inline d-flex justify-content-center">
                            <div className="input-group col-md-6 mb-2">
                                <input id="searchInput" name="search" type="text" className="form-control" placeholder="Search by Title" required ref={register} />
                            </div>
                            <input type="submit" className="btn btn-primary mb-2" value="SEARCH" required />
                        </form>
                        {
                            blogs.length ?
                                <div className="row mt-5">
                                    {
                                        blogs.map(blog => <Blog key={blog?._id} blog={blog} />)
                                    }
                                </div>
                                :
                                <h1 style={{ color: 'red' }} className="text-center mt-5">Please wait <br></br> or <br></br> Blogs may be not available</h1>
                        }
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

export default Blogs;