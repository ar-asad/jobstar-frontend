
import { useSelector } from "react-redux";
import Jobs from "./Jobs";
import Loader from "../Shared/Loader";


const JobsContainer = () => {
    const allJobs = useSelector((state) => state.allJobs);

    return (
        allJobs.isLoading ? <Loader /> :
            <div className=" mb-14 ">
                <h5 className="text-lg font-bold mb-5">
                    {allJobs?.totalJobs} Job{allJobs?.totalJobs?.length > 1 && "s"} Found
                </h5>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 rounded">
                    {allJobs.jobs?.map((job) => {
                        return <Jobs key={job._id} {...job} />;
                    })}
                </div>
                {/* {numOfPages > 1 && <PageBtnContainer />} */}
            </div>
    );


};

export default JobsContainer;