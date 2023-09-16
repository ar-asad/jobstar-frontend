

const Profile = () => {
    return (
        <div className="bg-white  mt-8 lg:mb-56 mx-5 lg:mx-14 px-8 py-14 mb-20 shadow-md hover:shadow-xl transition duration-500">
            <h2 className="text-3xl mb-6 text-black">Profile</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4 items-center">
                <div>
                    <label htmlFor='name' className='block mb-2 text-normal font-medium text-slate-600'>
                        Name
                    </label>
                    <input
                        // ref={emailRef}
                        type='text'
                        name='name'
                        id='name'
                        className='w-full px-3 py-1 border rounded border-gray-300 focus:outline-black-500 bg-slate-100 text-gray-900'
                        data-temp-mail-org='0'
                    />
                </div>
                <div>
                    <label htmlFor='email' className='block mb-2 text-normal font-medium text-slate-600'>
                        Email
                    </label>
                    <input
                        // ref={emailRef}
                        type='email'
                        name='email'
                        id='email'
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

                <div className="">
                    <button className="w-full bg-blue-500 rounded px-8 py-[6px] text-white cursor-pointer
                       hover:bg-blue-600 transition duration-200">
                        Save Changes
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Profile;