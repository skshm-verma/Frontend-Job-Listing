import { useEffect, useState } from "react";
import { fetchJobs, fetchJobsByQuery } from "../api/Job";
import Header from '../components/Header';
import QueryWidget from '../components/QueryWidget'

const HomePage = () => {

	const [jobs, setJobs] = useState([]);
	const altJobIcon = "https://static.thenounproject.com/png/2343509-200.png";

	useEffect(() => {
		handleFetchJobs();
	}, []);

	// const handleFetchJobs = async () => {
	// 	const response = await fetchJobs();
	// 	console.log("Home Page Response: ", response)
	// 	if (response.status == 200) {
	// 		setJobs(response.data.jobs);
	// 	}
	// };
	const handleFetchJobs = async () => {
		const query = {
			minSalary: 0,
			maxSalary: 100000000,
		};
		const response = await fetchJobsByQuery(query);

		if (response.status == 200) {
			setJobs(response.data.jobs);
		}
	};

	useEffect(() => {
		console.log(jobs);
	}, [jobs]);

	return (
		<div className="h-screen bg-[#fce1e1]">
			<Header />
			<QueryWidget />
			<div className="my-8">
			{jobs.map((job, index) => (
				<div key={index}>
					<h3>{job.companyName}</h3>
					<h4>{job.jobType}</h4>
					<img src={job.logoUrl} alt={altJobIcon} />
				</div>
			))}
			</div>
		</div>
	);
}

export default HomePage
