import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import auth from "../../firebase.init";
import useToolDetails from "../../Hooks/useToolDetails";

const Purchase = () => {
    const { toolId } = useParams();
    const [toolDetails] = useToolDetails(toolId);
    const [user] = useAuthState(auth);
    const { /* _id, */ name, price, min, description, img, quantity } =
        toolDetails;

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        reset();
    };

    return (
        <div className="max-w-6xl mx-auto min-h-screen">
            <div className="grid lg:grid-cols-9 grid-cols-1 justify-items-center py-24">
                <div className="card max-w-sm bg-base-100 shadow-xl col-span-4">
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
                    </div>
                </div>
                <div class="divider divider-horizontal">OR</div>
                <div className="col-span-4">
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <h2 className="text-2xl text-center font-light mt-6">
                            Purchase Now
                        </h2>
                        <div className="card-body">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="form-control mb-4 w-80">
                                    <input
                                        readOnly
                                        className="input input-bordered w-80"
                                        value={user.displayName}
                                        {...register("name")}
                                    />
                                </div>
                                <div className="form-control my-4 w-80">
                                    <input
                                        readOnly
                                        className="input input-bordered w-80"
                                        value={user.email}
                                        {...register("email")}
                                    />
                                </div>
                                <div className="form-control my-4 w-80">
                                    <input
                                        className="input input-bordered w-80"
                                        placeholder="Address"
                                        {...register("address", {
                                            required: true,
                                        })}
                                    />
                                </div>
                                <div className="form-control my-4 w-80">
                                    <input
                                        type="text"
                                        placeholder="Phone"
                                        className="input input-bordered w-80"
                                        {...register("phone", {
                                            required: true,
                                        })}
                                    />
                                </div>
                                <div className="form-control my-4 w-80">
                                    <input
                                        type="number"
                                        placeholder="quantity"
                                        className="input input-bordered w-80"
                                        {...register("quantity", {
                                            required: true,
                                            min: min,
                                            max: quantity,
                                        })}
                                    />
                                    <label className="label">
                                        {errors.quantity?.type === "min" && (
                                            <span className="label-text-alt text-red-500">
                                                Minimum Order {min}
                                            </span>
                                        )}
                                        {errors.quantity?.type === "max" && (
                                            <span className="label-text-alt text-red-500">
                                                Maximum Order {quantity}
                                            </span>
                                        )}
                                    </label>
                                </div>
                                <input
                                    className="btn btn-primary btn-outline w-full max-w-xs text-white"
                                    type="submit"
                                    value="Buy Now"
                                />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Purchase;
