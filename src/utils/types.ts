export interface TypeJob {
    id: string,
    'job-title': string,
    company: string,
    industry: string,
    location: string,
    'remote-type': string,
    experience: {
        min: number,
        max: number,
    },
    salary: {
        min: number,
        max: number,
    },
    'total-emp': string,
    'apply-type': string,
}