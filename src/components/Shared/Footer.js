import React from "react";

const Footer = () => {
    return (
        <div className="bg-gray-100 py-5">
            <p className="text-center">
                Copyright &copy; {new Date().getFullYear()} || All Rights
                Reserved
            </p>
        </div>
    );
};

export default Footer;
