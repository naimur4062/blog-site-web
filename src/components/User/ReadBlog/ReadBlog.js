import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ReadBlog.css';

const ReadBlog = () => {
    const { id } = useParams();
    const [content, setContent] = useState('');
    const str = content.content;
    console.log(str?.split("!"))

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
                <pre className='tab'>{content.content}</pre>
            </div>
        </div>
    );
};

export default ReadBlog;