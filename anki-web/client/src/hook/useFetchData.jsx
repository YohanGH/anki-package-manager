import { useState, useEffect } from "react";
import notify from "../utils/notify";

const useFetchData = (URL) => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(URL);

                if (response.status !== 200) {
                    const errorText = await response.text();
                    console.error("Fetch error text: ", errorText);
                    throw new Error("Error during data recovery.");
                }

                const result = await response.json();
                setData(result);

            } catch (err) {
                console.error("Fetch error: ", err);
        setError(err.message || "An error occurred.");
        notify(err.message || "An error occurred.", "error");
            }
        };
        
        fetchData();
    }, [URL]);
    return { data, error };
};

export default useFetchData;