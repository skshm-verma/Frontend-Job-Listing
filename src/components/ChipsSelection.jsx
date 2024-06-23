import React from 'react';
import DefinedSkills from '../data/skills';
import { useEffect, useState } from 'react';

const ChipsSelection = ({ selectedSkills, setSelectedSkills }) => {
	const [currentSkill, setCurrentSkill] = useState("");
	const defaultSkills = DefinedSkills;
    //  ["Frontend", "Backend", "CSS", "JavaScript", "React", "Node.js", "Express", "MongoDB", "REST APIs"];
	const handleAddSkill = (skill) => {
		// e.preventDefault();
		setCurrentSkill(skill);
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

	// useEffect(() => {
	// 	// console.log(currentSkill);
	// 	// console.log(selectedSkills);
	// 	// console.log(suggestSkills());
	// }, [selectedSkills, currentSkill]);

	return (
		<div className='flex flex-col justify-start'>
			<div className='my-2 flex justify-start items-center relative'>
				<label className='px-3 py-1 mr-4 text-base font-semibold tracking-wide font-dm w-1/4'>Skills Required</label>
				<div className='absolute top-0 left-[55%] flex flex-wrap text-[#ED5353]'>
					{suggestSkills().map((skill, index) => (
						<div
							className='text-xs'
							key={index}
							onClick={() => handleAddSkill(skill)}>
							<div className='mx-1 mt-1 px-2 py-1 bg-transparent shadow-lg cursor-pointer hover:bg-[#FFEEEE] hover:border hover:border-[#ED5353] hover:-translate-y-1 hover:animate-bounce hover:duration-500'>{skill}</div>
						</div>
					))}
				</div>

				<input
					type="text"
					value={currentSkill}
					placeholder='Enter the must have skills'
					onChange={(e) => handleAddSkill(e.target.value)}
					onKeyDown={handleOnKeyDown}
					className='border border-[#C2C2C2] outline-none rounded-md w-1/4 px-4 py-1 placeholder:text-[#ADADAD] placeholder:text-xs font-dm text-black text-sm'
				/>
			</div>
			<div className="w-[65%] ml-52 px-1 flex flex-wrap gap-2">
				{selectedSkills?.map((skill, index) => {
					return (
						<div key={index} className="flex gap-1 items-center justify-start bg-[#FFEEEE] rounded-md text-xs">
							<span className='px-2 py-1'>{skill}</span>
							<span
								className="flex justify-center items-center cursor-pointer bg-[#FF6B6B] text-white px-2 py-1 rounded-r-md"
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
