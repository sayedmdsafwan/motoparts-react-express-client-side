import React from "react";
import { toast } from "react-toastify";

const DeleteConfirmModal = ({
    setDeletingProduct,
    deletingProduct,
    refetch,
}) => {
    const { _id, name } = deletingProduct;

    const handleDelete = (id) => {
        fetch(`https://thawing-stream-62063.herokuapp.com/tool/${id}`, {
            method: "DELETE",
            headers: {
                authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.deletedCount) {
                    toast.success(`The ${name} is deleted`);
                    setDeletingProduct(null);
                    refetch();
                }
            });
    };

    return (
        <div>
            <input
                type="checkbox"
                id="booking-confirm"
                className="modal-toggle"
            />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">
                        Are you sure you want to delete{" "}
                        <span className="text-error">{name}</span>
                    </h3>
                    <p className="py-4">
                        After clicking delete button, {name} will permanently
                        delete from the database.
                    </p>
                    <div className="modal-action">
                        <label
                            onClick={() => handleDelete(_id)}
                            className="btn btn-xs btn-error text-white"
                        >
                            Delete
                        </label>
                        <label htmlFor="booking-confirm" className="btn btn-xs">
                            Cancel
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteConfirmModal;
