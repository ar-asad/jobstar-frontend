import { FaRegChartBar, FaWpforms } from "react-icons/fa";
import { MdQueryStats } from "react-icons/md";
import { ImProfile } from "react-icons/im";

const links = [
    {
        id: 1,
        text: "Stats",
        path: "/dashboard",
        icon: <FaRegChartBar></FaRegChartBar>,
    },
    {
        id: 2,
        text: "All Jobs",
        path: "all-jobs",
        icon: <MdQueryStats></MdQueryStats>,
    },
    {
        id: 3,
        text: "Add Job",
        path: "add-job",
        icon: <FaWpforms></FaWpforms>,
    },
    {
        id: 4,
        text: "Profile",
        path: "profile",
        icon: <ImProfile></ImProfile>,
    },
];

export default links;