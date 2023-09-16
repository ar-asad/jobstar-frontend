import Jobs from "./Jobs";


const JobsContainer = () => {
    const jobs = [
        {
            _id: '1',
            position: 'React-devloper',
            company: 'it center',
            jobLocation: 'dhaka',
            jobType: 'Full time',
            createAt: 'December 22, 2022',
            status: 'interview'
        },
        {
            _id: '1',
            position: 'React-devloper',
            company: 'it center',
            jobLocation: 'dhaka',
            jobType: 'Full time',
            createAt: 'December 22, 2022',
            status: 'pending'
        },
        {
            _id: '1',
            position: 'React-devloper',
            company: 'it center',
            jobLocation: 'dhaka',
            jobType: 'Full time',
            createAt: 'December 22, 2022',
            status: 'declined'
        },
        {
            _id: '1',
            position: 'React-devloper',
            company: 'it center',
            jobLocation: 'dhaka',
            jobType: 'Full time',
            createAt: 'December 22, 2022',
            status: 'interview'
        },
    ]

    return (
        <div className=" mx-5 lg:mx-14 mb-20 ">
            <h5 className="text-lg font-bold mb-5">
                {jobs.length} Job{jobs.length > 1 && "s"} Found
            </h5>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 rounded">
                {jobs.map((job) => {
                    return <Jobs key={job._id} {...job} />;
                })}
            </div>
            {/* {numOfPages > 1 && <PageBtnContainer />} */}
        </div>
    );
};

export default JobsContainer;