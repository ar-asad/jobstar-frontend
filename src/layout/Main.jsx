import { Outlet } from "react-router-dom";


const Main = () => {
    return (
        <div className="bg-slate-100">
            <Outlet />
        </div>
    );
};

export default Main;