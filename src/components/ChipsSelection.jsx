import React from 'react'

const ChipsSelection = () => {
    const [currentSkill, setCurrentSkill] = useState();
	const [skills, setSkills] = useState([]);

	const handleAddSkill = (skill) => {
		setCurrentSkill(skill);
	};

	return (
		<div>
			<label>Skills Required: </label>
			<input
				type="text"
				value={currentSkill}
				onChange={(e) => setCurrentSkill(e.target.value)}
			/>
		</div>
	);
}

export default ChipsSelection
