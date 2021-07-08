import React, { useState, useEffect } from 'react';
import Blog from './Blog';

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    const reverseBlogs = blogs.filter((blog) => { return blog }).reverse();
    const currentPath = window.location.pathname.replace(/\//g, "");
    const blogTopic = currentPath.replace(/\%20/g, " ").toUpperCase();

    useEffect(() => {
        const uri = currentPath;
        fetch('http://localhost:5000/blogs?topic=' + uri)
            .then(res => res.json())
            .then(data => setBlogs(data));
    }, [currentPath]);

    console.log(reverseBlogs)

    return (
        <div>
            <div className="container">
                <h1 style={{ color: 'grey' }} className="text-center py-5">Blogs about {blogTopic}</h1>
                <div className="row">
                    {
                        reverseBlogs.map(blog => <Blog key={blog?._id} blog={blog} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default Blogs;