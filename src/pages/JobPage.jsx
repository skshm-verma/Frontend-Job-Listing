import React from 'react';
import { useState, useEffect } from 'react';
import Header from '../components/Header';
import { fetchJobById } from '../api/Job';
import MoneyBill from '../assets/moneyBill.png'
import Duration from '../assets/duration.png'


const JobPage = ({ currentUser, setCurrentUser }) => {
  const [job, setJob] = useState();
  const jobID = window.location.pathname.split("/").pop();

  useEffect(() => {
    fetchJob();
  }, []);

  useEffect(() => {
    if (job) {
      timeElapsed(job.createdAt);
    }
  }, [job]);

  const timeElapsed = (createdAt) => {
    const currentTime = new Date();
    const createdAtTime = new Date(createdAt);
    const differenceInMillis = currentTime - createdAtTime;

    const seconds = Math.floor(differenceInMillis / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const weeks = Math.floor(days / 7);

    if (weeks > 0) {
      return weeks === 1 ? '1w ago' : `${weeks}w ago`;
    } else if (days > 0) {
      return days === 1 ? '1day ago' : `${days}days ago`;
    } else if (hours > 0) {
      return hours === 1 ? '1hr ago' : `${hours}hrs ago`;
    } else if (minutes > 0) {
      return minutes === 1 ? '1min ago' : `${minutes}min ago`;
    } else {
      return seconds === 1 ? '1sec ago' : `${seconds}sec ago`;
    }
  };


  const fetchJob = async () => {
    try {
      const response = await fetchJobById(jobID);
      if (response.status == 200) {
        setJob(response.data.job);
        console.log(response.data.job);
      }
    } catch (error) {
      console.log(error);
      return response.status;
    }
  };

  return (
    <div>
      <Header currentUser={currentUser} setCurrentUser={setCurrentUser} />

      {job && (
        <div className='flex flex-col justify-center items-center mb-16'>
          <div className='w-[80%] h-40 bg-white flex justify-center items-center rounded-sm -translate-y-8 shadow-lg'>
            <h1 className='tracking-wide text-4xl'>
              <span className='mx-1'>{job.title}</span>
              <span className=''>{job.locationType}/</span>
              <span className=''>{job.jobType}</span>
              <span className='mx-1'>At {job.companyName}</span>
            </h1>
          </div>
          <div className='flex flex-col bg-white shadow-lg rounded-sm w-[80%] h-fit px-24 py-16'>

            <div>
              <div className='flex items-center'>
                <p className='text-sm text-[#999999] mx-1'>{timeElapsed(job.createdAt)}</p>
                {/* <span className='text-5xl flex bg-blue-300 justify-center '>.</span> */}
                <p className='mx-2 text-[#999999] text-xl'>{job.jobType}</p>
                {currentUser && <img className='w-20 h-20 shadow-lg rounded-full ml-8' src={job.logoUrl} alt="job logo" />}
                {currentUser && <p className='mx-4 text-xl text-[#999999]'>{job.companyName}</p>}
              </div>

              <div className='my-4 flex'>
                <div className='w-[60%]'>
                  <h4 className='text-5xl'>{job.title}</h4>
                  <p className='text-2xl text-[#ED5353] mt-4 px-1'>{job.location}</p>
                </div>
                {currentUser &&
                  <div className='flex justify-end items-center w-[40%]'>
                    <button
                      className='mx-6 px-4 py-1 shadow-md rounded-md border bg-[#ED5353] hover:bg-[#FF6B6B] text-white text-lg hover:duration-300'
                    >Edit Job</button>
                  </div>}
              </div>

              <div className='my-4 px-1 flex'>
                <div className='flex flex-col'>
                  <div className='flex justify-start items-center'>
                    <img src={MoneyBill} alt="moneyBillImage" />
                    <p className='text-[#999999] text-sm tracking-wide px-2'>Stipend</p>
                  </div>
                  <h2 className='text-[#595959] font-semibold'>Rs {job.salary}/month</h2>
                </div>
                <div className='ml-5 flex flex-col justify-center'>
                  <div className='flex justify-start items-center pt-1'>
                    <img src={Duration} alt="durationImage" />
                    <p className='text-[#999999] text-sm tracking-wide px-2'>Duration</p>
                  </div>
                  <h2 className='text-[#595959] font-semibold pt-1'>{job.jobType}</h2>
                </div>
              </div>
            </div>

            <div className='my-4'>
              <h1 className='text-2xl font-semibold text-black py-2 tracking-wide'>About Company</h1>
              <p className='text-lg tracking-tight text-[#595959]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur ab vitae in aut eaque voluptas rem ut laudantium. Porro magnam cupiditate voluptas alias assumenda modi molestias laborum ullam sapiente error! Tempora non culpa molestiae beatae aperiam ipsum laboriosam ea? Quam, explicabo facere? Veniam, quisquam esse eum aspernatur ea aliquid modi.</p>
            </div>

            <div className='my-4'>
              <h1 className='text-2xl font-semibold text-black py-2 tracking-wide'>About the job/internship</h1>
              <p className='text-lg tracking-tight text-[#595959] mb-2 w-[60%]'>{job.description}</p>
              <p className='text-lg tracking-tight text-[#595959] w-[50%]'>{job.information}</p>
            </div>
            <div className='my-4'>
              <h1 className='text-2xl font-semibold text-black py-2 tracking-wide flex'>Skill<span className=' flex justify-center items-center mr-2'>(s)</span>Required</h1>
              <div className='flex gap-2 my-2'>
                {job.skills.map((skill, index) => {
                  return <div
                    className='bg-[#FFEEEE] px-5 py-2 rounded-2xl text-lg text-[#595959]'
                    key={index}>{skill}</div>;
                })}
              </div>
            </div>
            <div className='my-4'>
              <h1 className='text-2xl font-semibold text-black py-2 tracking-wide'>Additional Information</h1>
              <p className='text-lg tracking-tight text-[#595959] w-[60%]'>{job.additionalInformation}</p>
            </div>

          </div>

        </div>
      )}
    </div>
  );
}

export default JobPage
