import { Link, useNavigate } from "react-router-dom";
import Logo from "../../components/Logo/Logo";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../features/user/userSlice";
import { useEffect } from "react";


const Login = () => {
    const user = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    console.log(user);

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const userInfo = {
            email,
            password
        }

        dispatch(loginUser(userInfo))
        form.reset();
    }

    useEffect(() => {
        if (user?.user) {
            setTimeout(() => {
                navigate("/dashboard");
            }, 2000);
        }
    }, [user, navigate]);


    return (
        <div className='flex justify-center items-center min-h-screen bg-base-300 shadow-2xl'>
            <div className='flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-100 text-gray-900  border-t-8 border-blue-500'>
                <div className='mb-6 text-center'>
                    <div className="flex justify-center mb-6">
                        <Logo />
                    </div>
                    <h1 className='my-3 text-3xl '>Login</h1>
                </div>
                <form
                    onSubmit={handleSubmit}
                    noValidate=''
                    action=''
                    className='space-y-6 ng-untouched ng-pristine ng-valid'
                >
                    <div className='space-y-6'>
                        <div>
                            <label htmlFor='email' className='block mb-2 text-normal font-medium'>
                                Email
                            </label>
                            <input
                                // ref={emailRef}
                                type='email'
                                name='email'
                                id='email'
                                required
                                placeholder='Enter Your Email Here'
                                className='w-full px-3 py-1 border rounded-md border-gray-300 focus:outline-black-500 bg-gray-200 text-gray-900'
                                data-temp-mail-org='0'
                            />
                        </div>
                        <div>
                            <div className='flex justify-between'>
                                <label htmlFor='password' className='block mb-2 text-normal font-medium'>
                                    Password
                                </label>
                            </div>
                            <input
                                type='password'
                                name='password'
                                id='password'
                                required
                                placeholder='*******'
                                className='w-full px-3 py-1 border rounded-md border-gray-300 focus:outline-black-500 bg-gray-200 text-gray-900'
                            />
                        </div>
                    </div>

                    <div>
                        <button
                            type='submit'
                            className="w-full bg-blue-500 rounded-md px-8 py-2 text-white cursor-pointer
                            hover:bg-blue-600 transition duration-300"
                        >
                            {user?.isLoading ? (
                                'Loading...'
                            ) : (
                                'Login'
                            )}
                        </button>
                    </div>
                </form>
                <div className='space-y-1'>
                    {/* <button
                        // onClick={handleReset}
                        className='text-xs hover:underline hover:text-rose-500 text-gray-400'
                    >
                        Forgot password?
                    </button> */}
                </div>
                <p className='px-6 py-4 text-normal font-normal text-center '>
                    Not a member yet?{' '}
                    <Link
                        to='/signup'
                        className='hover:underline hover:text-blue-700 text-blue-400 trantision duration-300'
                    >
                        Sign up
                    </Link>
                    .
                </p>
                <div className='flex items-center pt-4 space-x-1'>
                    <div className='flex-1 h-px sm:w-16 bg-gray-700'></div>
                    <p className='px-3 text-sm text-gray-400'>
                        Login with social accounts
                    </p>
                    <div className='flex-1 h-px sm:w-16 bg-gray-700'></div>
                </div>

            </div>
        </div>
    );
};

export default Login;