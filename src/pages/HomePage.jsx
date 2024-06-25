import { useEffect, useState } from "react";
import { fetchJobs, fetchJobsByQuery } from "../api/Job";
import JobCard from "../components/JobCard";
import Header from '../components/Header';
import QueryWidget from '../components/QueryWidget'

const HomePage = ({ currentUser, setCurrentUser }) => {

	const [jobs, setJobs] = useState([]);
	const [query, setQuery] = useState({
		title: "",
		skills: [],
		minSalary: '',
		maxSalary: ''
	});

	useEffect(() => {
		handleFetchJobs();
	}, []);
    
	//If you want to use fetchJobs() function in Job.js
	// const handleFetchJobs = async () => {
	// 	const response = await fetchJobs();
	// 	console.log("Home Page Response: ", response)
	// 	if (response.status == 200) {
	// 		setJobs(response.data.jobs);
	// 	}
	// };

	const handleFetchJobs = async () => {
		const response = await fetchJobsByQuery(query);
		if (response.status == 200) {
			setJobs(response.data.jobs);
		}
	};

	return (
		<div className="bg-[#fce1e1] min-h-screen">
			<Header currentUser={currentUser} setCurrentUser={setCurrentUser} />
			<QueryWidget
				query={query}
				setQuery={setQuery}
				handleFetchJobs={handleFetchJobs} />
			<div className="py-8">
				{jobs.map((job, index) => (
					<JobCard currentUser={currentUser} job={job} key={index} />
				))}
			</div>
		</div>
	);
}

export default HomePage
