import React, { useState } from 'react'
import { Register, Login } from '../api/User';
import { Navigate, useNavigate } from 'react-router-dom';
import image1 from '../assets/imageRegister.png'

const RegisterPage = ({ setCurrentUser }) => {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [password, setPassword] = useState('');
    const [checkbox, setCheckbox] = useState(false);
    const [errors, setErrors] = useState({});
    const [showLogInRedirect, setShowLogInRedirect] = useState(false);

    const validate = () => {
        const errors = {};

        if (!name) errors.name = "Name is required";
        if (!email) errors.email = "Email is required";
        if (!mobile) errors.mobile = "Mobile number is required";
        if (!password) errors.password = "Password is required";
        if (!checkbox) errors.checkbox = "You must agree to the terms";

        return errors;
    };

    const handleRegister = async () => {
        const errors = validate();
        if (Object.keys(errors).length > 0) {
            setErrors(errors);
            return;
        }

        const response = await Register(name, email, mobile, password);
        if (response.status === 201) {
            const loginResponse = await Login(email, password);
            console.log("LoginResponse In RegisterPage: ", loginResponse)
            if (loginResponse.status === 200) {
                setCurrentUser(true);
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
                        {errors.name && <div className='text-sm mx-2 my-1 text-[#ED5353]'>{errors.name}</div>}
                    </div>
                    <div className='inline-block border-[#C2C2C2] pb-2'>
                        <input
                            type="email"
                            placeholder='Email'
                            value={email}
                            onInput={(e) => setEmail(e.target.value)}
                            className='border mx-1 py-2 px-4 rounded-md w-[22rem] focus:outline-none focus:ring-1 focus:ring-[#ED5353]'
                        />
                        {errors.email && <div className='text-sm mx-2 my-1 text-[#ED5353]'>{errors.email}</div>}
                    </div>
                    <div className='inline-block border-[#C2C2C2] pb-2'>
                        <input
                            type="tel"
                            placeholder='Mobile'
                            value={mobile}
                            onInput={(e) => setMobile(e.target.value)}
                            className='border mx-1 py-2 px-4 rounded-md w-[22rem] focus:outline-none focus:ring-1 focus:ring-[#ED5353]'
                        />
                        {errors.mobile && <div className='text-sm mx-2 my-1 text-[#ED5353]'>{errors.mobile}</div>}
                    </div>
                    <div className='inline-block border-[#C2C2C2] pb-1'>
                        <form>
                            <input
                                type="password"
                                placeholder='Password'
                                value={password}
                                onInput={(e) => setPassword(e.target.value)}
                                className='border mx-1 py-2 px-4 rounded-md w-[22rem] focus:outline-none focus:ring-1 focus:ring-[#ED5353]'
                            />
                            {errors.password && <div className='text-sm mx-2 my-1 text-[#ED5353]'>{errors.password}</div>}
                        </form>
                    </div>
                    <div className='mx-2 pb-2'>
                        <div className='flex justify-center items-center'>
                        <input type="checkbox" name='terms&conditions' value={checkbox} onClick={() => setCheckbox(true)}/>
                        <label htmlFor="terms&conditions" className='tracking-tight px-2 text-sm text-[#525252]'>By creating an account, I agree to our terms of use and privacy policy</label>
                        </div>
                        {errors.checkbox && <div className='text-sm my-1 text-[#ED5353]'>{errors.checkbox}</div>}
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
