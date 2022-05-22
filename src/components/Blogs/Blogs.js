import React from "react";
import reactImage from "../../images/react-image.jpg";
import reactRouterImage from "../../images/react-router-image.jpg";
import reactUnitTest from "../../images/react-unit-test.jpg";
import inheritancePro from "../../images/Prototypal-Inheritance.jpg";
import Blog from "./Blog";

const Blogs = () => {
    const blogsContent = [
        {
            id: 1,
            title: "How will you improve the performance of a React Application?",
            description: "How does prototypical inheritance work?",
            img: reactImage,
        },
        {
            id: 2,
            title: "What are the different ways to manage a state in a React application?",
            description: "How does prototypical inheritance work?",
            img: reactRouterImage,
        },
        {
            id: 3,
            title: "What is a unit test? Why should write unit tests?",
            description: "What is a unit test? Why should write unit tests?",
            img: reactUnitTest,
        },
        {
            id: 4,
            title: "How does prototypical inheritance work?",
            description: "How does prototypical inheritance work?",
            img: inheritancePro,
        },
    ];

    return (
        <div className="max-w-7xl mx-auto py-24 px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                {blogsContent.map((blog) => (
                    <Blog key={blog.id} blog={blog} />
                ))}
            </div>
        </div>
    );
};

export default Blogs;
