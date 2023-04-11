import React from 'react'
import { useGetAllJobs } from '../utils/useGetAllJobs'
import Card from './Card'
import Form from './Form'
import { TypeJob } from '../utils/types'
import { deleteJob } from '../utils/apis'
import { DELETE_ERROR_MESSAGE } from '../utils/constants'

const Home = () => {
    const { data, loading, error, setData } = useGetAllJobs()
    const [jobToEdit, setjobToEdit] = React.useState<TypeJob | null>(null)
    const handleDeleteJob = (jobId: string) => {
        document.body.style.cursor = "wait"
        deleteJob(jobId)
            .then(res => {
                if (res.status === 200) {
                    console.log('delete job zzzzzzzzz', res)
                    const updatedList = data?.filter(job => job.id !== res.data.id) as TypeJob[]
                    setData(updatedList)
                    document.body.style.cursor = "default"
                }
                else {
                    document.body.style.cursor = "default"
                    alert(DELETE_ERROR_MESSAGE)
                }
            })
            .catch(err => {
                document.body.style.cursor = "default"
                throw new Error(DELETE_ERROR_MESSAGE, err)
            })
    }
    if (loading) return <h2 className='text-center text-2xl mt-10'>Loading ..</h2>
    if (error) return <h2>Some Error occured!</h2>
    return <>
        <Form
            setJobsArr={setData}
            jobToEdit={jobToEdit}
            setjobToEdit={setjobToEdit}
        />
        <div className='flex flex-row flex-wrap justify-center items-center gap-8'>
            {data?.map(job => {
                const randomKey = (Math.random() * 1000).toString(24)
                return <Card
                    key={randomKey}
                    job={job}
                    setjobToEdit={setjobToEdit}
                    handleDeleteJob={handleDeleteJob}
                />
            })}
        </div>
    </>

}

export default Home