import React from "react";
import { useNavigate } from "react-router-dom";

const Tool = ({ tool }) => {
    const { _id, name, img, description, min, quantity, price } = tool;

    const navigate = useNavigate();

    const navigateToolDetail = (id) => {
        navigate(`/purchase/${id}`);
    };

    return (
        <div className="card max-w-sm bg-base-100 shadow-xl">
            <figure>
                <img src={img} alt={name} />
            </figure>
            <div className="card-body">
                <h2 className="text-2xl font-light">{name}</h2>
                <p className="text-gray-600">{description}</p>
                <div className="flex justify-between text-secondary">
                    <small>Minimum Order: {min}</small>
                    <small>Quantity: {quantity}</small>
                </div>
                <p className="text-primary">Price: ${price}</p>
                <div className="card-actions">
                    <button
                        onClick={() => navigateToolDetail(_id)}
                        className="btn w-full btn-outline btn-primary"
                    >
                        Purchase
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Tool;
