import React, { useEffect } from 'react';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Toaster, toast } from 'react-hot-toast';
import { editJob, fetchJobById } from '../api/Job';
import CreateJobWallpaper from '../assets/jobWallpaper.png';
import ChipsSelection from '../components/ChipsSelection';

const EditJobPage = () => {

    const navigate = useNavigate();
    const validJobTypes = ["Full-Time", "Part-Time", "Internship"];
    const validLocationTypes = ["On-Site", "Remote", "Hybrid"];
    const jobId = window.location.pathname.split("/").pop();
    const UserId = localStorage.getItem('user');

    useEffect(() => {
        fetchJob();
    }, []);

    const [job, setJob] = useState({});

    const handleJobTypeChange = (value) => {
        if (validJobTypes.includes(value)) {
            setJob({ ...job, jobType: value });
        }
    };

    const handleLocationTypeChange = (value) => {
        if (validLocationTypes.includes(value)) {
            setJob({ ...job, locationType: value });
        }
    };

    const handleJobCreate = async (event) => {
        event.preventDefault();
        console.log("Whole Job: ", job);
        if (UserId == job.refUserId) {
            const response = await editJob(job);
            if (response.status === 200) {
                toast.success('Job added successfully');
                setJob({
                    companyName: "",
                    title: "",
                    description: "",
                    logoUrl: "",
                    jobType: "",
                    salary: "",
                    location: "",
                    duration: "Permanent",
                    locationType: "",
                    information: "",
                    skills: [],
                    additionalInformation: ""
                });
            }
        } else {
            if (UserId == job.refUserId) {
                toast.error('Error adding job');
            }
            toast.error('You are not authorized');
        }
    };

    const fetchJob = async () => {
        try {
            const response = await fetchJobById(jobId);
            if (response.status == 200) {
                setJob(response.data.job);
            }
        } catch (error) {
            return response.status;
        }
    };

    return (
        <div className='flex items-center'>
            <Toaster position="top-center" reverseOrder={false} />
            <div className='w-[60%] px-16 flex flex-col justify-start'>
                <h3 className='text-3xl text-black font-semibold tracking-wide mb-6'>Add job description</h3>

                <form onSubmit={handleJobCreate}>
                    <div className='my-2 flex justify-start items-center'>
                        <label className='px-3 py-1 mr-4 text-base font-semibold tracking-wide font-dm w-1/4'>Company Name</label>
                        <input
                            type="text"
                            placeholder='Enter your company name here'
                            value={job.companyName}
                            className='border border-[#C2C2C2] outline-none rounded-md w-[65%] px-4 py-1 placeholder:text-[#ADADAD] placeholder:text-xs font-dm text-black text-sm'
                            onChange={(e) => setJob({ ...job, companyName: e.target.value })}
                        />
                    </div>

                    <div className='my-2 flex justify-start items-center'>
                        <label className='px-3 py-1 text-base font-semibold tracking-wide mr-4 font-dm w-1/4'>Add logo URL</label>
                        <input
                            type="text"
                            value={job.logoUrl}
                            placeholder='Enter the link'
                            className='border border-[#C2C2C2] outline-none rounded-md w-[65%] px-4 py-1 placeholder:text-[#ADADAD] placeholder:text-xs font-dm text-black text-sm'
                            onChange={(e) => setJob({ ...job, logoUrl: e.target.value })}
                        />
                    </div>

                    <div className='my-2 flex justify-start items-center'>
                        <label className='px-3 py-1 mr-4 text-base font-semibold tracking-wide font-dm w-1/4'>Job position</label>
                        <input
                            type="text"
                            value={job.title}
                            placeholder='Enter job position'
                            className='border border-[#C2C2C2] outline-none rounded-md w-[65%] px-4 py-1 placeholder:text-[#ADADAD] placeholder:text-xs font-dm text-black text-sm'
                            onChange={(e) => setJob({ ...job, title: e.target.value })}
                        />
                    </div>

                    <div className='my-2 flex justify-start items-center'>
                        <label className='px-3 py-1 mr-4 text-base font-semibold tracking-wide font-dm w-1/4'>Monthly salary</label>
                        <input
                            type="number"
                            value={job.salary}
                            placeholder='Enter Amount in rupees'
                            className='border border-[#C2C2C2] outline-none rounded-md w-[65%] px-4 py-1 placeholder:text-[#ADADAD] placeholder:text-xs font-dm text-black text-sm'
                            onChange={(e) => setJob({ ...job, salary: e.target.value })}
                        />
                    </div>

                    <div className='my-2 flex justify-start items-center'>
                        <label className='px-3 py-1 mr-4 text-base font-semibold tracking-wide font-dm w-1/4'>Job Type</label>
                        <div className='relative w-[15%] '>
                            <select
                                value={job.jobType}
                                className='w-full outline-none cursor-pointer text-sm px-2 py-1 rounded-md border border-[#CECECE] text-[#9C9C9C]'
                                onChange={(e) => handleJobTypeChange(e.target.value)}
                            >
                                <option>Select</option>
                                {validJobTypes.map((type, index) => {
                                    return <option key={index}>{type}</option>;
                                })}
                            </select>
                        </div>
                    </div>

                    <div className='my-2 flex justify-start items-center'>
                        <label className='px-3 py-1 mr-4 text-base font-semibold tracking-wide font-dm w-1/4'>Remote/office</label>
                        <div className='relative w-[15%]'>
                            <select
                                value={job.locationType}
                                className='w-full px-2 py-1 rounded-md border border-[#CECECE] text-[#9C9C9C] outline-none cursor-pointer text-sm'
                                onChange={(e) => handleLocationTypeChange(e.target.value)}
                            >
                                <option>Select</option>
                                {validLocationTypes.map((type, index) => {
                                    return <option key={index}>{type}</option>;
                                })}
                            </select>
                        </div>
                    </div>

                    <div className='my-2 flex justify-start items-center'>
                        <label className='px-3 py-1 mr-4 text-base font-semibold tracking-wide font-dm w-1/4'>Location</label>
                        <input
                            type="text"
                            value={job.location}
                            placeholder='Enter Location'
                            className='border border-[#C2C2C2] outline-none rounded-md w-[65%] px-4 py-1 placeholder:text-[#ADADAD] placeholder:text-xs font-dm text-black text-sm'
                            onChange={(e) => setJob({ ...job, location: e.target.value })}
                        />
                    </div>


                    <div className='my-2 flex justify-start items-center'>
                        <label className='px-3 py-1 mr-4 text-base font-semibold tracking-widefont-dm w-1/4'>Job Description</label>
                        <textarea
                            type="text"
                            value={job.description}
                            placeholder='Type the job description'
                            className='border border-[#C2C2C2] outline-none rounded-md w-[65%] h-20 px-4 py-1 placeholder:text-[#ADADAD] placeholder:text-xs font-dm text-black resize-none text-sm'
                            onChange={(e) => setJob({ ...job, description: e.target.value })}
                        />
                    </div>

                    <div className='my-2 flex justify-start items-center'>
                        <label className='px-3 py-1 mr-4 text-base font-semibold tracking-wide font-dm w-1/4'>About Company</label>
                        <textarea
                            type="text"
                            value={job.information}
                            placeholder='Type about your company'
                            className='border border-[#C2C2C2] outline-none rounded-md w-[65%] h-12 px-4 py-1 placeholder:text-[#ADADAD] placeholder:text-xs font-dm text-black resize-none text-sm'
                            onChange={(e) => setJob({ ...job, information: e.target.value })}
                        />
                    </div>

                    <ChipsSelection selectedSkills={job.skills} setSelectedSkills={(skills) => setJob({ ...job, skills })} />

                    <div className='mt-6 mb-2 flex justify-start items-center'>
                        <label className='px-3 py-1 mr-4 text-base font-semibold tracking-wide font-dm w-1/4'>Information</label>
                        <input
                            type="text"
                            value={job.additionalInformation}
                            placeholder='Enter the additional information'
                            className='border border-[#C2C2C2] outline-none rounded-md w-[65%] px-4 py-1 placeholder:text-[#ADADAD] placeholder:text-xs font-dm text-black text-sm'
                            onChange={(e) => setJob({ ...job, additionalInformation: e.target.value })}
                        />
                    </div>

                    <div className='flex justify-end mt-3 px-12'>
                        <button
                            onClick={() => { navigate('/') }}
                            className='mr-3 px-11 py-1 text-[#C2C2C2] text-base border border-[#CECECE] hover:bg-[#595959] hover:text-white hover:duration-300 rounded-md'>Back</button>
                        <button
                            type='submit'
                            className='mr-4 px-4 py-1 shadow-md rounded-md border bg-[#ED5353] hover:bg-[#FF6B6B] text-white text-base hover:duration-300'>Update Job</button>
                    </div>

                </form>
            </div >
            <div className='relative w-[40%] h-screen'>
                <h2 className='absolute z-20 text-white right-14 top-12 text-4xl font-dm'>Recruiter update job details here</h2>
                <img className='w-full h-full' src={CreateJobWallpaper} alt="wallpaper" />
            </div>
        </div >
    );
}

export default EditJobPage