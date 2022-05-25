import React from "react";
import { toast } from "react-toastify";

const ProductsRow = ({ index, tool, refetch }) => {
    const { _id, img, name, price } = tool;

    const handleDelete = (id) => {
        fetch(`http://localhost:4000/tool/${id}`, {
            method: "DELETE",
            headers: {
                authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.deletedCount) {
                    toast.success(`The ${name} is deleted`);
                    refetch();
                }
            });
    };

    return (
        <tr>
            <th>{index + 1}</th>
            <td>
                <div className="avatar">
                    <div className="w-8 rounded">
                        <img src={img} alt={name} />
                    </div>
                </div>
            </td>
            <td>{name}</td>
            <td>Price: ${price}/unit</td>
            <td>
                <label
                    onClick={() => handleDelete(_id)}
                    className="btn btn-xs btn-error text-white"
                >
                    Delete
                </label>
            </td>
        </tr>
    );
};

export default ProductsRow;
