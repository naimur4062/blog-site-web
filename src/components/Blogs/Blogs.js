import React from 'react';
import Blog from './Blog';

const Blogs = () => {
    const blogs = [
        {
            id: 1,
            name: 'Some JavaScript Methods',
            description: 'In this article we are going to know about a small portion of JavaScript which is known as JavaScript methods.',
            img: 'https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/131162894/original/c852434d3176ad971f025e8b6176980ee9c37107/play-with-javascript-make-fun.jpg',
            link: 'https://naimur4062.medium.com/some-javascript-methods-f49a9cb510f3',
        },
        {
            id: 2,
            name: '10 Fundamentals of React',
            description: 'Hello, everyone. Today, in this article, I am going to discuss a little bit about react fundamental topics.',
            img: 'https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/131162894/original/c852434d3176ad971f025e8b6176980ee9c37107/play-with-javascript-make-fun.jpg',
            link: 'https://naimur4062.medium.com/10-fundamentals-of-react-453e353fe22f',
        },
        {
            id: 3,
            name: 'Some JavaScript Topics.',
            description: 'There are some basic JavaScript topics which you should learn. These are also important for interview questions',
            img: 'https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/131162894/original/c852434d3176ad971f025e8b6176980ee9c37107/play-with-javascript-make-fun.jpg',
            link: 'https://naimur4062.medium.com/some-random-topics-for-javascript-interview-question-f401165ebef6',
        }

    ]
    return (
        <div>
            <div>
                <div className="container">
                    <h1 style={{ color: 'grey' }} className="text-center py-5">Our Blogs</h1>
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