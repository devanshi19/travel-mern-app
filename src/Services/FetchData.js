import { useEffect, useState } from "react";

const FetchData = (url) => {

    const [isLoading, setIsLoading] = useState(false);
    const [responseData, setResponse] = useState(null);
    const [Error, setError] = useState("");

    useEffect(() => {
        const fetchDataFunction = async () => {
            setIsLoading(true);
            try {
                const response = await fetch(url);
                if (response.status === 200) {
                    const result = await response.json();
                    setResponse(result);
                }
                else {
                    setError("Failed to fecth Data")
                }

            }
            catch (err) {
                setError(err.message);
                setIsLoading(false);
            }
        }
        fetchDataFunction();
    }, [url])
    return {
        responseData,
        Error,
        isLoading
    }
}

export default FetchData;