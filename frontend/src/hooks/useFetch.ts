import { useEffect, useState } from "react";


const useFetch = (url: string) =>{
    const [data, setData] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)

    useEffect(()=>{
        const fetchData = async ()=>{
            setLoading(true)
            try {
                const res = await fetch(url);
    
                if(!res.ok){
                    setError("Failed to fetch data...")
                    alert("Failed to fetch data")
                }
    
                const result = await res.json();
                setData(result?.data);
                setLoading(false);
    
            } catch (error) {
                setError(error.message)
                setLoading(false);
            }
        }

        fetchData();

    }, [url]);

    return {
        loading: loading,
        error: error,
        data: data
    }
}

export default useFetch;