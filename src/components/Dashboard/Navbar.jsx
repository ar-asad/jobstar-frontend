import { useState } from "react";
import Logo from "../Logo/Logo";
import { FaAlignLeft, FaUserCircle, FaCaretDown } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { clearFilters } from "../../features/allJobs/allJobsSlice";
import { logoutUser } from "../../features/user/userSlice";
import { clearValues } from "../../features/job/jobSlice";


const Navbar = () => {
    const [showLogout, setShowLogout] = useState(false);
    const user = useSelector((state) => state.user.user)

    const dispatch = useDispatch();

    return (
        <div className="flex items-center z-20 justify-between bg-white px-6 lg:px-10 py-4 gap-x-4 lg:gap-x-0 sticky top-0">
            <div className="flex items-center gap-48">
                <div className="w-28 lg:w-full">
                    <Logo />
                </div>
                <button
                    type="button"
                    className="hidden"
                //   onClick={() => dispatch(toggleSidebar())}
                >
                    <FaAlignLeft></FaAlignLeft>
                </button>
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

                    // type="button"
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