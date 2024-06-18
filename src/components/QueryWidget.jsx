import React from 'react'
import { useState } from "react";
import skills from "../data/skills";


const QueryWidget = () => {
	const [title, setTitle] = useState();
	const [selectedSkills, setSelectedSkills] = useState([]);
	return (
		<div className='flex justify-center items-center'>
			<div className='w-[80%] h-fit py-12 px-5 shadow-xl shadow-[#f6c6c6] bg-white my-4 rounded-md'>
				<input
					type="text"
					placeholder="Type any job title"
					className='mx-auto block w-[80%] px-4 py-2 border-2 border-[#E3E3E3] rounded-sm outline-none focus:ring-1 focus:ring-[#ED5353] focus:border-none'
					value={title}
					onChange={(e) => setTitle(e.target.value)}
				/>
				<div className='inline-block ml-32 my-4'>
					<select className='outline-none cursor-pointer'>
						{skills.map((skill, index) => (
							<option key={index} value={skill}>
								{skill}
							</option>
						))}
					</select>
				</div>
				<div className='inline-block mx-4 mt-4 h-fit w-[50%] py-4 bg-slate-300'>
                          hy
				</div>
				<div className='inline-flex mx-8'>
					<button className='px-4 py-1 shadow-md rounded-md border bg-[#ED5353] hover:bg-[#FF6B6B] text-white text-lg duration-300'>Apply Filter</button>
					<button className='mx-4 px-10 py-1 shadow-md  text-[#FF6B6B] text-lg'>Clear</button>
				</div>
			</div>
		</div>
	);
}

export default QueryWidget
