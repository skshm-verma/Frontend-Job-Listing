import axios from "axios";

const BACKEND_ORIGIN_URL = 'https://job-listing-api-tau.vercel.app' 

// const BACKEND_URL = 'https://job-listing-api-three.vercel.app';

// const axiosInstance = axios.create({
//     baseURL: BACKEND_URL,
//     withCredentials: true, // Include credentials in requests
// });

const Login = async (email, password) => {
    try {
        const response = await axios.post(`${BACKEND_ORIGIN_URL}/user/login`,{email , password});
        return response;
    } catch (error) {
        return error.response.data
    }
}

const Register = async (name, email, mobile, password) => {
    try {
        const response = await axios.post(`${BACKEND_ORIGIN_URL}/user/register`,{name, email, mobile, password});
        return response;
    } catch (error) {
        return error.response.data
    }
}

export {Login , Register};