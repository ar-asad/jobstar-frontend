import { FaSuitcaseRolling, FaRegCalendarCheck, FaBug } from "react-icons/fa";
import StatsItem from '../Dashboard/StatsItem';
const StatsContainer = () => {
    const stats = {
        pending: 10,
        interview: 8,
        declined: 12
    }
    const defaultStats = [
        {
            title: "Pending Applications",
            count: stats.pending || 0,
            icon: <FaSuitcaseRolling />,
            color: "#e9b949",
            bcg: "#fcefc7",
        },
        {
            title: "Interviews Scheduled",
            count: stats.interview || 0,
            icon: <FaRegCalendarCheck />,
            color: "#647acb",
            bcg: "#e0e8f9",
        },
        {
            title: "Jobs Declined",
            count: stats.declined || 0,
            icon: <FaBug />,
            color: "#d66a6a",
            bcg: "#ffeeee",
        },
    ];

    return (
        <div className=" mt-8 mx-5 lg:mx-14 lg:flex gap-5 ">
            {
                defaultStats.map((item, index) => {
                    return <StatsItem key={index} {...item} />
                })
            }
        </div>
    );
};

export default StatsContainer;