import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateJob } from "../../features/job/jobSlice";
import toast from "react-hot-toast";


const Editjobs = () => {
    const dispatch = useDispatch();
    const allJobs = useSelector((state) => state.allJobs)
    const job = useSelector((state) => state.job);
    const navigate = useNavigate();

    const { id } = useParams()
    const editJob = allJobs?.jobs?.find(singleJob => singleJob._id === id)
    console.log(id)

    const [editJobData, setEditJobData] = useState({
        position: editJob?.position || "",
        company: editJob?.company || "",
        jobLocation: editJob?.jobLocation || "",
        jobType: editJob?.jobType || "",
        status: editJob?.status || "",
    });

    const handleClearValues = () => {
        const intialEditJobInfo = {
            position: "",
            company: "",
            jobLocation: "",
            jobType: "",
            status: "",
        }
        setEditJobData(intialEditJobInfo);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!editJobData?.position || !editJobData?.company || !editJobData?.jobLocation || !editJobData?.jobType || !editJobData?.status) {
            toast.error('Please fill out all Fields!')
            return;
        }

        dispatch(updateJob({ id, editJobData }));
        handleClearValues();
        navigate('/dashboard/add-job')
    };

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setEditJobData({ ...editJobData, [name]: value });
    };



    return (
        <div className="bg-white lg:mb-48 mt-8 mx-5 lg:mx-14 py-14 px-8 mb-20 shadow-md hover:shadow-xl transition duration-500 rounded">
            <h2 className="lg:text-3xl text-3xl mb-6 text-black">Edit Job</h2>
            <form
                onSubmit={handleSubmit}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4 items-center">
                <div>
                    <label htmlFor='position' className='block mb-2 text-normal font-medium text-slate-600'>
                        Position
                    </label>
                    <input
                        onChange={handleChange}
                        value={editJobData?.position}
                        type='text'
                        name='position'
                        id='position'
                        className='w-full px-3 py-1 border rounded border-gray-300 focus:outline-black-500 bg-slate-100 text-gray-900'
                        data-temp-mail-org='0'
                    />
                </div>
                <div>
                    <label htmlFor='company' className='block mb-2 text-normal font-medium text-slate-600'>
                        Company
                    </label>
                    <input
                        onChange={handleChange}
                        value={editJobData?.company}
                        type='text'
                        name='company'
                        id='company'
                        className='w-full px-3 py-1 border rounded border-gray-300 focus:outline-black-500 bg-slate-100 text-gray-900'
                        data-temp-mail-org='0'
                    />
                </div>
                <div>
                    <label htmlFor='location' className='block mb-2 text-normal font-medium text-slate-600'>
                        Location
                    </label>
                    <input
                        onChange={handleChange}
                        value={editJobData?.jobLocation}
                        type='text'
                        name='jobLocation'
                        id='location'
                        className='w-full px-3 py-1 border rounded border-gray-300 focus:outline-black-500 bg-slate-100 text-gray-900'
                        data-temp-mail-org='0'
                    />
                </div>
                <div>
                    <label htmlFor='status' className='block mb-2 text-normal font-medium text-slate-600'>
                        Status
                    </label>
                    <select
                        onChange={handleChange}
                        value={editJobData?.status}
                        name="status"
                        id="status"
                        className=" w-full px-3 py-[6px] border rounded border-gray-300 focus:outline-black-500 bg-slate-100 text-gray-900">
                        {job?.statusOptions.map((op) => (
                            <option key={op}>{op}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <label htmlFor='type' className='block mb-2 text-normal font-medium text-slate-600'>
                        JobType
                    </label>
                    <select
                        onChange={handleChange}
                        value={editJobData?.jobType}
                        id="type"
                        name="jobType"
                        className=" w-full px-3 py-[6px] border rounded border-gray-300 focus:outline-black-500 bg-slate-100 text-gray-900">
                        {job?.jobTypeOptions.map((op) => (
                            <option key={op}>{op}</option>
                        ))}
                    </select>
                </div>

                <div className=" mt-[29.5px] flex items-center gap-4">
                    <button
                        type="button"
                        onClick={handleClearValues}
                        className=" bg-slate-500 rounded flex-1  py-[6px] text-white cursor-pointer
                       hover:bg-gray-800 transition duration-200">
                        Clear
                    </button>
                    <button
                        type="submit"
                        className=" bg-blue-500 rounded flex-1 py-[6px] text-white cursor-pointer
                       hover:bg-blue-600 transition duration-200">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Editjobs;