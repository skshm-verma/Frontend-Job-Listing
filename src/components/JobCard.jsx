import React, { useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import Flag from '../assets/IndiaFlag.png';
import Rupee from '../assets/rupeeIcon.png';
import Group from '../assets/groupIcon.png';

const JobCard = ({ job, currentUser }) => {
	const navigate = useNavigate();
	const {
		title,
		logoUrl,
		salary,
		location,
		duration,
		locationType,
		jobType,
		skills,
		_id,
	} = job;
	const altJobIcon = "https://static.thenounproject.com/png/2343509-200.png";


	return (
		<div className='flex justify-center my-4'>
			<div className='relative w-[80%] h-fit md:pt-6 pt-2 pb-2 flex md:flex-row flex-col bg-white rounded-lg shadow-md shadow-[#f6c6c6] group'>
				<div className='absolute bg-[#FF0000] rounded-s-lg w-1 h-full md:-translate-y-6 -translate-y-2 left-0 group-hover:visible invisible transition-all duration-75'></div>
				<div className='flex'>
					<div className='md:pt-6 md:p-2 md:px-6 px-8 py-5'>
						<img className='md:h-16 md:w-16 h-16 w-32 rounded-md shadow-lg' src={logoUrl} alt={altJobIcon} />
					</div>
					<div className='flex w-[400px] flex-col justify-center items-start md:pb-4 md:mx-0 ml-1 md:text-base text-sm'>
						<div className='pb-3 text-[#9C9C9C]'>
							{title}
						</div>
						<div className='md:w-fit w-[80%] pb-3 flex md:flex-nowrap flex-wrap md:gap-3 gap-1 items-center md:justify-center text-[#9C9C9C]'>
							<span className='flex items-center justify-center gap-1'>
								<img className='w-4 h-3' src={Group} alt="GroupIcon" />{duration}
							</span>
							<span className='flex items-center justify-center gap-1'>
								<img className='w-3 h-3' src={Rupee} alt="IndianRupeeIcon" />
								{salary}
							</span>
							<span className='flex justify-center items-center gap-1'>
								<img className='w-5 h-5' src={Flag} alt="IndianFlag" />{location}
							</span>
						</div>
						<div className='pb-3'>
							<span className='pr-4 text-[#ED5353]'>
								{locationType}
							</span>
							<span className='pr-4 text-[#ED5353]'>
								{jobType}
							</span>
						</div>
					</div>
				</div>
				<div className='flex md:w-[650px] w-[90%] md:px-3 px-2 mx-auto flex-col justify-center items-end'>
					<div className='flex gap-2 flex-wrap md:ml-32'>
						{skills.map((skill, index) => {
							return <div
								className='bg-[#FFEEEE] px-3 py-1 rounded-md md:text-base text-sm'
								key={index}>{skill}</div>;
						})}
					</div>
					<div className='mt-3 mx-2'>
						{currentUser ?
							<div className='flex gap-2'>
								<button
									className='md:px-4 px-2 py-1 shadow-md rounded-md border border-[#ED5353] text-[#ED5353] hover:bg-[#FF6B6B] hover:text-white md:text-lg text-xs hover:duration-300'
									onClick={() => {
										navigate(`/edit/${_id}`);
									}}
								>
									Edit Details
								</button>
								<button
									className='md:px-4 px-2 py-1 shadow-md rounded-md border bg-[#ED5353] hover:bg-[#FF6B6B] text-white md:text-lg text-xs hover:duration-300'
									onClick={() => {
										navigate(`/job/${_id}`);
									}}
								>
									View Details
								</button>
							</div>
							: <button
								className='md:px-4 px-2 py-1 shadow-md rounded-md border bg-[#ED5353] hover:bg-[#FF6B6B] text-white md:text-lg text-xs hover:duration-300'
								onClick={() => {
									navigate(`/job/${_id}`);
								}}
							>
								View Details
							</button>}
					</div>
				</div>
			</div>
		</div>
	);
}

export default JobCard
