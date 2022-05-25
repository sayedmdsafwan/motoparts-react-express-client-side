import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import useAdmin from "../../Hooks/useAdmin";
import Dashboard from "../Dashboard/Dashboard";
import Loading from "../Shared/Loading";

const Purchase = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);
    const navigate = useNavigate();
    const { toolId } = useParams();
    // const [toolDetails, setToolDetails] = useToolDetails(toolId);
    // const { name, price, min, description, img, quantity } = toolDetails;

    const {
        data: toolDetails,
        isLoading,
        refetch,
    } = useQuery(["booking", toolId], () =>
        fetch(`https://thawing-stream-62063.herokuapp.com/tool/${toolId}`).then(
            (res) => res.json()
        )
    );

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();

    const onSubmit = (data) => {
        const booking = {
            toolName: toolDetails.name,
            buyer: user.email,
            buyerName: user.displayName,
            address: data.address,
            phone: data.phone,
            price: toolDetails.price,
            quantity: data.quantity,
        };
        console.log(booking);

        fetch("https://thawing-stream-62063.herokuapp.com/booking", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(booking),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.success) {
                    toast(
                        `Order is placed. Please go to your dashboard to manage orders.`
                    );
                } else {
                    toast.error(`Already ordered this product.`);
                }
                refetch();
                reset();
            });
    };

    if (isLoading) {
        return <Loading />;
    }

    if (admin) {
        return (
            <>
                {navigate("/")}

                {toast.error("Admin can't purchase any product")}
            </>
        );
    }

    return (
        <div className="max-w-6xl mx-auto min-h-screen">
            <div className="grid lg:grid-cols-9 grid-cols-1 justify-items-center py-24">
                <div className="card max-w-sm bg-base-100 shadow-xl col-span-4">
                    <figure>
                        <img src={toolDetails.img} alt={toolDetails.name} />
                    </figure>
                    <div className="card-body">
                        <h2 className="text-2xl font-light">
                            {toolDetails.name}
                        </h2>
                        <p className="text-gray-600">
                            {toolDetails.description}
                        </p>
                        <div className="flex justify-between text-secondary">
                            <small>Minimum Order: {toolDetails.min}</small>
                            <small>Quantity: {toolDetails.quantity}</small>
                        </div>
                        <p className="text-primary">
                            Price: ${toolDetails.price}/unit
                        </p>
                    </div>
                </div>
                <div className="divider divider-horizontal">OR</div>
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
                                <div className="form-control mt-4 w-80">
                                    <input
                                        className="input input-bordered w-80"
                                        placeholder="Address"
                                        {...register("address", {
                                            required: true,
                                        })}
                                    />
                                    <label className="label">
                                        {errors.address?.type ===
                                            "required" && (
                                            <span className="label-text-alt text-red-500">
                                                Address is required.
                                            </span>
                                        )}
                                    </label>
                                </div>
                                <div className="form-control w-80">
                                    <input
                                        type="text"
                                        placeholder="Phone"
                                        className="input input-bordered w-80"
                                        {...register("phone", {
                                            required: true,
                                        })}
                                    />
                                    <label className="label">
                                        {errors.phone?.type === "required" && (
                                            <span className="label-text-alt text-red-500">
                                                Phone is required.
                                            </span>
                                        )}
                                    </label>
                                </div>
                                <div className="form-control w-80">
                                    <input
                                        type="number"
                                        placeholder="quantity"
                                        className="input input-bordered w-80"
                                        {...register("quantity", {
                                            required: true,
                                            min: toolDetails.min,
                                            max: toolDetails.quantity,
                                        })}
                                    />
                                    <label className="label">
                                        {errors.quantity?.type === "min" && (
                                            <span className="label-text-alt text-red-500">
                                                Minimum Order {toolDetails.min}
                                            </span>
                                        )}
                                        {errors.quantity?.type === "max" && (
                                            <span className="label-text-alt text-red-500">
                                                Maximum Order{" "}
                                                {toolDetails.quantity}
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
