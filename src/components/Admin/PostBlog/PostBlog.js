import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { useForm } from "react-hook-form";
import axios from 'axios';
import AOS from "aos";
import "aos/dist/aos.css";


const PostBlog = () => {
    const [imageURL, setImageURL] = useState(null);

    useEffect(() => {
        AOS.init({ duration: 1500 });
    }, []);

    const { register, handleSubmit } = useForm();
    // let history = useHistory();

    const onSubmit = data => {
        const blogData = {
            title: data.title,
            content: data.content,
            image: imageURL
        };
        const url = `http://localhost:5000/postBlog`;
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(blogData)
        })
            .then(res => {
                if (res) {
                    alert('blog saved successfully to database');
                    // history.push('/viewBlogs')
                }
            })
    }

    const handleImageUpload = (event) => {
        const imageData = new FormData();
        imageData.set('key', '3fbd18749a02465de2e5cad61c40c47a');
        imageData.append('image', event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload',
            imageData)
            .then(function (response) {
                setImageURL(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    return (
        <div>
            <div className="container applied">
                <div data-aos="zoom-in" className="admin-form mt-3">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="admin container shadow p-3 mb-3 mt-5 bg-body">
                            <h3 className="text-center text-secondary">Post Blog</h3>
                            <div className="col-md-8 form-group mx-auto">
                                <label htmlFor="form-label">Blog Title</label> <br />
                                <input name="title" placeholder="Write Blog Tile" type="form-control" required ref={register} className="form-control" />
                            </div>
                            <div className="col-md-8 pt-2 form-group mx-auto">
                                <label htmlFor="form-label">Blog Content</label> <br />
                                <textarea className="form-control" name="content" defaultValue="" placeholder="Write Blog Content" required ref={register} cols="30" rows="5" required></textarea>
                            </div>
                            <div className="col-md-8 pt-2 form-group mx-auto">
                                <label htmlFor="form-label">Upload Image</label> <br />
                                <input onChange={handleImageUpload} name="exampleRequired" type="file" required className="form-control" />
                            </div>
                            <div className="save-button col-md-8 pt-2 form-group mx-auto text-center sendMessage">
                                {
                                    imageURL ? <input type="submit" className="btn btn-danger" value="APPLY" required /> : <input type="submit" className="btn btn-primary" value="APPLY" disabled />
                                }
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default PostBlog;