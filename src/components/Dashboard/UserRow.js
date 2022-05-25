import React from "react";
import { toast } from "react-toastify";

const UserRow = ({ user, refetch, index }) => {
    const { email, role } = user;

    const removeUser = (email) => {
        fetch(`https://thawing-stream-62063.herokuapp.com/user/${email}`, {
            method: "DELETE",
            headers: {
                authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.deletedCount) {
                    toast.success("User removed successfully");
                    refetch();
                }
            });
    };

    const makeAdmin = () => {
        fetch(
            `https://thawing-stream-62063.herokuapp.com/user/admin/${email}`,
            {
                method: "PUT",
                headers: {
                    authorization: `Bearer ${localStorage.getItem(
                        "accessToken"
                    )}`,
                },
            }
        )
            .then((res) => {
                if (res.status === 403) {
                    toast.error("Failed to Make an admin");
                }
                return res.json();
            })
            .then((data) => {
                if (data.modifiedCount > 0) {
                    refetch();
                    toast.success(`Successfully made an admin`);
                }
            });
    };

    return (
        <tr>
            <th>{index + 1}</th>
            <td>{email}</td>
            <td>
                {role !== "admin" && (
                    <button onClick={makeAdmin} className="btn btn-xs">
                        Make Admin
                    </button>
                )}
            </td>
            <td>
                <button
                    onClick={() => removeUser(email)}
                    className="btn btn-xs btn-error text-white"
                >
                    Remove User
                </button>
            </td>
        </tr>
    );
};

export default UserRow;
