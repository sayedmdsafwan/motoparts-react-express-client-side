import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";

const MyOrders = () => {
    const [orders, setOrders] = useState([]);
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (user) {
            fetch(
                `https://thawing-stream-62063.herokuapp.com/booking?buyer=${user.email}`,
                {
                    method: "GET",
                    headers: {
                        authorization: `Bearer ${localStorage.getItem(
                            "accessToken"
                        )}`,
                    },
                }
            )
                .then((res) => {
                    console.log("res", res);
                    if (res.status === 401 || res.status === 403) {
                        signOut(auth);
                        localStorage.removeItem("accessToken");
                        navigate("/");
                    }
                    return res.json();
                })
                .then((data) => {
                    setOrders(data);
                    setLoading(false);
                });
        }
    }, [user, navigate]);

    if (loading) {
        return <Loading />;
    }

    return (
        <div>
            <h2 className="capitalize text-2xl mb-6">
                my orders {orders.length}
            </h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Tool</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Pay</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((order, index) => (
                            <tr key={index}>
                                <th>{index + 1}</th>
                                <td>{order.toolName}</td>
                                <td>{order.quantity}</td>
                                <td>${order.price}</td>
                                <td>
                                    {!order.paid && (
                                        <Link
                                            to={`/dashboard/payment/${order._id}`}
                                        >
                                            <button className="btn btn-xs btn-secondary text-white">
                                                Pay
                                            </button>
                                        </Link>
                                    )}
                                    {order.paid && (
                                        <button className="btn btn-xs btn-primary text-white">
                                            Paid
                                        </button>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;
