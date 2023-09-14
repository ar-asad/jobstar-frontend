import Logo from "../../components/Logo/Logo";
import Container from "../../components/Shared/Container";
import banner from '../../assets/main.svg';
import { Link } from "react-router-dom";

const Landing = () => {
    return (
        <Container>
            <div>
                <div className="flex items-center pt-10 ">
                    <Logo />
                </div>
                <div className="hero min-h-[calc(100vh-140px)] ">
                    <div className="hero-content flex-col lg:flex-row-reverse ps-0">
                        <img src={banner} className=" " />
                        <div className="">
                            <h1 className="text-5xl font-extrabold tracking-tight">Job <span className="text-blue-500">Tracking</span> App</h1>
                            <p className="py-6 w-11/12 leading-loose text-sm">Crucifix narwhal street art asymmetrical, humblebrag tote bag pop-up fixie raclette taxidermy craft beer. Brunch bitters synth, VHS crucifix heirloom meggings bicycle rights.</p>
                            <Link to="/login">
                                <button className=" bg-blue-500 rounded-md px-8 py-2 text-white cursor-pointer
                           hover:bg-blue-600 transition duration-200">Login/Register</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Landing;