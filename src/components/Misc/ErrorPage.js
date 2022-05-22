import React from "react";
import errorImage from "../../images/back-404.jpeg";

const ErrorPage = () => {
    return (
        <div>
            <img className="w-full" src={errorImage} alt="" />
        </div>
    );
};

export default ErrorPage;
