import { useEffect, useState } from "react";

const useToolDetails = (toolId) => {
    const [toolDetails, setToolDetails] = useState({});

    useEffect(() => {
        fetch(`http://localhost:4000/tool/${toolId}`)
            .then((res) => res.json())
            .then((data) => setToolDetails(data));
    }, [toolId]);

    return [toolDetails, setToolDetails];
};

export default useToolDetails;
