import React, { useState } from "react";
import "tailwindcss/tailwind.css";
import Input from "./Input";
import Button from "./Button";
import { FormErrors, TypeJob } from "../utils/types";
import { emptyJobsObject, emptyErrorObject } from "../utils/variables";
import Step1Form from "./Step1Form";

function Form() {

    const [jobObj, setJobObj] = useState<TypeJob>(emptyJobsObject);
    const [showPopup, setShowPopup] = useState(false);
    const [showStep1, setShowStep1] = useState(false);
    const [showStep2, setShowStep2] = useState(false);
    const [errors, setErrors] = useState<FormErrors>(emptyErrorObject);

    const formValidation = (): boolean =>{
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

    console.log('++++++++++++++++', jobObj)
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const success = formValidation()
        if (!success) return

        console.log("################################", jobObj);
        setShowPopup(false);
        setErrors(emptyErrorObject);
    };
    const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        const key = event.target.name
        const value = event.target.value
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
                    width='118px'
                    textColor='font-white'
                    bgColor='primary'
                    text='Create Job'
                    onClick={() => setShowPopup(true)}
                />
            </div>
            {showPopup && (<>
                <div
                    onClick={() => setShowPopup(false)}
                    className="fixed inset-0 z-50 flex items-center justify-center"
                    style={{ backgroundColor: "rgba(205, 205, 205, 0.5)" }}
                >
                    <Step1Form 
                        onChangeHandler={onChangeHandler}
                        handleSubmit={handleSubmit}
                        jobObj={jobObj}
                        errors={errors}
                    />
                    
                </div>
            </>
            )}
        </div>
    )
}

export default Form