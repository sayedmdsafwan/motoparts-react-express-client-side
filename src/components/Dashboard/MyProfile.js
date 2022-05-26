import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const MyProfile = () => {
    const [user] = useAuthState(auth);
    return (
        <div>
            <div className="card max-w-sm bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">Name: {user.displayName}</h2>
                    <p>Email: {user.email}</p>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;
