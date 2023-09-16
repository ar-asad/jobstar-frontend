

const SearchContainer = () => {
    return (
        <div className="bg-white  mt-16 lg:mt-20 mx-5 lg:mx-14 p-8 mb-16 shadow-md hover:shadow-xl transition duration-500">
            <h2 className="text-2xl mb-6 text-black">Search Form</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4 items-center">
                <div>
                    <label htmlFor='search' className='block mb-2 text-normal font-medium text-slate-600'>
                        Search
                    </label>
                    <input
                        // ref={emailRef}
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
                        id="status"
                        className=" w-full px-3 py-[6px] border rounded border-gray-300 focus:outline-black-500 bg-slate-100 text-gray-900">
                        <option selected>all</option>
                        <option>Han Solo</option>
                        <option>Greedo</option>
                    </select>
                </div>
                <div>
                    <label htmlFor='type' className='block mb-2 text-normal font-medium text-slate-600'>
                        Type
                    </label>
                    <select
                        id="type"
                        className=" w-full px-3 py-[6px] border rounded border-gray-300 focus:outline-black-500 bg-slate-100 text-gray-900">
                        <option selected>all</option>
                        <option>Han Solo</option>
                        <option>Greedo</option>
                    </select>
                </div>
                <div>
                    <label htmlFor='sort' className='block mb-2 text-normal font-medium text-slate-600'>
                        Sort
                    </label>
                    <select
                        id="sort"
                        className=" w-full px-3 py-[6px] border rounded border-gray-300 focus:outline-black-500 bg-slate-100 text-gray-900">
                        <option selected>all</option>
                        <option>Han Solo</option>
                        <option>Greedo</option>
                    </select>
                </div>
                <div className=" mt-[29.5px]">
                    <button className="w-full bg-blue-500 rounded px-8 py-[6px] text-white cursor-pointer
                           hover:bg-blue-600 transition duration-200">
                        Clear Filter
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SearchContainer;