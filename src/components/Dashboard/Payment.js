import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../Shared/Loading";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(
    "pk_test_51L18MUFNM2tGe9KIjRq1eUDrvwtfqR1kxE6au5wZy3G6Oc5YOfPvjdoiNgJTLJKkYXaHQlQURnKhyziXwyHO27VF00f7QwLnAM"
);

const Payment = () => {
    const { id } = useParams();
    const url = `http://localhost:4000/booking/${id}`;

    const { data: order, isLoading } = useQuery(["booking", id], () =>
        fetch(url, {
            method: "GET",
            headers: {
                authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
        }).then((res) => res.json())
    );

    if (isLoading) {
        return <Loading></Loading>;
    }

    return (
        <div>
            <div class="card w-50 max-w-md bg-base-100 shadow-xl my-12">
                <div class="card-body">
                    <p className="text-2xl font-light">
                        Hello,{" "}
                        <span className="text-primary">{order.buyerName}</span>
                    </p>
                    <h2 class="text-xl font-light">
                        Please Pay for {order.toolName}
                    </h2>
                    <p>
                        Your Order:{" "}
                        <span className="text-secondary">{order.toolName}</span>
                    </p>
                    <p>Please pay: ${order.price}</p>
                </div>
            </div>
            <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
                <div class="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm order={order} />
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;
