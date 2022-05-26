import { useEffect, useState } from "react";

const useTools = () => {
    const [tools, setTools] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://thawing-stream-62063.herokuapp.com/tools")
            .then((res) => res.json())
            .then((data) => {
                setTools(data);
                setLoading(false);
            });
    }, []);

    return [tools, loading];
};

export default useTools;
