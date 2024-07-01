import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import { fetchJobById, deleteJob } from '../api/Job';
import { Toaster, toast } from 'react-hot-toast';
import MoneyBill from '../assets/moneyBill.png'
import Duration from '../assets/duration.png'


const JobPage = ({ currentUser, setCurrentUser, back, setBack }) => {
  const navigate = useNavigate();
  const [job, setJob] = useState();
  const [showModal, setShowModal] = useState(false);
  const jobID = window.location.pathname.split("/").pop();
  const UserId = localStorage.getItem('user');

  useEffect(() => {
    fetchJob();
    setBack(true);
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
      }
    } catch (error) {
      console.log(error);
      return response.status;
    }
  };

  const handleDeleteJob = async () => {
    setShowModal(true);
  };

  const confirmDeleteJob = async () => {
    try {
      if (UserId == job.refUserId) {
        const response = await deleteJob(job._id);
        console.log(response);
        if (response.status == 200) {
          navigate('/');
        }
      }
      toast.error('You are not authorized');
      setShowModal(false);
    } catch (error) {
      console.log(error);
      return response.status;
    }
    finally {
      setShowModal(false);
    }
  }

  return (
    <div>
      <Header currentUser={currentUser} setCurrentUser={setCurrentUser} back={back} />
      <Toaster position="top-center" reverseOrder={false} />
      {job && (
        <div className='flex flex-col justify-center items-center mb-16'>
          <div className='w-[80%] md:h-40 h-20 bg-white flex justify-center items-center rounded-sm md:-translate-y-8  -translate-y-2 shadow-lg'>
            <h1 className='w-[95%] px-4 tracking-wide md:text-4xl text-center'>{job.title}&nbsp;{job.locationType}&nbsp;{job.jobType}&nbsp;At&nbsp;{job.companyName}</h1>
          </div>
          <div className='flex flex-col bg-white shadow-lg rounded-sm w-[80%] h-fit md:px-24 md:py-16 py-4'>

            <div className='relative'>
              <div className='flex md:items-center items-start justify-center md:justify-start md:px-0 px-2'>
                <div className='flex flex-col md:flex-row justify-center items-start md:pt-0 pt-1'>
                  <p className='md:text-sm text-[0.5rem] text-[#999999] md:mx-1'>{timeElapsed(job.createdAt)}</p>
                  <p className='md:mx-2 text-[#999999] md:text-xl text-xs'>{job.jobType}</p>
                </div>
                <div className='flex justify-center items-center ml-4 md:ml-0'>
                  <img className='md:w-20 md:h-20 w-8 h-8 shadow-lg rounded-full md:ml-8' src={job.logoUrl} alt="job logo" />
                  <p className='mx-4 md:text-xl text-sm text-[#999999]'>{job.companyName}</p>
                </div>
              </div>

              <div className='my-4 flex'>
                <div className='md:w-[60%] flex flex-col gap-1'>
                  <h4 className='md:text-5xl text-2xl md:px-0 px-3'>{job.title}</h4>
                  <p className='md:text-2xl text-lg text-[#ED5353] md:mt-4 md:px-0 px-3'>{job.location}</p>
                </div>
                {currentUser &&
                  <div className='flex flex-col gap-2 justify-end items-center absolute right-4 md:bottom-12 bottom-3 md:mx-0 mx-1'>
                    <button
                      className='md:mx-6 md:px-7 px-[1.125rem] py-1 shadow-md rounded-md border bg-[#ED5353] hover:bg-[#FF6B6B] text-white md:text-lg text-xs hover:duration-300'
                      onClick={() => {
                        navigate(`/edit/${jobID}`);
                      }}
                    >Edit Job</button>
                    <button
                      className='md:mx-6 md:px-4 px-3 py-1 shadow-md rounded-md border bg-[#ED5353] hover:bg-[#FF6B6B] text-white md:text-lg text-xs hover:duration-300'
                      onClick={handleDeleteJob}
                    >Delete Job</button>
                  </div>}
              </div>

              <div className='my-4 px-1 flex'>
                <div className='flex flex-col md:px-0 px-2'>
                  <div className='flex justify-start items-center'>
                    <img className='md:w-fit md:h-fit w-4 h-4' src={MoneyBill} alt="moneyBillImage" />
                    <p className='text-[#999999] md:text-sm text-xs tracking-wide md:px-2 px-0.5'>Stipend</p>
                  </div>
                  <h2 className='text-[#595959] font-semibold md:text-sm text-xs'>Rs {job.salary}/month</h2>
                </div>
                <div className='md:ml-5 flex flex-col justify-center'>
                  <div className='flex justify-start items-center md:pt-1'>
                    <img className='md:w-fit md:h-fit w-3 h-3' src={Duration} alt="durationImage" />
                    <p className='text-[#999999] md:text-sm text-xs tracking-wide md:px-2 px-0.5'>Duration</p>
                  </div>
                  <h2 className='text-[#595959] font-semibold md:text-sm text-xs md:pt-1 md:pl-0 pl-3.5'>{job.jobType}</h2>
                </div>
              </div>
            </div>

            <div className='my-4 md:mx-0 mx-4'>
              <h1 className='md:text-2xl text-lg font-semibold text-black py-2 tracking-wide'>About Company</h1>
              <p className='md:text-lg text-base tracking-tight text-[#595959] md:w-[80%]'>{job.information}</p>
            </div>

            <div className='my-4 md:mx-0 mx-4'>
              <h1 className='md:text-2xl text-lg font-semibold text-black py-2 tracking-wide'>About the job/internship</h1>
              <p className='md:text-lg text-base tracking-tight text-[#595959] mb-2 md:w-[80%]'>{job.description}</p>
            </div>

            <div className='my-4 md:mx-0 mx-4'>
              <h1 className='md:text-2xl text-lg font-semibold text-black py-2 tracking-wide flex'>Skill<span className=' flex justify-center items-center mr-2'>(s)</span>Required</h1>
              <div className='flex gap-2 my-2 md:flex-nowrap flex-wrap'>
                {job.skills.map((skill, index) => {
                  return <div
                    className='bg-[#FFEEEE] md:px-5 px-3 md:py-2 py-1 rounded-2xl md:text-lg text-xs text-[#595959]'
                    key={index}>{skill}</div>;
                })}
              </div>
            </div>
            <div className='my-4 md:mx-0 mx-4'>
              <h1 className='md:text-2xl text-lg font-semibold text-black py-2 tracking-wide'>Additional Information</h1>
              <p className='md:text-lg text-base tracking-tight text-[#595959] md:w-[60%]'>{job.additionalInformation}</p>
            </div>
          </div>
        </div>
      )}
      {showModal && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="md:text-2xl text-lg mb-3">Confirm Deletion</h2>
            <p className='md:text-base text-sm'>Are you sure you want to delete this job?</p>
            <div className="flex gap-2 justify-end mt-6">
              <button
                className="px-4 py-1 text-[#C2C2C2] md:text-base text-xs border border-[#CECECE] hover:bg-[#595959] hover:text-white hover:duration-300 rounded-md"
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>
              <button
                className="px-4 py-1 shadow-md rounded-md border bg-[#ED5353] hover:bg-[#FF6B6B] text-white md:text-base text-xs hover:duration-300"
                onClick={confirmDeleteJob}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default JobPage
