import logo from '../../assets/logo.svg';

const Logo = () => {
    return (
        <div className='lg:pt-8 lg:ps-10 lg:pb-14'>
            <img className='lg:w-40 w-24' src={logo} alt="logo" />
        </div>
    );
};

export default Logo;