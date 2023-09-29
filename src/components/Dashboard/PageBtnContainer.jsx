import { useDispatch, useSelector } from "react-redux";
import { BsChevronDoubleLeft, BsChevronDoubleRight } from "react-icons/bs";
import { getAllJobs, increasePageValueByOne, decreasePageValueByOne, changePage } from "../../features/allJobs/allJobsSlice";


const PageBtnContainer = () => {
    const { page, numOfPages } = useSelector((store) => store.allJobs);
    const dispatch = useDispatch();
    console.log(numOfPages)

    const pages = Array.from({ length: numOfPages }, (_, index) => {
        return index + 1;
    });

    console.log(page)

    const nextPage = () => {
        if (page === numOfPages) return;
        dispatch(increasePageValueByOne());
        dispatch(getAllJobs());
    };
    const prevPage = () => {
        if (page === 1) return;
        dispatch(decreasePageValueByOne());
        dispatch(getAllJobs());
    };

    return (
        <div className="flex justify-end  mx-5 lg:mx-14 mb-16">
            <div className="flex items-center gap-4">
                <button className="flex items-center gap-2 px-6 py-2 bg-white rounded hover:bg-blue-500 hover:text-white transition duration-300" onClick={prevPage}>
                    <BsChevronDoubleLeft className="text-xs" />
                    <span className="text-sm">Prev</span>
                </button>
                <div className="btn-container z-10 rounded">
                    {pages?.map((pageNumber) => {
                        return (
                            <button
                                type="button"
                                className={`px-4 py-1 text-lg font-bold overflow-hidden ${page == pageNumber ? 'bg-blue-500 text-white' : 'bg-blue-100'}`}
                                key={pageNumber}
                                onClick={() => {
                                    dispatch(changePage(pageNumber));
                                    dispatch(getAllJobs());
                                }}
                            >
                                {pageNumber}
                            </button>
                        );
                    })}
                </div>
                <button className="flex items-center gap-2 px-6 py-2 bg-white rounded hover:bg-blue-500 hover:text-white transition duration-300" onClick={nextPage}>
                    <span className="text-sm">Next</span>
                    <BsChevronDoubleRight className="text-xs" />
                </button>
            </div>
        </div>
    );
};

export default PageBtnContainer;