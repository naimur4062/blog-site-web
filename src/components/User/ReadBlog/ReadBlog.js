import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import Comments from '../Comments/Comments';
import './ReadBlog.css';

const ReadBlog = () => {
    const { id } = useParams();
    const [content, setContent] = useState('');
    console.log('content', content)

    useEffect(() => {
        fetch(`https://evening-plains-64607.herokuapp.com/blog/${id}`)
            .then(res => res.json())
            .then(data => {
                setContent(data[0]);
            })
    }, [id]);

    return (
        <>
            {
                content ?
                    <div>
                        <h1 style={{ color: 'grey' }} className="text-center mt-5">{content.title}</h1>
                        <div className="d-flex justify-content-center mt-5 container">
                            <pre className='content-details'>{content.content}</pre>
                        </div>
                        <div className="container mt-5">
                            <Comments />
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

export default ReadBlog;