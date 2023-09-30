import Logo from "../Logo/Logo";
import Navlinks from "./Navlinks";


const Sidebar = () => {
    return (
        <div className="bg-white  mb-2 hidden lg:block">
            <div>
                <Logo />
            </div>
            <div>
                <Navlinks />
            </div>
        </div>
    );
};

export default Sidebar;