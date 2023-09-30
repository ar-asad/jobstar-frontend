import { useState } from "react";
import Logo from "../Logo/Logo";
import { FaAlignLeft, FaUserCircle, FaCaretDown } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { clearFilters } from "../../features/allJobs/allJobsSlice";
import { logoutUser, toggleSidebar } from "../../features/user/userSlice";
import { clearValues } from "../../features/job/jobSlice";


const Navbar = () => {
    const dispatch = useDispatch();
    const [showLogout, setShowLogout] = useState(false);
    const user = useSelector((state) => state.user.user)

    // const dispatch = useDispatch();
    // const handleClick = () => {
    //     console.log('toggle')
    // }

    return (
        <div className="flex items-center z-20 justify-between bg-white px-2 lg:px-10  py-6 gap-x-4 lg:gap-x-0 ">
            <div className="ps-6">
                <button
                    type="button"
                    className=""
                    onClick={() => dispatch(toggleSidebar())}
                >
                    <FaAlignLeft className="text-2xl text-blue-500"></FaAlignLeft>
                </button>
            </div>
            <div className="lg:hidden">
                <Logo />
            </div>
            <div className="text-3xl hidden lg:block">
                Dashboard
            </div>
            <div className="relative">
                <button
                    onClick={() => setShowLogout(!showLogout)}
                    className=" bg-blue-500 rounded px-4 py-1 text-white cursor-pointer hover:bg-blue-600 transition duration-200 flex items-center gap-2">
                    <FaUserCircle></FaUserCircle>
                    {user?.name}
                    <FaCaretDown></FaCaretDown>
                </button>
                <button
                    className={`${showLogout ? 'block' : 'hidden'} absolute mt-3  bg-blue-100 rounded px-10 py-3 text-sm text-blue-500 cursor-pointer`}

                    type="button"
                    onClick={() => {
                        dispatch(logoutUser("Logging out..."));
                        dispatch(clearFilters());
                        dispatch(clearValues());
                    }}
                >
                    Logout
                </button>
            </div>
        </div>
    );
};

export default Navbar;