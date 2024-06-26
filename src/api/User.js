import axios from "axios";

// const BACKEND_ORIGIN_URL = 'http://localhost:3000' 

//${BACKEND_ORIGIN_URL}/user/login
//${BACKEND_ORIGIN_URL}/user/register
const Login = async (email, password) => {
    try {
        const response = await axios.post(`https://job-listing-api-three.vercel.app/user/login`,{email , password});
        return response;
    } catch (error) {
        return error.response.data
    }
}

const Register = async (name, email, mobile, password) => {
    try {
        const response = await axios.post(`https://job-listing-api-three.vercel.app/user/register`,{name, email, mobile, password});
        return response;
    } catch (error) {
        return error.response.data
    }
}

export {Login , Register};