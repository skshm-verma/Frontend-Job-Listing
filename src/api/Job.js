import axios from 'axios';

// const BACKEND_ORIGIN_URL = 'http://localhost:3000';
//${BACKEND_ORIGIN_URL}/job
//${BACKEND_ORIGIN_URL}/job
//${BACKEND_ORIGIN_URL}/job/${id}
//${BACKEND_ORIGIN_URL}/job/add
//${BACKEND_ORIGIN_URL}/job/update/${job._id}
//${BACKEND_ORIGIN_URL}/job/delete/${id}

const BACKEND_URL = 'https://job-listing-api-three.vercel.app';

const axiosInstance = axios.create({
    baseURL: BACKEND_URL,
    withCredentials: true, // Include credentials in requests
});


const fetchJobs = async () => {
    try {
        const response = await axiosInstance.get(`/job`);
        return response;
    } catch (error) {
        return error.response.data;
    }
};

const fetchJobsByQuery = async (query) => {
    const { minSalary,
        maxSalary,
        title,
        skills
    } = query;
    try {
        const response = await axiosInstance.get(`/job`, {
            params: {
                minSalary,
                maxSalary,
                title,
                skills
            }
        });
        return response;
    } catch (error) {
        return error.response.data;
    }
};

const fetchJobById = async (id) => {
    try {
        const response = await axiosInstance.get(`/job/${id}`);
        return response;
    } catch (error) {
        return error;
    }
};

const createJob = async (job) => {
    try {
        const token = localStorage.getItem('token');
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        };
        const response = await axiosInstance.post(`/job/add`, job, config);
        return response;
    } catch (error) {
        return error;
    }
};

const editJob = async (job) => {
    try{
        const token = localStorage.getItem('token');
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        };
       const response = await axiosInstance.put(`/job/update/${job._id}`, job, config);
       return response;
    }catch(error){
        return error;
    }
}

const deleteJob = async (id) => {
    try{
        const token = localStorage.getItem('token');
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        };
        const response = await axiosInstance.delete(`/job/delete/${id}`, config);
        return response;
    }catch(error){
        return error;
    }
}



export { fetchJobs, fetchJobsByQuery, fetchJobById, createJob, editJob, deleteJob };