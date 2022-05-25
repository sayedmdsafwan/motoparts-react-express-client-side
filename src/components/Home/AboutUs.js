import React from "react";
import warehouse from "../../images/warehouse.jpeg";
import goalImage from "../../images/bike-parts-show.png";

const AboutUs = () => {
    return (
        <>
            <div className="mb-24">
                <div className="grid max-w-6xl mx-auto lg:grid-cols-2 grid-cols-1 gap-20 justify-items-center items-center">
                    <div className=" lg:pr-24">
                        <h3 className="text-lg text-secondary">
                            WHY CHOOSE US?
                        </h3>
                        <h2 className="text-5xl mb-6 font-extralight text-primary">
                            Our goal
                        </h2>
                        <p className="leading-7">
                            At motoparts BD, we always try to give you the best
                            products. We have clients all over the world Our
                            experts always works for the customer who buys from
                            us. We have ability to enhance the overall
                            efficiency and effectiveness of your ASC to help
                            providers and facilities improve their bike
                            performances.
                            <br />
                            Our supply chain management are awesome. You will
                            get the right product at right time in your hand
                        </p>
                    </div>
                    <div>
                        <img src={goalImage} alt="our goal" />
                    </div>
                </div>
            </div>
            <div className="grid lg:grid-cols-5 grid-cols-1 gap-20 justify-items-center items-center">
                <div className="col-span-2">
                    <img src={warehouse} alt="warehouse" />
                </div>
                <div className="col-span-3 lg:pr-24">
                    <h3 className="text-lg text-secondary">WHY WE ARE BEST?</h3>
                    <h2 className="text-5xl mb-6 font-extralight text-primary">
                        About Us
                    </h2>
                    <p className="leading-7">
                        At motoparts BD, we have the experience in providing a
                        comprehensive range of bike tools. Our expertise has the
                        ability to enhance the overall efficiency and
                        effectiveness of your ASC to help providers and
                        facilities improve their bike performances. Our clients
                        are very important to us and we take great pride in our
                        customer service whether it is during the implementation
                        process, day to day interaction, or when we are
                        communicating with patients on the your behalf.
                    </p>
                </div>
            </div>
        </>
    );
};

export default AboutUs;
