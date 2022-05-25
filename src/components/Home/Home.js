import React from "react";
import AboutUs from "./AboutUs";
import Banner from "./Banner";
import ReviewsOfCompany from "./ReviewsOfCompany";
import SummaryOfBusiness from "./SummaryOfBusiness";
import Tools from "./Tools/Tools";

const Home = () => {
    return (
        <>
            <Banner />
            <Tools />
            <SummaryOfBusiness />
            <ReviewsOfCompany />
            <AboutUs />
        </>
    );
};

export default Home;
