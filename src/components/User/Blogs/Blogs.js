import React, { useState, useEffect } from 'react';
import Blog from './Blog';

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    const pathname = window.location.pathname;
    const currentPath = pathname.replace(/\//g, "");
    const blogTopic = currentPath.replace(/\%20/g, " ").toUpperCase();

    useEffect(() => {
        const uri = currentPath;
        fetch('http://localhost:5000/blogs?topic=' + uri)
            .then(res => res.json())
            .then(data => setBlogs(data));
    }, [currentPath]);

    return (
        <div>
            <div>
                <div className="container">
                    <h1 style={{ color: 'grey' }} className="text-center py-5">Blogs about {blogTopic}</h1>
                    <div className="row">
                        {
                            blogs.map(blog => <Blog key={blog.id} blog={blog} />)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;