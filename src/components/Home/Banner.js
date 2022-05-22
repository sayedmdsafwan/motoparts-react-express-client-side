import React from "react";
import bannerImage from "../../images/banner-image.png";

const Banner = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row gap-10 lg:gap-32">
                <div>
                    <h1 className="text-5xl  uppercase">
                        Trust on our quality!
                    </h1>
                    <p className="py-6">
                        We manufacture all kinds of motorbike parts with latest
                        technology. From us, you can buy container of parts at
                        cheapest price
                    </p>
                    <a href="#tools">
                        <button className="btn btn-primary">
                            Have a look!
                        </button>
                    </a>
                </div>
                <img
                    src={bannerImage}
                    className="max-w-md rounded-lg shadow-2xl"
                    alt=""
                />
            </div>
        </div>
    );
};

export default Banner;
