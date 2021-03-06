import React from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import { FaQuoteLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const ReviewsOfCompany = () => {
    const { data: reviews, isLoading } = useQuery("reviews", () =>
        fetch("https://thawing-stream-62063.herokuapp.com/reviews").then(
            (res) => res.json()
        )
    );

    if (isLoading) {
        return <Loading />;
    }

    return (
        <div className="my-24 max-w-6xl mx-auto px-8">
            <div>
                <h2 className="text-center text-3xl text-primary">
                    Reviews From Our Buyers {reviews.length}
                </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center my-10">
                {reviews
                    .map((review, index) => (
                        <div
                            key={index}
                            className="card max-w-sm italic text-center bg-base-100 shadow-xl"
                        >
                            <div className="card-body">
                                <FaQuoteLeft
                                    className="text-gray-300 block mx-auto"
                                    size={55}
                                />

                                <p className="tracking-wide my-4">
                                    {review.review}
                                </p>
                                <h3 className="text-2xl text-gray-400 tracking-wider">
                                    - {review.name}
                                </h3>
                                <p className="text-secondary">
                                    Rating: {review.rating}/5
                                </p>
                            </div>
                        </div>
                    ))
                    .reverse()
                    .slice(0, 3)}
            </div>
            <Link to="/allreview">
                <button className="block mx-auto btn btn-outline btn-primary">
                    See More Reviews
                </button>
            </Link>
        </div>
    );
};

export default ReviewsOfCompany;
