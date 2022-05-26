import React from "react";
import useTools from "../../../Hooks/useTools";
import Loading from "../../Shared/Loading";
import Tool from "./Tool";

const AllProducts = () => {
    const [tools, loading] = useTools();

    if (loading) {
        return <Loading />;
    }

    return (
        <div className="max-w-6xl mx-auto mb-20">
            <h2 className="text-center text-primary text-4xl mt-8">
                Total Products: {tools.length}
            </h2>
            <div
                id="tools"
                className="grid grid-cols-1 pt-10 justify-items-center md:grid-cols-2 lg:grid-cols-3 gap-10"
            >
                {tools
                    .map((tool) => <Tool key={tool._id} tool={tool} />)
                    .reverse()}
            </div>
        </div>
    );
};

export default AllProducts;
