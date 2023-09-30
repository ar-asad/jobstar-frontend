import { useDispatch, useSelector } from "react-redux";
import { clearFilters, getAllJobs, handleChange } from "../../features/allJobs/allJobsSlice";
import { useEffect } from "react";


const SearchContainer = () => {
    const allJobsFilter = useSelector((state) => state.allJobs);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllJobs());
    }, [dispatch]);

    const handleSearch = (e) => {
        dispatch(handleChange({ name: e.target.name, value: e.target.value }));
        setTimeout(() => {
            dispatch(getAllJobs());
        }, 1300);
    };

    const handleClearFilters = () => {
        dispatch(clearFilters());
        dispatch(getAllJobs());
    }

    return (
        <div className="bg-white  mt-16 lg:mt-20  p-8 mb-16 shadow-md hover:shadow-xl transition duration-500 rounded">
            <h2 className="text-2xl mb-6 text-black">Search Form</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4 items-center">
                <div>
                    <label htmlFor='search' className='block mb-2 text-normal font-medium text-slate-600'>
                        Search
                    </label>
                    <input
                        value={allJobsFilter?.search}
                        // ref={emailRef}
                        onChange={handleSearch}
                        type='text'
                        name='search'
                        id='search'
                        className='w-full px-3 py-1 border rounded border-gray-300 focus:outline-black-500 bg-slate-100 text-gray-900'
                        data-temp-mail-org='0'
                    />
                </div>
                <div>
                    <label htmlFor='status' className='block mb-2 text-normal font-medium text-slate-600'>
                        Status
                    </label>
                    <select
                        value={allJobsFilter?.searchStatus}
                        onChange={handleSearch}
                        name="searchStatus"
                        id="status"
                        className=" w-full px-3 py-[6px] border rounded border-gray-300 focus:outline-black-500 bg-slate-100 text-gray-900">
                        {allJobsFilter?.statusOptions.map((op) => (
                            <option key={op}>{op}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <label htmlFor='type' className='block mb-2 text-normal font-medium text-slate-600'>
                        Type
                    </label>
                    <select
                        value={allJobsFilter?.searchType}
                        onChange={handleSearch}
                        name="searchType"
                        id="type"
                        className=" w-full px-3 py-[6px] border rounded border-gray-300 focus:outline-black-500 bg-slate-100 text-gray-900">
                        {allJobsFilter?.jobTypeOptions.map((op) => (
                            <option key={op}>{op}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <label htmlFor='sort' className='block mb-2 text-normal font-medium text-slate-600'>
                        Sort
                    </label>
                    <select
                        value={allJobsFilter?.sort}
                        onChange={handleSearch}
                        name="sort"
                        id="sort"
                        className=" w-full px-3 py-[6px] border rounded border-gray-300 focus:outline-black-500 bg-slate-100 text-gray-900">
                        {allJobsFilter?.sortOptions.map((op) => (
                            <option key={op}>{op}</option>
                        ))}
                    </select>
                </div>
                <div className=" mt-[29.5px]">
                    <button
                        onClick={handleClearFilters}
                        className="w-full bg-blue-500 rounded px-8 py-[6px] text-white cursor-pointer
                           hover:bg-blue-600 transition duration-200">
                        Clear Filter
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SearchContainer;