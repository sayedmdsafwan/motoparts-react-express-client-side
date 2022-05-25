import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const AddProduct = () => {
    const {
        register,
        formState: { errors },
        handleSubmit,
        reset,
    } = useForm();

    const imageStorageKey = "a0699fe95d2b435d6c4f585d78daf80a";

    const onSubmit = async (data) => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append("image", image);
        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
        fetch(url, {
            method: "POST",
            body: formData,
        })
            .then((res) => res.json())
            .then((result) => {
                if (result.success) {
                    const img = result.data.url;
                    const product = {
                        name: data.name,
                        description: data.description,
                        min: data.min,
                        quantity: data.quantity,
                        price: data.price,
                        img: img,
                    };
                    // send to database
                    fetch(
                        "https://thawing-stream-62063.herokuapp.com/product",
                        {
                            method: "POST",
                            headers: {
                                "content-type": "application/json",
                                authorization: `Bearer ${localStorage.getItem(
                                    "accessToken"
                                )}`,
                            },
                            body: JSON.stringify(product),
                        }
                    )
                        .then((res) => res.json())
                        .then((inserted) => {
                            if (inserted.insertedId) {
                                toast.success("Product added successfully");
                                reset();
                            } else {
                                toast.error("Failed to add the Product");
                            }
                        });
                }
            });
    };
    return (
        <div>
            <h2 className="text-2xl mb-4">Add Product</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control w-full max-w-xs">
                    <input
                        type="text"
                        placeholder="Tool Name"
                        className="input input-bordered w-full max-w-xs"
                        {...register("name", {
                            required: {
                                value: true,
                                message: "Tool name is Required",
                            },
                        })}
                    />
                    <label className="label">
                        {errors.name?.type === "required" && (
                            <span className="label-text-alt text-red-400">
                                {errors.name.message}
                            </span>
                        )}
                    </label>
                </div>

                <div className="form-control max-w-xs">
                    <textarea
                        {...register("description", {
                            required: {
                                value: true,
                                message: "Description is Required",
                            },
                        })}
                        className="textarea textarea-bordered h-24"
                        placeholder="Tool Description"
                    ></textarea>
                    <label className="label">
                        {errors.description?.type === "required" && (
                            <span className="label-text-alt text-red-400">
                                {errors.description.message}
                            </span>
                        )}
                    </label>
                </div>

                <div className="form-control w-full max-w-xs">
                    <input
                        type="number"
                        placeholder="Minimum Order"
                        className="input input-bordered w-full max-w-xs"
                        {...register("min", {
                            required: {
                                value: true,
                                message: "Minimum value is Required",
                            },
                        })}
                    />
                    <label className="label">
                        {errors.min?.type === "required" && (
                            <span className="label-text-alt text-red-400">
                                {errors.min.message}
                            </span>
                        )}
                    </label>
                </div>

                <div className="form-control w-full max-w-xs">
                    <input
                        type="number"
                        placeholder="Total Quantity"
                        className="input input-bordered w-full max-w-xs"
                        {...register("quantity", {
                            required: {
                                value: true,
                                message: "Quantity is Required",
                            },
                        })}
                    />
                    <label className="label">
                        {errors.quantity?.type === "required" && (
                            <span className="label-text-alt text-red-400">
                                {errors.quantity.message}
                            </span>
                        )}
                    </label>
                </div>

                <div className="form-control w-full max-w-xs">
                    <input
                        type="number"
                        placeholder="Per Unit Price"
                        className="input input-bordered w-full max-w-xs"
                        {...register("price", {
                            required: {
                                value: true,
                                message: "Price is Required",
                            },
                        })}
                    />
                    <label className="label">
                        {errors.price?.type === "required" && (
                            <span className="label-text-alt text-red-400">
                                {errors.price.message}
                            </span>
                        )}
                    </label>
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Tool Image</span>
                    </label>
                    <input
                        type="file"
                        className=" w-full max-w-xs"
                        {...register("image", {
                            required: {
                                value: true,
                                message: "Image is Required",
                            },
                        })}
                    />
                    <label className="label">
                        {errors.img?.type === "required" && (
                            <span className="label-text-alt text-red-400">
                                {errors.img.message}
                            </span>
                        )}
                    </label>
                </div>

                <input
                    className="btn btn-primary w-full max-w-xs text-white"
                    type="submit"
                    value="Add"
                />
            </form>
        </div>
    );
};

export default AddProduct;
