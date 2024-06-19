import React from 'react'
import { useState, useEffect } from 'react'
import { Login } from '../api/User'
import { Navigate, useNavigate } from "react-router-dom";
import image1 from '../assets/imageRegister.png'

const LoginPage = () => {
    
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [redirectToHome, setRedirectToHome] = useState(false);

    // useEffect(() => {
    //     const storedEmail = localStorage.getItem("email");
    //     const storedPassword = localStorage.getItem("password");
    //     console.log("Email: ", storedEmail, " Password: ", storedPassword);
    //     if (storedEmail) {
    //         setEmail(storedEmail);
    //     }
    //     if (storedPassword) {
    //         setPassword(storedPassword);
    //     }
    // }, []);

    const handleLogin = async () => {
        const response = await Login(email, password);
        console.log("Response In Auth: ", response);
        if (response.status == 200) {
            localStorage.setItem("token", response.data.token);
            setRedirectToHome(true);
        }
    }

    useEffect(() => {
        console.log(redirectToHome);
    }, [redirectToHome]);

    return (
        <div className='flex'>
            <div className='w-[60%] flex justify-center items-center'>
                <div className='flex flex-col items-start gap-2'>
                    <h1 className='tracking-normal text-black font-semibold text-5xl py-1 font-dm'>Already have an account?</h1>
                    <h2 className='tracking-tight text-[#525252] text-2xl pb-8'>Your personal job finder is here</h2>
                    <div className='inline-block border-[#C2C2C2] pb-2'>
                        <input
                            type="email"
                            placeholder='Email'
                            value={email}
                            onInput={(e) => setEmail(e.target.value)}
                            className='border mx-1 py-2 px-4 rounded-md w-[22rem] focus:outline-none focus:ring-1 focus:ring-[#ED5353]'
                        />
                    </div>
                    <div className='inline-block border-[#C2C2C2] pb-2'>
                        <input
                            type="password"
                            placeholder='Password'
                            value={password}
                            onInput={(e) => setPassword(e.target.value)}
                            className='border mx-1 py-2 px-4 rounded-md w-[22rem] focus:outline-none focus:ring-1 focus:ring-[#ED5353]'
                        />
                    </div>
                    <button
                        onClick={handleLogin}
                        className='mb-2 block tracking-wider bg-[#ED5353] font-dm font-xl text-white mx-2 py-2 px-8 rounded-md hover:bg-[#f66565] duration-200'
                    >Sign In</button>
                    <div className='mx-2'>
                        <span className='tracking-tight text-[#525252]'>Don’t have an account?</span>
                        <button
                        onClick={ () => { navigate('/register')}} 
                        className='px-2 font-semibold underline underline-offset-2 hover:text-[#ED5353] duration-300'>Sign Up</button>
                    </div>
                </div>
            </div>
            <div className='w-[40%] relative'>
                <span className='absolute z-20 text-white right-28 top-12 text-4xl font-dm'>Your Personal Job Finder</span>
                <img className='w-full h-screen' src={image1} alt="LandingPageImage" />
            </div>
            {redirectToHome && <Navigate to="/" />}
        </div>
    )
}

export default LoginPage
