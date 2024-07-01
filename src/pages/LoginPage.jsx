import React, { useState } from 'react';
import { Login } from '../api/User';
import { Navigate, useNavigate } from "react-router-dom";
import { Toaster, toast } from 'react-hot-toast';
import image1 from '../assets/imageRegister.png';

const LoginPage = ({ setCurrentUser }) => {

    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});
    const [redirectToHome, setRedirectToHome] = useState(false);

    const validate = () => {
        const errors = {};
        if (!email) errors.email = "Email is required";
        if (!password) errors.password = "Password is required";
        return errors;
    };

    const handleLogin = () => {
        const errors = validate();
        if (Object.keys(errors).length > 0) {
            setErrors(errors);
            return;
        }
        fetchUser();
    }

    const fetchUser = async () => {
        const response = await Login(email, password);
        if (response.status === 200) {
            setCurrentUser(true);
            localStorage.setItem("token", response.data.token);
            localStorage.setItem('user', response.data.id);
            setRedirectToHome(true);
        } else {
            toast.error('User not found');
        }
    }

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            handleLogin();
        }
    }

    return (
        <div className='flex'>
            <Toaster position="top-center" reverseOrder={false} />
            <div className='flex justify-center items-center w-screen h-screen lg:bg-white bg-[#FFEFEF]'>
                <div className='lg:w-[60%] w-full flex justify-center items-center '>
                    <div className='flex flex-col md:items-start items-center gap-2'>
                        <div className='flex flex-col justify-center items-center md:justify-center md:items-start md:gap-2 gap-1'>
                            <h1 className='tracking-normal text-black font-semibold md:text-5xl text-2xl py-1 font-dm'>Already have an account?</h1>
                            <h2 className='tracking-tight text-[#525252] md:text-2xl text-xl pb-8'>Your personal job finder is here</h2>
                        </div>
                        <div className='inline-block border-[#C2C2C2] pb-2'>
                            <input
                                type="email"
                                placeholder='Email'
                                value={email}
                                onInput={(e) => setEmail(e.target.value)}
                                className='border mx-1 py-2 px-4 rounded-md md:w-[22rem] w-full focus:outline-none focus:ring-1 focus:ring-[#ED5353]'
                                onKeyDown={handleKeyDown}
                            />
                            {errors.email && <div className='text-sm mx-2 my-1 text-[#ED5353]'>{errors.email}</div>}
                        </div>
                        <div className='inline-block border-[#C2C2C2] pb-2'>
                            <form onKeyDown={handleKeyDown}>
                                <input
                                    type="password"
                                    placeholder='Password'
                                    value={password}
                                    onInput={(e) => setPassword(e.target.value)}
                                    className='border mx-1 py-2 px-4 rounded-md md:w-[22rem] w-full focus:outline-none focus:ring-1 focus:ring-[#ED5353]'

                                />
                            </form>
                            {errors.password && <div className='text-sm mx-2 my-1 text-[#ED5353]'>{errors.password}</div>}
                        </div>
                        <button
                            onClick={handleLogin}
                            className='mb-2 block tracking-wider bg-[#ED5353] font-dm font-xl text-white mx-2 py-2 px-8 rounded-md hover:bg-[#f66565] duration-200 mx-auto md:mx-0'
                        >Sign In</button>
                        <div className='md:mx-2 mx-auto'>
                            <span className='tracking-tight text-[#525252]'>Don’t have an account?</span>
                            <button
                                onClick={() => { navigate('/register') }}
                                className='px-2 font-semibold underline underline-offset-2 hover:text-[#ED5353] duration-300'>Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-[40%] relative lg:block hidden'>
                <div className='absolute w-full flex z-20 justify-center items-center top-10'>
                    <span className='text-white text-4xl font-dm'>Your Personal Job Finder</span>
                </div>
                <img className='w-full h-screen' src={image1} alt="LandingPageImage" />
            </div>
            {redirectToHome && <Navigate to="/" />}
        </div>
    );
}

export default LoginPage;