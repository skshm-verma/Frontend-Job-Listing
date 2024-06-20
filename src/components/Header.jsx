import React from 'react'
import { useNavigate } from "react-router-dom";
import UserAvatar from '../assets/Avatar.png';
import Rectangle1 from '../assets/Rectangle1.png';
import Rectangle2 from '../assets/Rectangle2.png';
import Rectangle3 from '../assets/Rectangle3.png';
import Rectangle4 from '../assets/Rectangle4.png';

const Header = ({ currentUser, setCurrentUser }) => {
	const navigate = useNavigate();
	return (
		<div>
			<div className='relative'>
				<img src={Rectangle1} alt="HeaderPng" />
				<span className='absolute tracking-wider font-dm text-4xl text-white left-20 top-10'>Jobfinder</span>
				<img className='absolute left-64 top-0' src={Rectangle3} alt="" />
				<img className='absolute right-24 top-0 h-[95%]' src={Rectangle4} alt="" />
			</div>
			{currentUser && (
				<div className='w-16 absolute top-6 right-60 flex items-center'>
					<button
						onClick={() => {
							setCurrentUser(false);
							localStorage.removeItem("token");
							navigate("/login");
						}}
						className='tracking-tight text-white text-2xl'>Logout</button>
					<span className='tracking-tight text-white text-2xl mx-4'>Hello!</span>
					<img className='' src={UserAvatar} alt="UserIcon" />
				</div>
			)}
			{!currentUser && (
				<div className='absolute top-10 text-white text-xl right-20'>
					<button
						onClick={() => {
							navigate("/login");
						}}
						className='mx-4 border-white bg-transparent outline-1 outline-white outline px-10 py-2 rounded-lg hover:bg-white hover:text-[#ED5353] text-center'
					>
						Login
					</button>
					<button
						onClick={() => {
							navigate("/register");
						}}
						className='mx-4 border-white bg-white outline-1 outline-white outline px-7 py-2 rounded-lg hover:bg-[#FF6B6B] text-[#ED5353] hover:text-white text-center'
					>
						Register
					</button>
				</div>
			)}
		</div>
	);
}

export default Header
