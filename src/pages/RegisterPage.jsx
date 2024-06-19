import React, { useState } from 'react'
import { Register, Login } from '../api/User';
import { Navigate, useNavigate } from 'react-router-dom';
import image1 from '../assets/imageRegister.png'

const RegisterPage = () => {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [password, setPassword] = useState('');
    const [showLogInRedirect, setShowLogInRedirect] = useState(false);

    const handleRegister = async () => {
        const response = await Register(name, email, mobile, password);
        if (response.status === 201) {
            const loginResponse = await Login(email, password);
            console.log("LoginResponse In RegisterPage: ", loginResponse)
            if (loginResponse.status === 200) {
                const { data } = loginResponse;
                const { token } = data;
                localStorage.setItem("token", token);
                setShowLogInRedirect(true);
            }
        }
    }

    return (
        <div className='flex'>
            <div className='w-[60%] flex justify-center items-center'>
                <div className='flex flex-col items-start gap-2'>
                    <h1 className='tracking-wide text-black font-dm font-semibold text-5xl py-1'>Create an account</h1>
                    <h2 className='tracking-tight text-[#525252] text-2xl pb-8'>Your personal job finder is here</h2>
                    <div className='inline-block border-[#C2C2C2] pb-2'>
                        <input
                            type="text"
                            placeholder='Name'
                            value={name}
                            onInput={(e) => setName(e.target.value)}
                            className='border mx-1 py-2 px-4 rounded-md w-[22rem] focus:outline-none focus:ring-1 focus:ring-[#ED5353]'
                        />
                    </div>
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
                            type="tel"
                            placeholder='Mobile'
                            value={mobile}
                            onInput={(e) => setMobile(e.target.value)}
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
                    <div className='mx-2 flex justify-center items-center pb-2'>
                        <input type="checkbox" name='terms&conditions' />
                        <label htmlFor="terms&conditions" className='tracking-tight px-2 text-sm text-[#525252]'>By creating an account, I agree to our terms of use and privacy policy</label>
                    </div>
                    <button
                        onClick={handleRegister}
                        className='mb-2 block tracking-wider bg-[#ED5353] font-dm font-xl text-white mx-2 py-2 px-5 rounded-md hover:bg-[#f66565] duration-200'
                    >Create Account
                    </button>
                    <div className='mx-2'>
                        <span className='tracking-tight text-[#525252]'>Already have an account?</span>
                        < button
                            onClick={() => { navigate("/login") }}
                            className='px-2 font-semibold underline underline-offset-2 hover:text-[#ED5353] duration-300'>Sign In</button>
                    </div>
                </div>
            </div>
            <div className='w-[40%] relative'>
                <span className='absolute z-20 text-white right-28 top-12 text-4xl font-dm'>Your Personal Job Finder</span>
                <img className='w-full h-screen' src={image1} alt="" />
            </div>
            {showLogInRedirect && <Navigate to='/' />}
        </div>
    )
}

export default RegisterPage
