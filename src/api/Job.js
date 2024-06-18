import axios from 'axios';

const BACKEND_ORIGIN_URL = 'http://localhost:3000';

const fetchJobs = async () => {
    try {
        const response = await axios.get(`${BACKEND_ORIGIN_URL}/job`);
        return response;
    } catch (error) {
        return error.response.data;
    }
};

const fetchJobsByQuery = async (query) => {
    const { minSalary,
        maxSalary,
        jobType,
        location,
        remote,
        skills } = query;
    try {
        const response = await axios.get(`${BACKEND_ORIGIN_URL}/job`, {
            params: {
                minSalary,
                maxSalary,
            }
        });
        return response;
    } catch (error) {
        return error.response.data;
    }
};


export { fetchJobs, fetchJobsByQuery };