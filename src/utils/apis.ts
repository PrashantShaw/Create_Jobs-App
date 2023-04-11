import { API_ENDPOINT } from "./constants";
import { TypeCreateJobResponse, TypeJob } from "./types";
import axios from "axios";

export const createJob = async (job: TypeJob): Promise<TypeCreateJobResponse> => {
    return await axios({
        url: API_ENDPOINT,
        method: 'POST',
        headers: { 'Content-type': 'application/json'},
        data: JSON.stringify(job)
    })
}
export const editJob = async (job: TypeJob): Promise<TypeCreateJobResponse> => {
    return await axios({
        url: `${API_ENDPOINT}/${job.id}`,
        method: 'PUT',
        headers: { 'Content-type': 'application/json'},
        data: JSON.stringify(job)
    })
}
export const deleteJob = async (jobId: string): Promise<TypeCreateJobResponse> => {
    return await axios({
        url: `${API_ENDPOINT}/${jobId}`,
        method: 'DELETE',
        headers: { 'Content-type': 'application/json'},
    })
}