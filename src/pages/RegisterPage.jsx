import React, { useState } from 'react'
import { Register } from '../api/User';
import { Navigate} from 'react-router-dom';

const RegisterPage = () => {
    const [name,setName] = useState();
    const [email, setEmail] = useState();
    const [mobile, setMobile] = useState();
    const [password, setPassword] = useState();
    const [showLogInRedirect, setShowlogInRedirect] = useState(false);

    const handleRegister = async () => {
        const response = await Register(name, email, mobile, password);
        if(response.status === 201){
            localStorage.setItem("email", email);
			localStorage.setItem("password", password);
            setShowlogInRedirect(true);
        }
    }

    return (
        <div>
            <h1 className='text-center'>Register Page</h1>
            <div className='my-3 flex flex-col justify-center items-center gap-2'>
            <div className='inline-block mx-1'>
                    <span>Name</span>
                    <input
                        type="text"
                        placeholder='eg. John Doe'
                        value={name}
                        onInput={(e) => setName(e.target.value)}
                        className='border mx-1 p-2 rounded-md'
                    />
                </div>
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
                    <span>Mobile</span>
                    <input
                        type="tel"
                        placeholder='eg. 999990000'
                        value={mobile}
                        onInput={(e) => setMobile(e.target.value)}
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
                    onClick={handleRegister}
                    className='block'
                >Log In</button>
            </div>
            {showLogInRedirect && <Navigate to='/login'/>}
        </div>
    )
}

export default RegisterPage
