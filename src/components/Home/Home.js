import React from "react";
import Banner from "./Banner";
import ReviewsOfCompany from "./ReviewsOfCompany";
import SummaryOfBusiness from "./SummaryOfBusiness";
import Tools from "./Tools/Tools";

const Home = () => {
    return (
        <>
            <Banner />
            <Tools />
            <ReviewsOfCompany />
            <SummaryOfBusiness />
        </>
    );
};

export default Home;
