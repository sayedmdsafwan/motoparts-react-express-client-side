import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";

const AddReview = () => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    const {
        register,

        formState: { errors },
        handleSubmit,
        reset,
    } = useForm({
        defaultValues: {
            name: user?.displayName,
        },
    });

    const onSubmit = (data) => {
        const review = {
            name: data.name,
            review: data.review,
            rating: data.rating,
        };
        fetch("https://thawing-stream-62063.herokuapp.com/review", {
            method: "POST",
            headers: {
                "content-type": "application/json",
                authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(review),
        })
            .then((res) => res.json())
            .then((result) => {
                if (result.insertedId) {
                    toast.success("Successfully added your review");
                    reset();
                    navigate("/");
                }
            });
    };

    return (
        <div>
            <h2 className="text-2xl mb-4">Add Review</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control w-full max-w-xs">
                    <input
                        type="text"
                        value={user?.displayName}
                        disabled
                        className="input input-bordered w-full max-w-xs"
                        {...register("name")}
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
                        {...register("review", {
                            required: {
                                value: true,
                                message: "Review is Required",
                            },
                        })}
                        className="textarea textarea-bordered h-24"
                        placeholder="Add review"
                    ></textarea>
                    <label className="label">
                        {errors.review?.type === "required" && (
                            <span className="label-text-alt text-red-400">
                                {errors.review.message}
                            </span>
                        )}
                    </label>
                </div>

                <div className="form-control w-80">
                    <input
                        type="number"
                        placeholder="rating"
                        className="input input-bordered w-80"
                        {...register("rating", {
                            required: true,
                            min: 1,
                            max: 5,
                        })}
                    />
                    <label className="label">
                        {errors.rating?.type === "min" && (
                            <span className="label-text-alt text-red-500">
                                Minimum Rating 1
                            </span>
                        )}
                        {errors.rating?.type === "max" && (
                            <span className="label-text-alt text-red-500">
                                Maximum Rating 5
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

export default AddReview;
