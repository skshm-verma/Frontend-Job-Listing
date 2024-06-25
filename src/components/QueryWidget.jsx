import React from 'react'
import skills from "../data/skills";

const QueryWidget = ({ query, setQuery, handleFetchJobs }) => {
	const handleSkillChange = (skill) => {
		if (skill === "placeholder") {
			return;
		}
		if (!query.skills.includes(skill)) {
			setQuery({ ...query, skills: [...query.skills, skill] });
		}
	};

	const handleClearFilters = () => {
		setQuery({ title: "", skills: [] });
	};

	const handleQuerySkill = (index) => {
		setQuery(prevQuery => {
			const newSkills = [...prevQuery.skills];
			newSkills.splice(index, 1);
			return {
				...prevQuery,
				skills: newSkills
			};
		});
	};

	return (
		<div className='flex justify-center items-center relative'>
			<div className='w-[80%] h-fit py-12 px-5 shadow-xl shadow-[#f6c6c6] bg-white my-4 rounded-md'>
				<input
					type="text"
					placeholder="Type any job title"
					className='mx-auto block w-[80%] px-4 py-2 border-2 border-[#E3E3E3] rounded-sm outline-none focus:ring-1 focus:ring-[#ED5353] focus:border-none'
					value={query.title}
					onChange={(e) => setQuery({ ...query, title: e.target.value })}
				/>
				<div className='absolute ml-[7.5rem] my-4 px-5 py-1 rounded-md border-2 border-[#CECECE] text-[#9C9C9C]'>
					<select
						onChange={(e) => handleSkillChange(e.target.value)}
						className='outline-none cursor-pointer text-lg'>
						<option value="placeholder">Skill</option>
						{skills.map((skill, index) => (
							<option
								key={index}
								value={skill}>
								{skill}
							</option>
						))}
					</select>
				</div>
				<div className='inline-block ml-[19rem] mt-1 h-fit w-[65%] py-4'>
					{query.skills && query.skills.map((skill, index) => {
						return <div
							key={index}
							className='relative inline-block mx-2 mb-2 pr-7 pl-3 py-1 rounded-md border-2 border-[#ED5353] text-sm font-semibold bg-[#FFEEEE]'>
							{skill}
							<span className='px-1'></span>
							<span
							onClick={() => {handleQuerySkill(index)}} 
							className='bg-[#ED5353] absolute top-0 right-0 px-2 h-full text-lg text-white font-normal flex items-center cursor-pointer'>X</span>
						</div>
					})}
				</div>
				<div className='flex justify-end duration-1000'>
					<button
						onClick={() => {
							handleFetchJobs();
						}}
						className='px-4 py-1 shadow-md rounded-md border bg-[#ED5353] hover:bg-[#FF6B6B] text-white text-lg duration-300'>Apply Filter</button>
					<button
						onClick={() => handleClearFilters()}
						className='mx-4 px-10 py-1 shadow-md  text-[#FF6B6B] text-lg'>Clear</button>
				</div>
			</div>
		</div>
	);
}

export default QueryWidget
