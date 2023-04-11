import React, { SetStateAction, useEffect, useState } from "react";
import "tailwindcss/tailwind.css";
import Input from "./Input";
import Button from "./Button";
import { FormErrors, TypeCreateJobResponse, TypeJob } from "../utils/types";
import { emptyJobsObject, emptyErrorObject } from "../utils/variables";
import Step1Form from "./Step1Form";
import Step2Form from "./Step2Form";
import { createJob, editJob } from "../utils/apis";
import { CREATE_ERROR_MESSAGE, EDIT_ERROR_MESSAGE } from "../utils/constants";

interface FormComponentProps {
    setJobsArr: React.Dispatch<SetStateAction<TypeJob[] | null>>
    setjobToEdit: React.Dispatch<SetStateAction<TypeJob | null>>
    jobToEdit: TypeJob | null
}

function Form({ setJobsArr, jobToEdit, setjobToEdit }: FormComponentProps) {

    const [jobObj, setJobObj] = useState<TypeJob>(emptyJobsObject);
    const [showPopup, setShowPopup] = useState(false);
    const [showStep1, setShowStep1] = useState(false);
    const [showStep2, setShowStep2] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [errors, setErrors] = useState<FormErrors>(emptyErrorObject);

    useEffect(() => {
        if (jobToEdit) {
            setIsEditing(true)
            setJobObj(jobToEdit)
            setShowPopup(true)
            setShowStep1(true)
            setShowStep2(false)
        }
    }, [jobToEdit])

    const formValidation = (): boolean => {
        let errors: FormErrors = {
            'job-title': '',
            company: '',
            industry: ''
        };

        if (!jobObj["job-title"]) {
            errors["job-title"] = "This is a required field";
        }

        if (!jobObj.company) {
            errors.company = "This is a required field";
        }

        if (!jobObj.industry) {
            errors.industry = "This is a required field";
        }

        if (Object.values(errors).join('')) {
            setErrors(errors);
            return false;
        }

        return true
    }
    const handleEditSuccess = (res: TypeCreateJobResponse) => {
        console.log('edited :::', res)
        setJobsArr(allJobs => {
            const updatedList = allJobs?.map(job => {
                if (job.id === res.data.id) {
                    return res.data
                }
                else return job
            })
            return updatedList as TypeJob[]
        })
        setIsEditing(false)
        setShowPopup(false)
        setShowStep1(false)
        setShowStep2(false)
        setjobToEdit(null)
        setJobObj(emptyJobsObject)
        setErrors(emptyErrorObject);
    }
    // console.log('++++++++++++++++', jobObj)
    const handleSubmitStep1 = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const success = formValidation()
        if (!success) return

        setShowStep1(false);
        setShowStep2(true)
        setErrors(emptyErrorObject);
    };
    const handleSubmitStep2 = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const success = formValidation()
        if (!success) return

        document.body.style.cursor = "wait"

        if (isEditing) {
            editJob(jobObj)
                .then(res => {
                    if (res.status === 200) {
                        handleEditSuccess(res)
                        document.body.style.cursor = "default"
                    }
                    else {
                        document.body.style.cursor = "default"
                        alert(EDIT_ERROR_MESSAGE)
                    }
                })
                .catch(err => {
                    document.body.style.cursor = "default"
                    throw new Error(EDIT_ERROR_MESSAGE, err)
                })
            return
        }
        createJob(jobObj)
            .then(res => {
                if (res.status === 201) {
                    // console.log('created job result', res)
                    setJobsArr(rest => [...(rest as TypeJob[]), res.data])
                    setShowStep2(false)
                    setShowPopup(false)
                    setJobObj(emptyJobsObject)
                    setErrors(emptyErrorObject);
                    document.body.style.cursor = "default"
                }
                else {
                    document.body.style.cursor = "default"
                    alert(CREATE_ERROR_MESSAGE)
                }
            })
            .catch(err => {
                document.body.style.cursor = "default"
                throw new Error(CREATE_ERROR_MESSAGE, err)
            })
    };
    const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        const key = event.target.name
        const value = event.target.value
        if (key.includes('experience')) {
            if (key.includes('min')) {
                jobObj.experience.min = value
                setJobObj({ ...jobObj })
            }
            else {
                jobObj.experience.max = value
                setJobObj({ ...jobObj })
            }
            return
        }
        if (key.includes('salary')) {
            if (key.includes('min')) {
                jobObj.salary.min = value
                setJobObj({ ...jobObj })
            }
            else {
                jobObj.salary.max = value
                setJobObj({ ...jobObj })
            }
            return
        }
        setJobObj(rest => {
            return { ...rest, [key]: value }
        })
        setErrors(rest => { return { ...rest, [key]: "" } })
    }

    return (
        <div className="relative">
            {/* <button className="ml-6 my-6 " onClick={() => setShowPopup(true)}>Create Job</button> */}
            <div className="ml-6 my-6">
                <Button
                    height='40px'
                    width='147px'
                    textColor='font-white'
                    bgColor='primary'
                    text='Create Job'
                    onClick={() => {
                        setJobObj(emptyJobsObject)
                        setShowPopup(true)
                        setShowStep1(true)
                        setShowStep2(false)
                    }}
                />
            </div>
            {showPopup && (<>
                <div
                    onClick={() => {
                        setShowPopup(false)
                        setShowStep1(false)
                        setShowStep2(false)
                        isEditing && setIsEditing(false)
                        setJobObj(emptyJobsObject)
                        setErrors(emptyErrorObject)
                    }}
                    className="fixed inset-0 z-50 flex items-center justify-center"
                    style={{ backgroundColor: "rgba(205, 205, 205, 0.5)" }}
                >
                    {showStep1 &&
                        <Step1Form
                            onChangeHandler={onChangeHandler}
                            handleSubmit={handleSubmitStep1}
                            jobObj={jobObj}
                            errors={errors}
                        />}

                    {showStep2 &&
                        <Step2Form
                            onChangeHandler={onChangeHandler}
                            handleSubmit={handleSubmitStep2}
                            jobObj={jobObj}
                            errors={errors}
                        />}

                </div>
            </>
            )}
        </div>
    )
}

export default Form