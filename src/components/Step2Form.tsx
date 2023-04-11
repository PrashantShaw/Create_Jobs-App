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

function Step2Form({
    onChangeHandler,
    handleSubmit,
    jobObj
}: Step1FormProps) {
    return (
        <div
            onClick={(e) => e.stopPropagation()}
            className="relative bg-white rounded-lg p-8 border-2 border-card-border shadow-md"
            style={{ width: "577px", height: "564px", backgroundColor: "#fff" }}
        >
            <div className="form-step-1 flex justify-between items-center mb-6">
                <h1 className="text-xl font-normal">Create a job</h1>
                <h2 className="text-base font-medium">Step 2</h2>
            </div>
            <form onSubmit={handleSubmit} className="flex flex-row flex-wrap gap-6">

                <Input
                    width="242.5px"
                    fontSize='sm'
                    fontWeight='medium'
                    value={jobObj.experience.min}
                    name='experience-min'
                    label="Experience"
                    placeholder="minimum"
                    onChange={onChangeHandler}
                />
                <Input
                    width="242.5px"
                    fontSize='sm'
                    fontWeight='medium'
                    value={jobObj.experience.max}
                    name="experience-max"
                    label=""
                    placeholder="maximum"
                    onChange={onChangeHandler}
                />
                <Input
                    width="242.5px"
                    fontSize='sm'
                    fontWeight='medium'
                    value={jobObj.salary.min}
                    name='salary-min'
                    label="Salary"
                    placeholder="minimum"
                    onChange={onChangeHandler}
                />
                <Input
                    width="242.5px"
                    fontSize='sm'
                    fontWeight='medium'
                    value={jobObj.salary.max}
                    name="salary-max"
                    label=""
                    placeholder="maximum"
                    onChange={onChangeHandler}
                />
                <Input
                    fontSize='sm'
                    fontWeight='medium'
                    value={jobObj['total-emp']}
                    label="Total employee"
                    name="total-emp"
                    placeholder="ex. 100"
                    onChange={onChangeHandler}
                />
                <div>
                    <div className="text-sm font-medium block mb-3">Apply type</div>
                    <div className="flex flex-row items-center">
                        <label className="inline-flex items-center mr-4">
                            <input
                                type="radio"
                                value="Quick apply"
                                onChange={onChangeHandler}
                                name='apply-type'
                                checked={jobObj['apply-type'] === 'Quick apply'}
                                className="form-radio h-5 w-5 text-primary checked:bg-primary"
                            />
                            <span className="ml-1 text-sm text-placeholder">Quick apply</span>
                        </label>
                        <label className="inline-flex items-center">
                            <input
                                type="radio"
                                value="External apply"
                                checked={jobObj['apply-type'] === 'External apply'}
                                name='apply-type'
                                onChange={onChangeHandler}
                                className="form-radio h-5 w-5 bg-error border-transparent border-2 border-error"
                            />
                            <span className="ml-1 text-sm text-placeholder">External apply</span>
                        </label>
                    </div>
                </div>

                <div className="absolute right-8 bottom-8">
                    <Button
                        id='save-btn'
                        fontSize='base'
                        fontWeight='medium'
                        height='40px'
                        width='68px'
                        text='Save'
                        onClick={() => { }}
                    />
                </div>
            </form>
        </div>
    )
}

export default Step2Form