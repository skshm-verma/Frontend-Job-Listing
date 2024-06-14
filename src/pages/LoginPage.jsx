import React from 'react'
import { useState } from 'react'
import { Login } from '../api/User'

const LoginPage = () => {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const handleLogin = async () => {
        const response = await Login(email, password);
        console.log("Response In Auth: ", response);
    }

    return (
        <div>
            <h1 className='text-center'>Login Page</h1>
            <div className='my-3 flex flex-col justify-center items-center gap-2'>
                <div className='inline-block mx-1'>
                    <span>Email</span>
                    <input
                        type="email"
                        placeholder='eg. JohnDoe@gmail.com'
                        onInput={(e) => setEmail(e.target.value)}
                        className='border mx-1 p-2 rounded-md'
                    />
                </div>
                <div className='inline-block mx-1'>
                    <span>Password</span>
                    <input
                        type="password"
                        placeholder='eg. qwerty'
                        onInput={(e) => setPassword(e.target.value)}
                        className='border mx-1 p-2 rounded-md'
                    />
                </div>
                <button
                    onClick={handleLogin}
                    className='block'
                >Log In</button>
            </div>
        </div>
    )
}

export default LoginPage
