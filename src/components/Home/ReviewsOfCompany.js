import React from "react";
import building1 from "../../images/building1.jpg";
import building2 from "../../images/building2.jpg";
import building3 from "../../images/building3.jpg";

const ReviewsOfCompany = () => {
    return (
        <div className="my-24 max-w-6xl mx-auto px-8">
            <div>
                <h2 className="text-center text-3xl text-primary">
                    Reviews From Our Buyers
                </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center my-10">
                <div className="card max-w-md bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img
                            src={building1}
                            alt="Shoes"
                            className="rounded-xl"
                        />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">An Corp.</h2>
                        <p>
                            We ordered 3000 pieces of clatchplate of dirt bike.
                            We used them over a year and 98% of them are in good
                            position. We are happy to work with this
                            manufacturer.{" "}
                        </p>
                    </div>
                </div>
                <div className="card max-w-md bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img
                            src={building2}
                            alt="Shoes"
                            className="rounded-xl"
                        />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Mikdad Motors</h2>
                        <p>
                            We used their motor disc brake for 2 years. We
                            already bought 10000 thousand pieces of petal disk
                            from them. We are happy to work with this
                            manufacturer.{" "}
                        </p>
                    </div>
                </div>
                <div className="card max-w-md bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img
                            src={building3}
                            alt="Shoes"
                            className="rounded-xl"
                        />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Moto BD</h2>
                        <p>
                            They always try to maintain the quality. We ordered
                            5000 pieces of tire. We used them over a year. We
                            are happy to work with this manufacturer.{" "}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewsOfCompany;
