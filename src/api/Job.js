import axios from 'axios';

// const BACKEND_ORIGIN_URL = 'http://localhost:3000';
//${BACKEND_ORIGIN_URL}/job
//${BACKEND_ORIGIN_URL}/job
//${BACKEND_ORIGIN_URL}/job/${id}
//${BACKEND_ORIGIN_URL}/job/add
//${BACKEND_ORIGIN_URL}/job/update/${job._id}
//${BACKEND_ORIGIN_URL}/job/delete/${id}
const fetchJobs = async () => {
    try {
        const response = await axios.get(`https://job-listing-api-three.vercel.app/job`);
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
        const response = await axios.get(`https://job-listing-api-three.vercel.app/job`, {
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
        const response = await axios.get(`https://job-listing-api-three.vercel.app/job/${id}`);
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
        const response = await axios.post(`https://job-listing-api-three.vercel.app/job/add`, job, config);
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
       const response = await axios.put(`https://job-listing-api-three.vercel.app/job/update/${job._id}`, job, config);
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
        const response = await axios.delete(`https://job-listing-api-three.vercel.app/job/delete/${id}`, config);
        return response;
    }catch(error){
        return error;
    }
}



export { fetchJobs, fetchJobsByQuery, fetchJobById, createJob, editJob, deleteJob };