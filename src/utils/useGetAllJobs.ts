import { useEffect, useState } from "react";
import { API_ENDPOINT } from "./constants";
import axios from "axios";
import { TypeJob } from "./types";

export const useGetAllJobs = () => {
    const [data, setData] = useState<TypeJob[] | null>(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [refetchCount, setReftchCount] = useState(0)

    useEffect(() => {
        axios({
            url: API_ENDPOINT,
            method: "GET",
            headers: { 'content-type': 'application/json' }
        })
            .then(response => {
                console.log(response.data)
                if (response.status === 200) {
                    setLoading(false)
                    setError(null)
                    setData(response.data)
                }
                else throw new Error("Something went wrong")
            })
            .catch(err => {
                setLoading(false)
                setError(err.message)
                setData(null)
            })
    }, [refetchCount])

    return { data, loading, error, refetch: () => setReftchCount(c => c + 1) }
}