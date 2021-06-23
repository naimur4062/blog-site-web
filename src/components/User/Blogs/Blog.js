import React, { useEffect } from 'react';
import './Blog.css';
import AOS from "aos";
import "aos/dist/aos.css";

const Blog = ({ blog }) => {
    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);
    const { name, description, img, link } = blog;
    return (
        <div className="col-md-4 text-center d-flex justify-content-center align-items-center mb-5 cardDiv">
            <div data-aos="flip-left" className="card" style={{ width: '18rem' }}>
                <img src={img} alt="..." />
                <div className="card-body">
                    <h5 className="card-title text-color">{name}</h5>
                    <p className="card-text text-secondary mb-4">{description}</p>
                    <a href={link} style={{ textDecoration: 'none' }} target="_blank" rel="noreferrer">Read Blog</a>
                </div>
            </div>
        </div>
    );
};

export default Blog;