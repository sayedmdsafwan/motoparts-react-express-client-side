import React from "react";

const ProductsRow = ({ index, tool, setDeletingProduct, refetch }) => {
    const { img, name, price } = tool;

    return (
        <tr>
            <th>{index + 1}</th>
            <td>
                <div class="avatar">
                    <div class="w-8 rounded">
                        <img src={img} alt={name} />
                    </div>
                </div>
            </td>
            <td>{name}</td>
            <td>Price: ${price}/unit</td>
            <td>
                <label class="btn btn-xs btn-error text-white">Delete</label>
            </td>
        </tr>
    );
};

export default ProductsRow;
