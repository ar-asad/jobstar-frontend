import { GridLoader } from "react-spinners";

const Loader = () => {
    return (
        <div className="h-[10vh] flex flex-col justify-center items-center " >
            <GridLoader size={10} color="blue" />

        </div>
    );
};

export default Loader;


