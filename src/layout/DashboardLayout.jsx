import { Outlet } from "react-router-dom";
import Sidebar from "../components/Dashboard/Sidebar";
import Navbar from "../components/Dashboard/Navbar";
import { useSelector } from "react-redux";


const DashboardLayout = () => {
    const { isSidebarOpen } = useSelector((state) => state.user);

    return (
        <div className="flex bg-slate-100 rounded ">
            <div className={`flex min-h-[calc(100vh)] mt-2  sticky top-0 ${isSidebarOpen ? 'ms-[-224px] transition-all duration-500' : 'ms-[8px] transition-all duration-500'}`} >
                <Sidebar />
            </div>
            <div className="flex-1">
                <div className=" mt-2">
                    <Navbar />
                </div>
                <div className={`bg-slate-100 flex-1 h-full lg:border-t-[.1px] border-slate-300 ${isSidebarOpen ? '' : ' lg:border-s-[.1px] '}`}>
                    <Outlet />
                </div>
            </div>
        </div>



        // <div className="grid grid-cols-12">
        //     <div className="col-start-1 col-end-3 row-span-full">
        //         <Sidebar />
        //     </div>
        //     <div className="mx-2 mt-2 col-start-4 col-end-12 bg-slate-300">
        //         <Navbar />
        //     </div>
        //     <div className="col-start-4 col-end-12">
        //         <Outlet />
        //     </div>
        // </div>



        // <div className="bg-slate-100 ">
        //     <div className="mx-2 mt-2">
        //         <Navbar />
        //     </div>
        //     <div className="flex min-h-[calc(100vh-90px)]">
        //         <Sidebar />
        //         <div className="border-t-[.1px] border-s-[.1px] border-slate-300 flex-1 h-full z-10">
        //             <Outlet />
        //         </div>
        //     </div>
        // </div>

    );
};

export default DashboardLayout;