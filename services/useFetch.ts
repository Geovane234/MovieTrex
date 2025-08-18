import {useState, useEffect } from 'react';

const useFetch = <T>(fetchFunction: () => Promise<T>, autoFetch = true) => {
    const [data, setData] = useState<T | null>(null)
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<Error | null>(null)

    const fetchData =async () =>{
        try {
            setLoading(true)
            setError(null)
            const response = await fetchFunction()
            console.log(` Request returned ${response}`)
            setData(response)
        }catch (err) {
            setError(err instanceof Error ? err : new Error('An error occurred'))
        }finally {
            setLoading(false)
        }
    }

    const resetData = () => {
        setData(null)
        setLoading(false)
        setError(null)
    }

    useEffect(() => {
        if(autoFetch){
            fetchData()
        }
    },[]);

    return {data, loading, error, refetch: fetchData, resetData};
}
export default useFetch;