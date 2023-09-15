import { Outlet } from "react-router-dom";
import Sidebar from "../components/Dashboard/Sidebar";
import Navbar from "../components/Dashboard/Navbar";


const DashboardLayout = () => {
    return (
        <div className="bg-slate-100 ">
            <div className="mx-2 mt-2">
                <Navbar />
            </div>
            <div className="flex h-content">
                <Sidebar />
                <div className="border-t-[.1px] border-s-[.1px] border-slate-300 flex-1 h-full">
                    <Outlet />
                </div>
            </div>
        </div>

        // <div className='relative min-h-screen md:flex'>
        //     <Sidebar />
        //     <div className='flex-1  md:ml-64'>
        //         <div className='p-5'>
        //             <Outlet />
        //         </div>
        //     </div>
        // </div>
    );
};

export default DashboardLayout;