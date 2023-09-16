import { Link } from "react-router-dom";
import JobInfo from "./JobInfo";
import { FaLocationArrow, FaCalendarAlt, FaBriefcase } from "react-icons/fa";


const Jobs = ({ position, company, jobLocation, jobType, createAt, status }) => {
    return (
        <div className="bg-white shadow-lg rounded">
            <div className="px-5 py-3 flex items-center gap-6">
                <div className="uppercase py-2 px-6 rounded bg-blue-500 font-bold text-2xl text-white">{company.charAt(0)}</div>
                <div className="flex-1">
                    <h5 className="text-lg">{position}</h5>
                    <p className="text-sm text-slate-400">{company}</p>
                </div>
            </div>
            <hr />
            <div className="px-5 pt-6 pb-3 ">
                <div className="grid grid-cols-2 gap-x-14 gap-y-6 mb-4">
                    <JobInfo icon={<FaLocationArrow />} text={jobLocation} />
                    <JobInfo
                        icon={<FaCalendarAlt />}
                        text={createAt}
                    // text={new Date(createAt).toLocaleDateString("en-US", {
                    //     day: "numeric",
                    //     month: "long",
                    //     year: "numeric",
                    // })}
                    />
                    <JobInfo icon={<FaBriefcase />} text={jobType} />
                    <div className="flex justify-start">
                        <div className={`${status == 'interview' ? 'bg-blue-100 text-sky-600' : status == 'pending' ? 'bg-amber-100 text-amber-400' : 'bg-red-100 text-red-400'} py-1 px-3  rounded`} >{status}</div>
                    </div>
                </div>
                <div>
                    <div className="flex gap-4">
                        <Link to="/dashboard/edit-job"
                            className=" bg-green-200 rounded px-4 py-1 text-sm font-normal text-green-950 cursor-pointer   hover:drop-shadow-2xl shadow-lg">Edit</Link>
                        <button
                            type="button"
                            className=" bg-rose-200 rounded px-4 py-1 text-sm font-normal text-red-950 cursor-pointer shadow-lg hover:drop-shadow-2xl
                           "
                        // onClick={() => {
                        //   dispatch(deleteJob(_id));
                        // }}
                        >
                            Delete
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Jobs;