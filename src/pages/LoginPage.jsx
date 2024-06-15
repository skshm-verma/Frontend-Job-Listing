import React from 'react'
import { useState, useEffect } from 'react'
import { Login } from '../api/User'
import { Navigate } from "react-router-dom";

const LoginPage = () => {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [redirectToHome, setRedirectToHome] = useState(false);

    useEffect(() => {
        const storedEmail = localStorage.getItem("email");
        const storedPassword = localStorage.getItem("password");
        console.log("Email: ", storedEmail, " Password: ", storedPassword);
        if (storedEmail) {
            setEmail(storedEmail);
        }
        if (storedPassword) {
            setPassword(storedPassword);
        }
    }, []);

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
        <div>
            <h1 className='text-center'>Login Page</h1>
            <div className='my-3 flex flex-col justify-center items-center gap-2'>
                <div className='inline-block mx-1'>
                    <span>Email</span>
                    <input
                        type="email"
                        placeholder='eg. JohnDoe@gmail.com'
                        value={email}
                        onInput={(e) => setEmail(e.target.value)}
                        className='border mx-1 p-2 rounded-md'
                    />
                </div>
                <div className='inline-block mx-1'>
                    <span>Password</span>
                    <input
                        type="password"
                        placeholder='eg. qwerty'
                        value={password}
                        onInput={(e) => setPassword(e.target.value)}
                        className='border mx-1 p-2 rounded-md'
                    />
                </div>
                <button
                    onClick={handleLogin}
                    className='block'
                >Log In</button>
            </div>
            {redirectToHome && <Navigate to="/" />}
        </div>
    )
}

export default LoginPage
