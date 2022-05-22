import React from "react";

const Blog = ({ blog }) => {
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <figure>
                <img src={blog.img} alt="" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{blog.title}</h2>
                <p>{blog.description}</p>
            </div>
        </div>
    );
};

export default Blog;
