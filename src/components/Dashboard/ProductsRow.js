import React from "react";

const ProductsRow = ({ index, tool, setDeletingProduct }) => {
    const { img, name, price } = tool;

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
                    onClick={() => setDeletingProduct(tool)}
                    htmlFor="booking-confirm"
                    className="btn btn-xs btn-error text-white"
                >
                    Delete
                </label>
            </td>
        </tr>
    );
};

export default ProductsRow;
