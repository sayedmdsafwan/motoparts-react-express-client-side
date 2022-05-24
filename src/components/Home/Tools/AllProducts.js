import React from "react";
import useTools from "../../../Hooks/useTools";
import Tool from "./Tool";

const AllProducts = () => {
    const [tools] = useTools();

    return (
        <div className="max-w-6xl mx-auto mb-20">
            <div
                id="tools"
                className="grid grid-cols-1 pt-20 justify-items-center md:grid-cols-2 lg:grid-cols-3 gap-10"
            >
                {tools.map((tool) => (
                    <Tool key={tool._id} tool={tool} />
                ))}
            </div>
        </div>
    );
};

export default AllProducts;
