import React, { useEffect, useState } from "react";
import Tool from "./Tool";

const Tools = () => {
    const [tools, setTools] = useState([]);

    useEffect(() => {
        fetch("tools.json")
            .then((res) => res.json())
            .then((data) => setTools(data));
    }, []);

    return (
        <div className="max-w-6xl mx-auto">
            <div
                id="tools"
                className="grid grid-cols-1 pt-20 justify-items-center md:grid-cols-2 lg:grid-cols-3 gap-10"
            >
                {tools
                    .map((tool) => <Tool key={tool._id} tool={tool} />)
                    .slice(0, 3)}
            </div>
        </div>
    );
};

export default Tools;
