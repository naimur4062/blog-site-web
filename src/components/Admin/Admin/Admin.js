import React, { useEffect } from 'react';
import { useForm } from "react-hook-form";
import AOS from "aos";
import "aos/dist/aos.css";

const MakeAdmin = () => {
    const { register, handleSubmit } = useForm();

    useEffect(() => {
        AOS.init({ duration: 1500 });
    }, []);

    const onSubmit = data => {
        const adminData = { email: data.email }
        const url = `http://localhost:5000/makeAdmin`;
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(adminData)
        })
            .then(res => res.json())
            .then(data => {
                console.log('admin', data)
                if (data) {
                    alert('Admin Added Successfully');
                    document.getElementById('adminInput').value = '';
                };
            })
    };
    return (
        <div data-aos="zoom-in" className="container">
            <h3 style={{ color: 'grey' }} className="my-5 text-center">Add Admin</h3>
            <div className="mb-3 p-4" style={{ background: 'lightblue', borderRadius: '8px' }}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-3">
                        <input id="adminInput" type="text" required name="email" defaultValue="" className="form-control" placeholder="Enter Email" ref={register} />
                    </div>
                    <div className="save-button text-center">
                        <input type="submit" className="btn btn-primary" value="SUBMIT" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default MakeAdmin;