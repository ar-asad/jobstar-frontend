import { NavLink } from "react-router-dom";
import links from "../../utils/links";


const Navlinks = () => {
    return (
        <div className="">
            {links.map((val) => (
                <NavLink
                    to={val.path}
                    key={val.id}
                    // onClick={isToggleSidebar ? () => dispatch(toggleSidebar()) : ""}
                    className={({ isActive }) =>
                        isActive ? "text-blue-500 bg-black" : " text-gray-500 "
                    }
                >
                    <div className="flex items-center gap-5 hover:bg-slate-100 ps-10 py-4 hover:translate-x-2 transition duration-500 ">
                        <span className="text-2xl">{val.icon}</span> {val.text}
                    </div>
                </NavLink>
            ))}
        </div>
    );
};

export default Navlinks;