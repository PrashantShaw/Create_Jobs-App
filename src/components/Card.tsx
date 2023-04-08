import React from 'react'
import { TypeJob } from '../utils/types'
import Button from './Button'

const Card = ({ job }: { job: TypeJob }) => {
    let minSalary = job.salary.min.toString(),
        maxSalary = job.salary.max.toString()
    const minAmountArr = job.salary.min.toString().split('')
    const maxAmountArr = job.salary.max.toString().split('')
    if (minSalary.length === 5) {
        minAmountArr.splice(2, 0, ',')
        minSalary = minAmountArr.join('')
    } else if (minSalary.length === 6) {
        minAmountArr.splice(1, 0, ',')
        minAmountArr.splice(3, 0, ',')
        minSalary = minAmountArr.join('')
    }
    if (maxSalary.length === 5) {
        maxAmountArr.splice(2, 0, ',')
        maxSalary = maxAmountArr.join('')
    } else if (maxSalary.length === 6) {
        maxAmountArr.splice(1, 0, ',')
        maxAmountArr.splice(3, 0, ',')
        maxSalary = maxAmountArr.join('')
    }
    return (
        <div className='flex gap-2 min-h-[320px] w-[830px] border-2 border-card-border rounded-lg px-6 py-4'>
            <div className='logo'>
                <img className='w-[48px] h-[48px]' src="images/netflix-logo.png" alt="netflix-logo" />
            </div>
            <div className='content flex flex-col gap-6'>
                <div className='headers'>
                    <h1 className='font-normal text-2xl'>{job['job-title'] ?? ''}</h1>
                    <h2 className='font-normal text-base'>{`${job.company} - ${job.industry}`}</h2>
                    <h3 className='font-normal text-base text-font-gray'>{`${job.location} (${job['remote-type']})`}</h3>
                </div>
                <div className="descriptions flex flex-col gap-2">
                    <p>Part-Time (9.00 am - 5.00 pm IST)</p>
                    <p>Experience ({job.experience.min} - {job.experience.max} years)</p>
                    <p>INR (₹) {minSalary} - {maxSalary} / Month</p>
                    <p>{job['total-emp']} employees</p>
                </div>
                <div className="buttons">
                    {/* <button className='w-[118px] h-[40px] bg-primary text-font-white rounded-md shadow-sm'>
                        Apply Now
                    </button> */}
                    <Button 
                        height='40px'
                        width='118px' 
                        textColor='font-white'
                        bgColor='primary'
                        text='Apply Now'
                        onClick={()=>{}}
                    />
                </div>
            </div>
        </div>
    )
}

export default Card