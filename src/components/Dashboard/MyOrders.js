import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const MyOrders = () => {
    const [orders, setOrders] = useState([]);
    const [user] = useAuthState(auth);

    useEffect(() => {
        if (user) {
            fetch(`http://localhost:4000/bookings?buyer=${user.email}`)
                .then((res) => res.json())
                .then((data) => {
                    setOrders(data);
                    console.log(data);
                });
        }
    }, [user]);

    return (
        <div>
            <h2 className="capitalize text-2xl mb-6">
                my orders {orders.length}
            </h2>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Tool</th>
                            <th>Quantity</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((order, index) => (
                            <tr>
                                <th>{index + 1}</th>
                                <td>{user.displayName}</td>
                                <td>{order.toolName}</td>
                                <td>{order.quantity}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;
