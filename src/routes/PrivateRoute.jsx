import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
// import Loader from "../components/Shared/Loader";

const PrivateRoute = ({ children }) => {
    const { user } = useSelector((state) => state.user);
    const location = useLocation();


    // if (isLoading) {
    //     // return <Loader />
    // }

    if (user) {
        return children;
    }
    return <Navigate to="/landing" state={{ from: location }} replace></Navigate>
};

export default PrivateRoute;