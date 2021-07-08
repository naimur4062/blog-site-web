import React, { useEffect, useState } from 'react';
import HomeCard from './HomeCard';
import './Home.css';

const Home = () => {
    const [allBlogs, setAllBlogs] = useState([]);
    const politicsBlogs = allBlogs.filter((blog) => { return blog.topic === "politics" }).reverse()[0];
    const societyBlogs = allBlogs.filter((blog) => { return blog.topic === "society" }).reverse()[0];
    const policyIssueBlogs = allBlogs.filter((blog) => { return blog.topic === "policy issue" }).reverse()[0];
    const governanceBlogs = allBlogs.filter((blog) => { return blog.topic === "governance" }).reverse()[0];
    const globalGovernanceBlogs = allBlogs.filter((blog) => { return blog.topic === "global governance" }).reverse()[0];
    const europeBlogs = allBlogs.filter((blog) => { return blog.topic === "europe" }).reverse()[0];
    const northAmericaBlogs = allBlogs.filter((blog) => { return blog.topic === "north america" }).reverse()[0];
    const asiaBlogs = allBlogs.filter((blog) => { return blog.topic === "asia" }).reverse()[0];
    const managementBlogs = allBlogs.filter((blog) => { return blog.topic === "management" }).reverse()[0];
    const publicPolicyBlogs = allBlogs.filter((blog) => { return blog.topic === "public policy" }).reverse()[0];
    const contemporaryGovernanceBlogs = allBlogs.filter((blog) => { return blog.topic === "contemporary governance" }).reverse()[0];
    const knowledgeSharingBlogs = allBlogs.filter((blog) => { return blog.topic === "knowledge sharing" }).reverse()[0];
    const ideaBlogs = allBlogs.filter((blog) => { return blog.topic === "idea" }).reverse()[0];
    const problemSolutionBlogs = allBlogs.filter((blog) => { return blog.topic === "problem solution" }).reverse()[0];

    const blogs = [
        { ...politicsBlogs, link: '/politics' },
        { ...societyBlogs, link: '/society' },
        { ...policyIssueBlogs, link: '/policy issue' },
        { ...governanceBlogs, link: '/governance' },
        { ...globalGovernanceBlogs, link: '/global governance' },
        { ...europeBlogs, link: '/europe' },
        { ...northAmericaBlogs, link: '/north america' },
        { ...asiaBlogs, link: '/asia' },
        { ...managementBlogs, link: '/management' },
        { ...publicPolicyBlogs, link: '/public policy' },
        { ...contemporaryGovernanceBlogs, link: '/contemporary governance' },
        { ...knowledgeSharingBlogs, link: '/knowledge sharing' },
        { ...ideaBlogs, link: '/idea' },
        { ...problemSolutionBlogs, link: '/problem solution' }
    ];

    console.log({ ...politicsBlogs, link: '/home' })

    useEffect(() => {
        fetch('http://localhost:5000/allBlogs')
            .then(res => res.json())
            .then(data => setAllBlogs(data))
    }, [])

    return (
        // without footer the css are applied from blog.css file
        <div>
            <div className="container">
                <h1 style={{ color: 'grey' }} className="text-center py-5">My Blogs</h1>
                <div className="row">
                    {
                        blogs.map(blog => <HomeCard key={blog?._id} blog={blog} />)
                    }
                </div>
            </div>
            <footer className="footer text-center">
                <p>Copyright &copy; <em id="date"></em> {new Date().getUTCFullYear()} By Md Harunur Rashid <br /> Developed By <a href="https://www.facebook.com/naimurrahman.abeer" target="_blank">Naimur Rahman</a></p>
            </footer>
        </div>
    );
};

export default Home;