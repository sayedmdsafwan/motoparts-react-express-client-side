import { useEffect, useState } from "react";

const useTools = () => {
    const [tools, setTools] = useState([]);

    useEffect(() => {
        fetch("http://localhost:4000/tools")
            .then((res) => res.json())
            .then((data) => setTools(data));
    }, []);

    return [tools];
};

export default useTools;
