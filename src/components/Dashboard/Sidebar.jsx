import Navlinks from "./Navlinks";


const Sidebar = () => {
    return (
        <div className="bg-white ms-2 pt-14  w-64 hidden lg:block z-10 sticky top-0">
            <Navlinks />
        </div>
    );
};

export default Sidebar;