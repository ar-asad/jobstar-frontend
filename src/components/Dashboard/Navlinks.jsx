
import { Link, NavLink } from "react-router-dom";
import links from "../../utils/links";
// import { useState } from "react";


const Navlinks = () => {
    // const [activeLink, setActiveLink] = useState(1)

    return (
        <div className="">
            {links.map((val) => (
                <NavLink
                    // onClick={() => setActiveLink(val.id)}
                    to={val.path}
                    key={val.id}
                    // onClick={isToggleSidebar ? () => dispatch(toggleSidebar()) : ""}
                    className={({ isActive }) =>
                        isActive ? "text-blue-500 bg-black" : " text-gray-500 "
                    }
                >
                    {/* <div className={`${activeLink === val.id ? 'text-blue-500' : 'text-gray-500'}flex items-center gap-5  hover:text-blue-500 ps-10 pr-20 py-4 hover:translate-x-2 transition duration-500`}>
                        <span className="text-2xl ">{val.icon}</span> {val.text}
                    </div> */}
                    <div className={`flex items-center gap-5 hover:text-blue-500 ps-10 pr-20 py-4 hover:translate-x-2 transition duration-500`}>
                        <span className="text-2xl ">{val.icon}</span> {val.text}
                    </div>
                </NavLink>
            ))}
        </div>
    );
};

export default Navlinks;