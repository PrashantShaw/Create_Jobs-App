export interface TypeJob {
    id: string,
    'job-title': string,
    company: string,
    industry: string,
    location: string,
    'remote-type': string,
    experience: {
        min: string,
        max: string,
    },
    salary: {
        min: string,
        max: string,
    },
    'total-emp': string,
    'apply-type': string,
}

export interface FormErrors {
    'job-title': string,
    company: string,
    industry: string,
}

export interface TypeCreateJobResponse {
    status: number,
    data: TypeJob
}