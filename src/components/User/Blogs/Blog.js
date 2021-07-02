import React, { useEffect } from 'react';
import './Blog.css';
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from 'react-router-dom';

const Blog = ({ blog }) => {
    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);
    const { title, content, image, _id } = blog;
    const splitContent = content.split(" ");
    const cutContent = splitContent.slice(0, 15).toString();

    return (
        <div className="col-md-4 text-center d-flex justify-content-center align-items-center mb-5 cardDiv">
            <div data-aos="flip-left" className="card" style={{ width: '18rem' }}>
                <img src={image} alt="..." />
                <div className="card-body">
                    <h5 className="card-title text-color">{title}</h5>
                    <p className="card-text text-secondary mb-4">{cutContent}.....</p>
                    <Link to={`/blog/${_id}`}>Read Blog</Link>
                </div>
            </div>
        </div>
    );
};

export default Blog;