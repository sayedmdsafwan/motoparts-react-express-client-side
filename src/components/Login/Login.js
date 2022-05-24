import React, { useEffect } from "react";
import auth from "../../firebase.init";
import {
    useSendPasswordResetEmail,
    useSignInWithEmailAndPassword,
    useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import Loading from "../Shared/Loading";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import useToken from "../../Hooks/useToken";

const Login = () => {
    const [signInWithGoogle, gUser, gLoading, gError] =
        useSignInWithGoogle(auth);
    const [signInWithEmailAndPassword, user, loading, error] =
        useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    const [token] = useToken(user || gUser);
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    const {
        register,
        handleSubmit,
        getValues,
        formState: { errors },
        reset,
    } = useForm();

    const onSubmit = (data) => {
        signInWithEmailAndPassword(data.email, data.password);
        reset();
    };

    useEffect(() => {
        if (token) {
            navigate(from, { replace: true });
        }
    }, [token, from, navigate]);

    const resetYourPassword = async () => {
        const email = getValues("email");
        if (email) {
            await sendPasswordResetEmail(email);
            toast.success("Sent email");
        } else {
            toast.error("Please enter your email address");
        }
    };

    let signInError;
    if (error || gError) {
        signInError = (
            <p className="mb-4 text-red-400">
                {error?.message || gError?.message}
            </p>
        );
    }

    if (loading || gLoading || sending) {
        return <Loading />;
    }

    return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="card w-96 my-20 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-2xl text-center">Login</h2>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="input input-bordered w-full max-w-xs"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: "Email is Required",
                                    },
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: "Provide a valid Email",
                                    },
                                })}
                            />
                            <label className="label">
                                {errors.email?.type === "required" && (
                                    <span className="label-text-alt text-red-500">
                                        {errors.email.message}
                                    </span>
                                )}
                                {errors.email?.type === "pattern" && (
                                    <span className="label-text-alt text-red-500">
                                        {errors.email.message}
                                    </span>
                                )}
                            </label>
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                placeholder="Password"
                                className="input input-bordered w-full max-w-xs"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: "Password is Required",
                                    },
                                    minLength: {
                                        value: 6,
                                        message:
                                            "Must be 6 characters or longer",
                                    },
                                })}
                            />
                            <small
                                onClick={resetYourPassword}
                                className="mt-2 cursor-pointer text-blue-600"
                            >
                                Forgot Password?
                            </small>
                            <label className="label">
                                {errors.password?.type === "required" && (
                                    <span className="label-text-alt text-red-400">
                                        {errors.password.message}
                                    </span>
                                )}
                                {errors.password?.type === "minLength" && (
                                    <span className="label-text-alt text-red-400">
                                        {errors.password.message}
                                    </span>
                                )}
                            </label>
                        </div>
                        {signInError}
                        <input
                            className="btn btn-primary w-full max-w-xs text-white"
                            type="submit"
                            value="Login"
                        />
                    </form>

                    <small>
                        New to MotoParts BD?{" "}
                        <Link to="/signup" className="text-blue-600">
                            Create New Account
                        </Link>
                    </small>

                    <div className="divider">OR</div>
                    <button
                        onClick={() => signInWithGoogle()}
                        className="btn btn-outline btn-secondary"
                    >
                        Continue With Google
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;
