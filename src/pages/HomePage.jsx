import { useEffect, useState } from "react";
import { fetchJobs } from "../api/Job";

const HomePage = () =>{

	const [jobs, setJobs] = useState([]);
	const altJobIcon = "https://static.thenounproject.com/png/2343509-200.png";

	useEffect(() => {
		handleFetchJobs();
	}, []);

	const handleFetchJobs = async () => {
		const response = await fetchJobs();
    console.log("Home Page Response: ",response)
		if (response.status == 200) {
			setJobs(response.data.jobs);
		}
	};

	useEffect(() => {
		console.log(jobs);
	}, [jobs]);

	return (
		<div>
			Homepage
			{jobs.map((job, index) => (
				<div key={index}>
					<h3>{job.companyName}</h3>
					<h4>{job.jobType}</h4>
					<img src={job.logoUrl} alt={altJobIcon} />
				</div>
			))}
		</div>
	);
}

export default HomePage
