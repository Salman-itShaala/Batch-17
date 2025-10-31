import { useEffect, useState } from "react";

function useFetch(api) {
    const [fetchedData, setFetchedData] = useState(null);

    useEffect(() => {
        async function getData() {
            try {
                const res = await fetch(api);
                const data = await res.json();
                // const resolveData = data.quotes;

                setFetchedData(data);
            } catch (error) {
                console.log(error);
            }
        }

        getData();
    });

    return fetchedData;
}

export default useFetch;