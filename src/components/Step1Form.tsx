import React from 'react'
import Input from './Input'
import Button from './Button'
import { FormErrors, TypeJob } from '../utils/types'
interface Step1FormProps {
    onChangeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void
    handleSubmit: React.FormEventHandler<HTMLFormElement>
    jobObj: TypeJob
    errors: FormErrors
}

function Step1Form({
    onChangeHandler,
    handleSubmit,
    jobObj,
    errors
}: Step1FormProps) {
    return (
        <div
            onClick={(e) => e.stopPropagation()}
            className="relative bg-white rounded-lg p-8 border-2 border-card-border shadow-md"
            style={{ width: "577px", height: "564px", backgroundColor: "#fff" }}
        >
            <div className="form-step-1 flex justify-between items-center mb-6">
                <h1 className="text-xl font-normal">Create a job</h1>
                <h2 className="text-base font-medium">Step 1</h2>
            </div>
            <form onSubmit={handleSubmit} className="flex flex-row flex-wrap gap-6">

                <Input
                    fontSize='sm'
                    fontWeight='medium'
                    value={jobObj['job-title']}
                    name='job-title'
                    label="Job title"
                    error={errors["job-title"]}
                    placeholder="ex. UX UI Designer"
                    required={true}
                    onChange={onChangeHandler}
                />
                <Input
                    fontSize='sm'
                    fontWeight='medium'
                    value={jobObj.company}
                    label="Company name"
                    name="company"
                    error={errors.company}
                    placeholder="ex. Google"
                    required={true}
                    onChange={onChangeHandler}
                />
                <Input
                    fontSize='sm'
                    fontWeight='medium'
                    value={jobObj.industry}
                    label="Industry"
                    name="industry"
                    error={errors.industry}
                    placeholder="ex. Information Technology "
                    required={true}
                    onChange={onChangeHandler}
                />
                <Input
                    fontSize='sm'
                    fontWeight='medium'
                    width="242.5px"
                    value={jobObj.location}
                    label="Location"
                    name="location"
                    placeholder="ex. Chennai"
                    onChange={onChangeHandler}
                />
                <Input
                    fontSize='sm'
                    fontWeight='medium'
                    width="242.5px"
                    value={jobObj["remote-type"]}
                    label="Remote type"
                    name="remote-type"
                    placeholder="ex. In-office"
                    onChange={onChangeHandler}
                />

                <div className="absolute right-8 bottom-8">
                    <Button
                        fontSize='base'
                        fontWeight='medium'
                        height='40px'
                        width='68px'
                        textColor='font-white'
                        bgColor='primary'
                        text='Next'
                        onClick={() => { }}
                    />
                </div>
            </form>
        </div>
    )
}

export default Step1Form