import React, { useState } from "react";
import "tailwindcss/tailwind.css";
import Input from "./Input";
import Button from "./Button";

interface FormErrors {
    name: string;
    email: string;
}

function Form() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [showPopup, setShowPopup] = useState(false);
    const [errors, setErrors] = useState<FormErrors>({ name: "", email: "" });

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        let errors: FormErrors = {
            name: '',
            email: ''
        };

        if (!name) {
            errors.name = "This is a required field";
        }

        if (!email) {
            errors.email = "This is a required field";
        }

        if (Object.keys(errors).length > 0) {
            setErrors(errors);
            return;
        }

        console.log("Name: ", name);
        console.log("Email: ", email);
        setShowPopup(false);
        setErrors({ name: "", email: "" });
    };

    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
        setErrors({ ...errors, name: "" });
    };

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
        setErrors({ ...errors, email: "" });
    };
    return (
        <div className="relative">
            <button className="ml-6 my-6 " onClick={() => setShowPopup(true)}>Create Job</button>
            {showPopup && (<>
                <button className="z-100">delete</button>
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center"
                    style={{ backgroundColor: "rgba(245, 245, 245, 0.5)" }}
                >
                    <button className="absolute left-6 top-2 z-100">edit</button>
                    <button className="absolute left-16 top-2 z-100">delete</button>
                    <div
                        className="bg-white rounded-lg p-8 border-2 border-card-border"
                        style={{ width: "577px", height: "564px", backgroundColor: "#fff" }}
                    >
                        <div className="form-step-1 flex justify-between items-center mb-6">
                            <h1 className="text-xl font-normal">Create a job</h1>
                            <h2 className="text-base font-medium">Step 1</h2>
                        </div>
                        <form onSubmit={handleSubmit} className="flex flex-row flex-wrap gap-[20.5px]">
                                
                                <Input
                                    value={name}
                                    name="Job title"
                                    error={errors.name}
                                    placeholder=""
                                    onChange={handleNameChange}
                                />
                                <Input
                                    value={email}
                                    name="Company name"
                                    error={errors.email}
                                    placeholder=""
                                    onChange={handleEmailChange}
                                />
                                <Input
                                    value={email}
                                    name="Industry"
                                    error={errors.email}
                                    placeholder=""
                                    onChange={handleEmailChange}
                                />
                                <Input
                                    width="244.5px"
                                    value={email}
                                    name="Location"
                                    error={errors.email}
                                    placeholder=""
                                    onChange={handleEmailChange}
                                />
                                <Input
                                    width="244.5px"
                                    value={email}
                                    name="Remote type"
                                    error={errors.email}
                                    placeholder=""
                                    onChange={handleEmailChange}
                                />

                            <div className="">
                                <Button
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
                </div>
            </>
            )}
        </div>
    )
}

export default Form