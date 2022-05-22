import React from "react";
import reactImage from "../../images/react-image.jpg";
import reactRouterImage from "../../images/react-router-image.jpg";
import reactUnitTest from "../../images/react-unit-test.jpg";
import inheritancePro from "../../images/Prototypal-Inheritance.jpg";
import setStateReact from "../../images/react-setState.jpeg";

const Blogs = () => {
    const blogsContent = [
        {
            id: 1,
            title: "How will you improve the performance of a React Application?",
            description:
                "To improve performance we should always use build file. Also we can reduce media(image/video) size from tinyjpg or something like that. Code repeation must be avoided.",
            img: reactImage,
        },
        {
            id: 2,
            title: "What are the different ways to manage a state in a React application?",
            description:
                "There are tons of ways to manage states in a react application. The most popular solution is react router. Also we can manage our state by context api. There is a redux framework which can help a lot",
            img: reactRouterImage,
        },
        {
            id: 3,
            title: "What is a unit test? Why should write unit tests?",
            description:
                "The unit test is a way to test a unit, the smallest code in a system that can logically tested. This can be a function, a subroutine, a procedure, or a property. Unit test gives us very good result in the production.",
            img: reactUnitTest,
        },
        {
            id: 4,
            title: "How does prototypical inheritance work?",
            description:
                "The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object.",
            img: inheritancePro,
        },
        {
            id: 5,
            title: "Why you do not set the state directly in React ?",
            description:
                "If you  update the state directly, this.state will not change  immediately. Instead,  a pending state transition is created, and when accessed after calling this method, only  the current value is returned.",
            img: setStateReact,
        },
    ];

    return (
        <div className="max-w-7xl mx-auto py-24 px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                {blogsContent.map((blog) => (
                    <div className="card card-compact bg-base-100 shadow-xl">
                        <figure>
                            <img src={blog.img} alt="" />
                        </figure>
                        <div className="p-10">
                            <h2 className="text-3xl mb-4">{blog.title}</h2>
                            <p className="text-lg">{blog.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Blogs;
