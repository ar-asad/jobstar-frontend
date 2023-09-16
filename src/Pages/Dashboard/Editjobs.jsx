

const Editjobs = () => {
    return (
        <div className="bg-white lg:mb-48 mt-8 mx-5 lg:mx-14 py-14 px-8 mb-20 shadow-md hover:shadow-xl transition duration-500">
            <h2 className="lg:text-3xl text-3xl mb-6 text-black">Edit Job</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4 items-center">
                <div>
                    <label htmlFor='position' className='block mb-2 text-normal font-medium text-slate-600'>
                        Position
                    </label>
                    <input
                        // ref={emailRef}
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
                        // ref={emailRef}
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
                        // ref={emailRef}
                        type='text'
                        name='location'
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
                        id="status"
                        className=" w-full px-3 py-[6px] border rounded border-gray-300 focus:outline-black-500 bg-slate-100 text-gray-900">
                        <option selected>pending</option>
                        <option>Han Solo</option>
                        <option>Greedo</option>
                    </select>
                </div>
                <div>
                    <label htmlFor='type' className='block mb-2 text-normal font-medium text-slate-600'>
                        JobType
                    </label>
                    <select
                        id="type"
                        className=" w-full px-3 py-[6px] border rounded border-gray-300 focus:outline-black-500 bg-slate-100 text-gray-900">
                        <option selected>full-time</option>
                        <option>Han Solo</option>
                        <option>Greedo</option>
                    </select>
                </div>

                <div className=" mt-[29.5px] flex items-center gap-4">
                    <button className=" bg-slate-500 rounded flex-1  py-[6px] text-white cursor-pointer
                       hover:bg-gray-800 transition duration-200">
                        Clear
                    </button>
                    <button className=" bg-blue-500 rounded flex-1 py-[6px] text-white cursor-pointer
                       hover:bg-blue-600 transition duration-200">
                        Submit
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Editjobs;