import React, { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from 'react-router-dom';

const HomeCard = ({ blog }) => {
    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);
    const splitContent = blog?.content?.split(" ");
    const cutContent = splitContent?.slice(0, 15).toString();

    return (
        <div className="col-md-4 text-center d-flex justify-content-center align-items-center mb-5 cardDiv">
            <div data-aos="flip-left" className="card" style={{ width: '18rem' }}>
                <img src={blog?.image} alt="..." />
                <div className="card-body">
                    <h5 className="card-title text-color">{blog?.title}</h5>
                    <p className="card-text text-secondary mb-4">{cutContent}.....</p>
                    <Link to={`/blog/${blog?._id}`}>Read Blog</Link>
                </div>
                <div className="mb-3">
                    <Link to={blog?.link}>Read More {blog?.topic} Blogs</Link>
                </div>
            </div>
        </div>
    );
};

export default HomeCard;