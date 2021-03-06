import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import auth from "../../firebase.init";
import useAdmin from "../../Hooks/useAdmin";

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);

    return (
        <div>
            <div className="drawer drawer-mobile">
                <input
                    id="dashboard-drawer"
                    type="checkbox"
                    className="drawer-toggle"
                />
                <div className="drawer-content p-6">
                    {/* <!-- Page content here --> */}
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-2xl lg:text-4xl text-secondary capitalize">
                            Welcome to your dashboard
                        </h2>
                        <label
                            htmlFor="dashboard-drawer"
                            className="btn btn-primary btn-outline drawer-button lg:hidden"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M4 6h16M4 12h16m-7 6h7"
                                />
                            </svg>
                        </label>
                    </div>
                    <Outlet />
                </div>
                <div className="drawer-side">
                    <label
                        htmlFor="dashboard-drawer"
                        className="drawer-overlay"
                    ></label>
                    <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                        {/* <!-- Sidebar content here --> */}
                        <li>
                            <Link to="/dashboard/">My Profile</Link>
                        </li>
                        {!admin && (
                            <>
                                <li>
                                    <Link to="/dashboard/myorders">
                                        My Orders
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/dashboard/addreview">
                                        My Review
                                    </Link>
                                </li>
                            </>
                        )}
                        {admin && (
                            <>
                                <li>
                                    <Link to="/dashboard/users">All Users</Link>
                                </li>
                                <li>
                                    <Link to="/dashboard/addproduct">
                                        Add New Product
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/dashboard/manageproducts">
                                        Manage Product
                                    </Link>
                                </li>
                            </>
                        )}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
