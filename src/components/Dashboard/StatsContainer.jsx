import { FaSuitcaseRolling, FaRegCalendarCheck, FaBug } from "react-icons/fa";
import StatsItem from '../Dashboard/StatsItem';
import { useGetJobsQuery } from "../../features/api/apiSlice";


const StatsContainer = () => {

    const { data, isLoading, isError } = useGetJobsQuery();

    const stats = data?.data;

    const defaultStats = [
        {
            title: "Pending Applications",
            count: stats?.stats?.pending || 0,
            icon: <FaSuitcaseRolling />,
            color: "#e9b949",
            bcg: "#fcefc7",
        },
        {
            title: "Interviews Scheduled",
            count: stats?.stats?.interview || 0,
            icon: <FaRegCalendarCheck />,
            color: "#647acb",
            bcg: "#e0e8f9",
        },
        {
            title: "Jobs Declined",
            count: stats?.stats?.declined || 0,
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