import React from "react";
import myPic from "../../images/my-pic .jpeg";

const MyPortfolio = () => {
    return (
        <div className="grid justify-items-center lg:grid-cols-3 grid-cols-2">
            <div className="p-16  col-span-2">
                <h2 className="uppercase text-lg tracking-widest text-primary">
                    Welcome! I'm Safwan
                </h2>
                <h2 className="text-5xl my-8 font-extralight capitalize">
                    I design and build websites
                </h2>
                <p className="text-xl tracking-wide text-gray-500">
                    Hello, My name is Safwan! I am a freelance Web Designer and
                    WordPress Developer. My job is to build your websites so
                    that it is functional and user friendly but at the same time
                    attractive.
                </p>
                <br />
                <p className="text-xl tracking-wide text-gray-500">
                    Building sites with WordPress and react are my bread and
                    butter. I would estimate 95% of the work I do revolves
                    around using WordPress in some way. I myself Safwan always
                    excited when it comes to building things in WordPress.
                </p>
                <br />
                <a
                    className="btn btn-outline btn-primary mr-3"
                    target="_blank"
                    rel="noreferrer"
                    href="https://fruits-ninja.web.app"
                >
                    Warehouse Project
                </a>
                <a
                    className="btn btn-outline btn-primary mr-3"
                    target="_blank"
                    rel="noreferrer"
                    href="https://crypto-lab-safwan.netlify.app"
                >
                    Crypto Currency
                </a>
                <a
                    className="btn btn-outline btn-primary mr-3"
                    target="_blank"
                    rel="noreferrer"
                    href="http://safwan.tech"
                >
                    Personal Portfolio
                </a>
            </div>
            <div className="col-span-2 lg:col-span-1 mx-24 lg:mx-0">
                <img src={myPic} className="" alt="" />
            </div>
        </div>
    );
};

export default MyPortfolio;
