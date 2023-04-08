import React from 'react'
import { useGetAllJobs } from '../utils/useGetAllJobs'
import Card from './Card'
import Form from './Form'

const Home = () => {
    const { data, loading, error, refetch } = useGetAllJobs()
    if (loading) return <h2 className='text-center text-2xl mt-10'>Loading ..</h2>
    if (error) return <h2>Some Error occured!</h2>
    return <>
        <Form />
        <div className='flex flex-row flex-wrap justify-center items-center gap-8'>
            {data?.map(job => {
                const randomKey = (Math.random() * 1000).toString(24)
                return <Card key={randomKey} job={job} />
            })}
        </div>
    </>

}

export default Home