
import JobsContainer from "../../components/Dashboard/JobsContainer";
import PageBtnContainer from "../../components/Dashboard/PageBtnContainer";
import SearchContainer from "../../components/Dashboard/SearchContainer";


const Alljobs = () => {
    return (
        <div className="mx-5 lg:mx-16">
            <SearchContainer />
            <JobsContainer />
            <PageBtnContainer />
        </div>

    );
};

export default Alljobs;