import { useDispatch, useSelector } from "react-redux";
import { clearValues, handleChange } from "../../features/job/jobSlice";
import { useEffect } from "react";
import { useAddJobsMutation } from "../../features/api/apiSlice";
import toast from "react-hot-toast";


const Addjobs = () => {
    const dispatch = useDispatch();
    const job = useSelector(state => state.job);

    const handleSearch = (e) => {
        dispatch(handleChange({ name: e.target.name, value: e.target.value }));
    };

    const [postJobs, { isLoading, isSuccess, isError, error }] = useAddJobsMutation();



    useEffect(() => {
        if (isLoading) {
            toast.loading("Posting....", { id: 'addJobs' });
        }
        if (isSuccess) {
            toast.success("Job added", { id: 'addJobs' });

        }
        if (isError) {
            toast.error('error')
        }

    }, [isLoading, isSuccess, isError, error]);

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const position = form.position.value;
        const company = form.company.value;
        const jobLocation = form.jobLocation.value;
        const status = form.status.value;
        const jobType = form.jobType.value;

        const jobData = {
            position: position.toLowerCase(),
            company: company.toLowerCase(),
            jobLocation: jobLocation.toLowerCase(),
            status,
            jobType
        }
        if (!jobData.position || !jobData.company || !jobData.jobLocation) {
            toast.error('Please Fill Out All Fields');
            return;
        }
        postJobs(jobData);
        dispatch(clearValues());

    }


    return (
        <div className="bg-white lg:mb-48 mt-8 mx-5 lg:mx-14 py-14 px-8 mb-20 shadow-md hover:shadow-xl transition duration-500 rounded">
            <h2 className="lg:text-3xl text-3xl mb-6 text-black">Add Job</h2>
            <form
                onSubmit={handleSubmit}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4 items-center">
                <div>
                    <label htmlFor='position' className='block mb-2 text-normal font-medium text-slate-600'>
                        Position
                    </label>
                    <input
                        onChange={handleSearch}
                        // ref={emailRef}
                        type='text'
                        value={job?.position}
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
                        onChange={handleSearch}
                        // ref={emailRef}
                        type='text'
                        value={job?.company}
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
                        onChange={handleSearch}
                        // ref={emailRef}
                        type='text'
                        value={job?.jobLocation}
                        name='jobLocation'
                        id='location'
                        className='w-full px-3 py-1 border rounded border-gray-300 focus:outline-black-500 bg-slate-100 text-gray-900'
                        data-temp-mail-org='0'
                    />
                </div>
                <div>
                    <label htmlFor='status'
                        className='block mb-2 text-normal font-medium text-slate-600'>
                        Status
                    </label>
                    <select
                        onChange={handleSearch}
                        name="status"
                        id="status"
                        value={job?.status}
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
                        onChange={handleSearch}
                        value={job?.jobType}
                        name="jobType"
                        id="type"
                        className=" w-full px-3 py-[6px] border rounded border-gray-300 focus:outline-black-500 bg-slate-100 text-gray-900">
                        {job?.jobTypeOptions.map((op) => (
                            <option key={op}>{op}</option>
                        ))}
                    </select>
                </div>

                <div className=" mt-[29.5px] flex items-center gap-4">
                    <button
                        type="button"
                        onClick={() => dispatch(clearValues())}
                        className=" bg-slate-500 rounded flex-1  py-[6px] text-white cursor-pointer hover:bg-gray-800 transition duration-200">
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

export default Addjobs;