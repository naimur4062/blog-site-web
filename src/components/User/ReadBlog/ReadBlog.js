import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Comments from '../Comments/Comments';
import './ReadBlog.css';

const ReadBlog = () => {
    const { id } = useParams();
    const [content, setContent] = useState('');

    useEffect(() => {
        fetch(`http://localhost:5000/blog/${id}`)
            .then(res => res.json())
            .then(data => {
                setContent(data[0]);
            })
    }, [id]);

    return (
        <div>
            <h1 className="text-center mt-5">{content.title}</h1>
            <div className="d-flex justify-content-center mt-5 container">
                <pre className='content-details'>{content.content}</pre>
            </div>
            <div className="container mt-5">
                <Comments />
            </div>
        </div>
    );
};

export default ReadBlog;