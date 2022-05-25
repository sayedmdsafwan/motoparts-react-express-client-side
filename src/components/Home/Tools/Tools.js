import React from "react";
import { Link } from "react-router-dom";
import useTools from "../../../Hooks/useTools";
import Tool from "./Tool";

const Tools = () => {
    const [tools] = useTools();

    return (
        <>
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl text-primary mt-10 text-center">
                    Tools
                </h2>
                <div
                    id="tools"
                    className="grid grid-cols-1 pt-10 justify-items-center md:grid-cols-2 lg:grid-cols-3 gap-10"
                >
                    {tools
                        .map((tool) => <Tool key={tool._id} tool={tool} />)
                        .slice(0, 3)}
                </div>
            </div>
            <Link to="alltools">
                <button className="btn btn-primary btn-outline block mx-auto mt-8">
                    Show All Tools
                </button>
            </Link>
        </>
    );
};

export default Tools;
