import React from 'react'
import { useNavigate } from "react-router-dom";

const JobCard = ({ job }) => {
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

	console.log("Job in Job Card: ", job);
	return (
		<div className='flex justify-center my-4'>
			<div className='relative w-[80%] h-40 flex bg-white rounded-lg shadow-md shadow-[#f6c6c6]'>
				<div className='absolute bg-[#FF0000] rounded-s-lg w-2 h-full left-0'></div>
				<div className='pt-6 px-6'>
					<img className='h-16 w-16 rounded-md shadow-lg' src={logoUrl} alt={altJobIcon} />
				</div>
				<div className='flex w-[400px] flex-col justify-center items-start pb-4'>
					<div className='pb-3'>
						{title}
					</div>
					<div className='pb-3'>
						<span className='pr-4'>
							{duration}
						</span>
						<span className='pr-4'>
							{salary}
						</span>
						<span className='pr-4'>
							{location}
						</span>
					</div>
					<div className='pb-3'>
						<span className='pr-4'>
							{locationType}
						</span>
						<span className='pr-4'>
							{jobType}
						</span>
					</div>
				</div>
				<div className='flex w-[650px]  px-3 flex-col justify-center items-end'>
					<div className='flex gap-2 flex-wrap ml-32'>
						{skills.map((skill, index) => {
							return <div 
							className='bg-[#FFEEEE] px-3 py-1 rounded-md'
							key={index}>{skill}</div>;
						})}
					</div>
					<div className='mt-3 mx-2'>
					<button
						className='px-4 py-1 shadow-md rounded-md border bg-[#ED5353] hover:bg-[#FF6B6B] text-white text-lg duration-300'
						onClick={() => {
							navigate(`/job/${_id}`);
						}}
					>
						View Details
					</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default JobCard
