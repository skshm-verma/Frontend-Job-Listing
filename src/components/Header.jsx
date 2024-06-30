import React from 'react'
import { useNavigate } from "react-router-dom";
import UserAvatar from '../assets/Avatar.png';
import Rectangle1 from '../assets/Rectangle1.png';
import Rectangle3 from '../assets/Rectangle3.png';
import Rectangle4 from '../assets/Rectangle4.png';

const Header = ({ currentUser, setCurrentUser, back }) => {
	const navigate = useNavigate();

	return (
		<div>
			<div className='relative'>
				<img className='md:h-full h-12' src={Rectangle1} alt="HeaderPng" />
				<span className='absolute tracking-wider font-dm md:text-4xl text-xl text-white lg:left-20 md:left-10 left-8 lg:top-10 md:top-5 top-2'>Jobfinder</span>
				<img className='absolute lg:left-64 md:left-48 lg:h-20 md:h-14 top-0 md:block hidden' src={Rectangle3} alt="" />
				<img className='absolute right-24 top-0 h-[95%] md:block hidden' src={Rectangle4} alt="" />
			</div>
			{currentUser && (
				<div className={`absolute md:top-6 top-2 md:right-16 right-2 flex items-center`}>
					{back && <img
						onClick={() => { navigate("/") }}
						className='md:pr-4 pr-2 md:pt-1 pt-0.5 md:w-16 md:h-12 w-8 h-6 cursor-pointer' src="https://img.icons8.com/ios/50/FFFFFF/left--v1.png" alt="leftArrow" />}
					<button
					onClick={() => { navigate("/create")}} 
					className='tracking-tight text-white md:text-2xl text-xs'>Add Job</button>
					<button
						onClick={() => {
							setCurrentUser(false);
							localStorage.removeItem("token");
							navigate("/");
						}}
						className='md:mx-4 mx-2 md:mr-0 mr-2 tracking-tight text-white md:text-2xl text-xs'>Logout</button>
					<span className='tracking-tight text-white md:text-2xl text-xs mx-4 md:inline-block hidden'>Hello! Recruiter</span>
					<img className='md:w-16 w-8 md:mx-0 mx-0.5' src={UserAvatar} alt="UserIcon" />
				</div>
			)}
			{!currentUser && (
				<div className={`absolute lg:top-10 md:top-4 top-3 text-white md:text-xl text-xs flex items-center ${back ? `md:right-20 right-2` : `md:right-20 right-2`}`}>
					{back && <img
						onClick={() => { navigate("/") }}
						className='md:pr-4 pr-2 md:pt-1 pt-0.5 md:w-16 md:h-12 w-8 h-6 cursor-pointer' src="https://img.icons8.com/ios/50/FFFFFF/left--v1.png" alt="leftArrow" />}
					<button
						onClick={() => {
							navigate("/login");
						}}
						className='md:mx-4 mx-2 border-white bg-transparent outline-1 outline-white outline md:px-10 px-2 md:py-2 py-0.5 md:rounded-lg rounded hover:bg-white hover:text-[#ED5353] text-center'
					>
						Login
					</button>
					<button
						onClick={() => {
							navigate("/register");
						}}
						className='md:mx-4 mx-2 border-white bg-white outline-1 outline-white outline md:px-7 px-1 md:py-2 py-0.5 md:rounded-lg rounded hover:bg-[#FF6B6B] text-[#ED5353] hover:text-white text-center'
					>
						Register
					</button>
				</div>
			)}
		</div>
	);
}

export default Header
