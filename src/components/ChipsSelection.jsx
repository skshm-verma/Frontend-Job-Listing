import React from 'react';
import DefinedSkills from '../data/skills';
import { useState, useRef } from 'react';

const ChipsSelection = ({ selectedSkills, setSelectedSkills }) => {
	const [currentSkill, setCurrentSkill] = useState("");
	const defaultSkills = DefinedSkills;
	const inputRef = useRef(null);

	const handleAddSkill = (skill) => {
		setCurrentSkill(skill);
		if (inputRef.current) {
			inputRef.current.focus();
		}
	};

	const handleOnKeyDown = (e) => {
		if (e.key == "Enter") {
			e.preventDefault();
			if (selectedSkills.includes(currentSkill.trim())) {
				return;
			}
			setSelectedSkills([...selectedSkills, currentSkill.trim()]);
			setCurrentSkill("");
		}
	};

	const suggestSkills = () => {
		if (!currentSkill) {
			return [];
		}
		return defaultSkills.filter((skill) => {
			return skill.toLowerCase().includes(currentSkill.toLowerCase());
		});
	};

	return (
		<div className='flex flex-col justify-start'>
			<div className='my-2 flex justify-start items-center relative'>
				<label className='px-3 py-1 md:mr-4 mr-2 md:text-base text-sm font-semibold tracking-wide font-dm w-1/4'>Skills Required</label>
				<div className='absolute md:top-0 md:-translate-y-0 -translate-y-14 md:left-[55%] left-20 flex flex-wrap text-[#ED5353]'>
					{suggestSkills().map((skill, index) => (
						<div
							className='text-xs'
							key={index}
							onClick={() => handleAddSkill(skill)}>
							<div className='mx-1 mt-1 px-2 py-1 md:bg-transparent bg-[#FFEEEE] shadow-lg cursor-pointer md:hover:bg-[#FFEEEE] hover:bg-[#ED5353] hover:border hover:border-[#ED5353] hover:-translate-y-1 hover:animate-bounce hover:duration-500 md:hover:text-[#ED5353] hover:text-[white]'>{skill}</div>
						</div>
					))}
				</div>

				<input
					type="text"
					value={currentSkill}
					placeholder='Enter the must have skills'
					ref={inputRef}
					onChange={(e) => handleAddSkill(e.target.value)}
					onKeyDown={handleOnKeyDown}
					className='border border-[#C2C2C2] outline-none rounded-md md:w-1/4 px-4 py-1 placeholder:text-[#ADADAD] placeholder:text-xs font-dm text-black text-sm'
				/>
			</div>
			<div className="md:w-[65%] md:ml-52 px-1 flex flex-wrap gap-2">
				{selectedSkills?.map((skill, index) => {
					return (
						<div key={index} className="flex gap-1 items-center justify-start md:bg-[#FFEEEE] bg-[#FF6B6B] rounded-md text-xs">
							<span className='px-2 py-1'>{skill}</span>
							<span
								className="flex justify-center items-center cursor-pointer md:bg-[#FF6B6B] bg-[#ED5353] text-white px-2 py-1 rounded-r-md"
								onClick={() => {
									setSelectedSkills(selectedSkills.filter((s) => s !== skill));
								}}
							>
								x
							</span>
						</div>
					);
				})}

			</div>
		</div>
	);
}

export default ChipsSelection
