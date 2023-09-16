

const JobInfo = ({ icon, text }) => {
    return (
        <div className="flex gap-4 items-center">
            <span className="">{icon}</span>
            <span className="">{text}</span>
        </div>
    );
};

export default JobInfo;